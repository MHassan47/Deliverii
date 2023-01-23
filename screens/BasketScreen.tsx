import { View, Text, TouchableOpacity, Image, ScrollView } from "react-native";
import React, { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { useSelector, useDispatch } from "react-redux";
import { selectRestaurant } from "../redux/features/restaurantSlice";
import {
  removeFromBasket,
  selectBasketItems,
  selectBasketTotal,
} from "../redux/features/basketSlice";
import { Item } from "../redux/features/basketSlice";
import { SafeAreaView } from "react-native-safe-area-context";
import { XCircleIcon } from "react-native-heroicons/solid";
import { urlFor } from "../sanity";

const BasketScreen = () => {
  const navigation = useNavigation();
  const restaurant = useSelector(selectRestaurant);
  const basketTotal = useSelector(selectBasketTotal);
  const items = useSelector(selectBasketItems);
  const dispatch = useDispatch();
  const [groupedItemsInBasket, setGroupedItemsInBasket] = useState<{
    [key: string]: Item[];
  }>({});

  useEffect(() => {
    const groupedItems: { [key: string]: Item[] } = {};
    items.forEach((item) => {
      console.log("+++++", item);
      if (groupedItems[item.id] === undefined) {
        groupedItems[item.id] = [];
        groupedItems[item.id].push(item);
      } else {
        groupedItems[item.id].push(item);
      }
    });
    setGroupedItemsInBasket(groupedItems);
  }, [items]);

  console.log(groupedItemsInBasket);
  return (
    <SafeAreaView className="flex-1 bg-white">
      <View className="flex-1 bg-gray-100">
        <View className="p-4 border-b border-[#00CCBB] bg-white shadow-xs">
          <View>
            <Text className="text-lg font-bold text-center">Basket</Text>
            <Text className="text-center">{restaurant.title}</Text>
          </View>
          <TouchableOpacity
            className="rounded-full bg-gray-100 absolute top-3 right-5"
            onPress={() => navigation.goBack}
          >
            <XCircleIcon color="#00CCBB" height={50} width={50} />
          </TouchableOpacity>
        </View>
        <View className="flex-row items-center space-x-4 px-4 py-3 bg-white my-5">
          <Image
            source={{ uri: "https://links.papareact.com/wru" }}
            className="w-7 h-7 bg-gray-300 p-4 rounded-full"
          />
          <Text className="flex-1">Deliver in 50-75 mins</Text>
          <TouchableOpacity>
            <Text className="text-[#00CCBB]">Change</Text>
          </TouchableOpacity>
        </View>
        <ScrollView className="divide-y divide-gray-200">
          {groupedItemsInBasket &&
            Object.entries(groupedItemsInBasket).map(([key, items]) => (
              <View
                key={key}
                className="flex-row items-center space-x-3 bg-white px-5"
              >
                <Text>{items.length} x</Text>
                <Image
                  source={{ uri: urlFor(items[0].image).url() }}
                  className="w-12 h-12 rounded-full"
                />
                <Text className="flex-1">{items[0].name}</Text>
                <Text>{items[0].price}</Text>
                <TouchableOpacity>
                  <Text
                    className="text-[#00CCBB] text-xs"
                    onPress={() => dispatch(removeFromBasket({ id: key }))}
                  >
                    Remove
                  </Text>
                </TouchableOpacity>
              </View>
            ))}
        </ScrollView>
        <View className="p-5 bg-white mt-5 space-y-4">
          <View className="flex-row justify-between">
            <Text className="text-gray-400">Subtotal</Text>
            <Text className="text-gray-400">
              ${Math.round(basketTotal).toFixed(2)}
            </Text>
          </View>

          <View className="flex-row justify-between">
            <Text className="text-gray-400">Delivery Fee</Text>
            <Text className="text-gray-400">$3.99</Text>
          </View>

          <View className="flex-row justify-between">
            <Text className="font-bold">Order Total</Text>
            <Text className="font-bold">
              {" "}
              ${Math.round(basketTotal + 3.99).toFixed(2)}
            </Text>
          </View>
          <TouchableOpacity className="w-full p-4 bg-[#00CCBB] rounded-lg">
            <Text className="text-center text-white text-xl font-bold">
              Place Order
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default BasketScreen;
