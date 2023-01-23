import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import {
  selectBasketItems,
  selectBasketTotal,
} from "../redux/features/basketSlice";
import { useSelector } from "react-redux";
import { RootStackParams } from "../App";

type basketScreenNavigationType = NativeStackNavigationProp<
  RootStackParams,
  "Restaurant"
>;
const BasketIcon = () => {
  const items = useSelector(selectBasketItems);
  const navigation = useNavigation<basketScreenNavigationType>();
  const basketTotal = useSelector(selectBasketTotal);

  if (items.length === 0) return null;
  return (
    <View className="absolute bottom-10 w-full z-50">
      <TouchableOpacity
        className="mx-5 bg-[#00CCBB] p-4 rounded-lg flex-row"
        onPress={() => navigation.navigate("Basket")}
      >
        <Text className="text-white font-extrabold text-lg bg-[#01a296]">
          {items.length}
        </Text>
        <Text className="text-lg text-white font-extrabold">
          ${parseFloat(basketTotal).toFixed(2)}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default BasketIcon;
