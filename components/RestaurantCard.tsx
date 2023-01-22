import { View, Text, TouchableOpacity, Image } from "react-native";
import React, { FC } from "react";
import { StarIcon, MapPinIcon } from "react-native-heroicons/solid";
import { urlFor } from "../sanity";
import { useNavigation } from "@react-navigation/native";
interface props {
  id: string;
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
const RestaurantCard: FC<props> = ({
  id,
  imgUrl,
  title,
  rating,
  genre,
  address,
  shortDescription,
  dishes,
  long,
  lat,
}) => {
  const navigation: any = useNavigation();
  const handlePress = () => {
    navigation.navigate("Restaurant", {
      id,
      imgUrl,
      title,
      rating,
      genre,
      address,
      shortDescription,
      dishes,
      long,
      lat,
    });
  };

  return (
    <TouchableOpacity className="bg-white mr-3 shadow-sm" onPress={handlePress}>
      <Image
        source={{ uri: urlFor(imgUrl).url() }}
        className="w-64 h-36 rounded-sm"
      />
      <View className="px-3 pb-4">
        <Text className="font-bold text-lg pt-2">{title}</Text>
        <View className="flex-row items-center space-x-1">
          <StarIcon color="green" opacity={0.5} size={22} />
          <Text className="text-xs text-gray-500">
            <Text className="text-green-500">{rating}</Text> · {genre}
          </Text>
        </View>
        <View className="flex-row space-x-1 items-center">
          <MapPinIcon color="gray" opacity={0.4} size={22} />
          <Text className="text-gray-500 text-xs">Nearby · {address}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default RestaurantCard;
