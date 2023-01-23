import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { XMarkIcon } from "react-native-heroicons/solid";
import { useNavigation } from "@react-navigation/native";
import { useSelector } from "react-redux";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParams } from "../App";
import * as Progress from "react-native-progress";
import { selectRestaurant } from "../redux/features/restaurantSlice";

type deliveryScreenNavigationType = NativeStackNavigationProp<
  RootStackParams,
  "Delivery"
>;
const DeliveryScreen = () => {
  const navigation = useNavigation<deliveryScreenNavigationType>();
  const restaurant = useSelector(selectRestaurant);
  return (
    <View className="flex-1 bg-[#00CCBB]">
      <SafeAreaView className="z-50">
        <View className="flex-row justify-between items-center p-5">
          <TouchableOpacity onPress={() => navigation.navigate("Home")}>
            <XMarkIcon size={30} color="white" />
          </TouchableOpacity>
          <Text className="text-white font-light text-lg">Order Help</Text>
        </View>

        <View className="bg-white mx-5 my-2 rounded-md p-6 z-50 shadow-md">
          <View className="flex-row justify-between">
            <View>
              <Text className="text-lg text-gray-400"> Estimated Arrival</Text>
              <Text className="text-4xl font-bold">45-55 Minutes</Text>
            </View>
            <Image
              source={{ uri: "https:links.papareact.com/fls" }}
              className="h-20 w-20"
            />
          </View>
          <Progress.Bar color="#00CCBB" width={200} indeterminate={true} />
          <Text className="mt-3 text-gray-500">
            Your order at {restaurant.title} is being prepared
          </Text>
        </View>
      </SafeAreaView>
    </View>
  );
};

export default DeliveryScreen;
