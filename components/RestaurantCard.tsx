import { View, Text, TouchableOpacity, Image } from "react-native";
import React, { FC } from "react";
import { StarIcon, MapPinIcon } from "react-native-heroicons/solid";
interface props {
  id: number;
  imgUrl: string;
  title: string;
  rating: number;
  genre: string;
  address: string;
  shortDescription: string;
  dishes: string[];
  long: number;
  lat: number;
}
const RestaurantCard: FC<props> = (props) => {
  return (
    <TouchableOpacity className="bg-white mr-3 shadow-sm">
      <Image source={{ uri: props.imgUrl }} className="w-64 h-36 rounded-sm" />
      <View className="px-3 pb-4">
        <Text className="font-bold text-lg pt-2">{props.title}</Text>
        <View className="flex-row items-center space-x-1">
          <StarIcon color="green" opacity={0.5} size={22} />
          <Text className="text-xs text-gray-500">
            <Text className="text-green-500">{props.rating}</Text> ·{" "}
            {props.genre}
          </Text>
        </View>
        <View className="flex-row space-x-1 items-center">
          <MapPinIcon color="gray" opacity={0.4} size={22} />
          <Text className="text-gray-500 text-xs">
            Nearby · {props.address}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default RestaurantCard;
