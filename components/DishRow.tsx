import { View, Text, TouchableOpacity, Image } from "react-native";
import React, { FC } from "react";
import { urlFor } from "../sanity";

interface props {
  key: string;
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
}

const DishRow: FC<props> = ({ id, name, description, price, image }) => {
  return (
    <TouchableOpacity className="bg-white border p-4 border-gray-200 ">
      <View className="flex-row">
        <View className="flex-1 pr-2">
          <Text className="text-lg mb-1">{name}</Text>
          <Text className="text-gray-400">{description}</Text>
          <Text className="text-gray-400">
            ${Math.round(price * 100) / 100}
          </Text>
        </View>
        <View>
          <Image
            style={{
              borderWidth: 1,
              borderColor: "#F3F3F4",
            }}
            source={{ uri: urlFor(image).url() }}
            className="w-20 h-20 bg-gray-300 p-4"
          />
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default DishRow;
