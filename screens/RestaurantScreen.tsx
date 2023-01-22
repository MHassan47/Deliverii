import { View, Text, ScrollView, Image, TouchableOpacity } from "react-native";
import React, { useLayoutEffect } from "react";
import {
  ArrowLeftIcon,
  QuestionMarkCircleIcon,
  ChevronRightIcon,
} from "react-native-heroicons/outline";
import { StarIcon, MapPinIcon } from "react-native-heroicons/solid";
import {
  useRoute,
  RouteProp,
  ParamListBase,
  useNavigation,
} from "@react-navigation/native";
import { urlFor } from "../sanity";
import DishRow from "../components/DishRow";

interface props {
  id: string;
  imgUrl: string;
  title: string;
  rating: number;
  genre: string;
  address: string;
  shortDescription: string;
  dishes: Dish[];
  long: number;
  lat: number;
}

interface Dish {
  key: string;
  _id: string;
  name: string;
  short_description: string;
  price: number;
  image: string;
}

type ScreenRouteProp = RouteProp<ParamListBase, string> & {
  params: props;
};

const RestaurantScreen = () => {
  const route = useRoute<ScreenRouteProp>();
  const { params } = route;
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);
  return (
    <ScrollView>
      {/* <Text>{params.title}</Text> */}
      <View className="relative">
        <Image
          source={{ uri: urlFor(params.imgUrl).url() }}
          className="w-full h-56 bg-gray-300 p-4"
        />
        <TouchableOpacity
          onPress={navigation.goBack}
          className="absolute top-14 left-5 p-3 bg-gray-200 rounded-full"
        >
          <ArrowLeftIcon color="#00CCBB" size={20} />
        </TouchableOpacity>
      </View>
      <View>
        <View className="bg-white">
          <Text className="text-3xl">{params.title}</Text>
          <View className="flex-row space-x-2 my-1">
            <View className="flex-row items-center space-x-1">
              <StarIcon color="green" opacity={0.5} size={22} />
              <Text className="text-xs text-gray-500">
                <Text className="text-green-500">{params.rating}</Text> ·{" "}
                {params.genre}
              </Text>
            </View>

            <View className="flex-row items-center space-x-1">
              <MapPinIcon color="gray" opacity={0.5} size={22} />
              <Text className="text-xs text-gray-500">
                Nearby · {params.genre}
              </Text>
            </View>
          </View>
          <Text className="text-gray-500 mt-2 pb-4">
            {params.shortDescription}
          </Text>
          <TouchableOpacity className="flex-row items-center space-x-2 p-4 border-y border-gray-300">
            <QuestionMarkCircleIcon color="gray" />
            <Text className="font-bold flex-1">Have a food allergy?</Text>
            <ChevronRightIcon color="#00CCBB" />
          </TouchableOpacity>
        </View>
        <View>
          <Text className="px-4 pt-6 mb-3 font-bold text-xl">Menu</Text>

          {/* Dish rows */}
          {params.dishes &&
            params.dishes.map((dish: Dish) => (
              <DishRow
                key={dish._id}
                id={dish._id}
                name={dish.name}
                description={dish.short_description}
                price={dish.price}
                image={dish.image}
              />
            ))}
        </View>
      </View>
    </ScrollView>
  );
};

export default RestaurantScreen;
