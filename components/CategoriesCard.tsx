import { View, Text, TouchableOpacity, Image } from "react-native";
import React, { FC } from "react";

interface props {
  imgUrl: string;
  title: string;
}
const CategoriesCard: FC<props> = ({ imgUrl, title }) => {
  return (
    <TouchableOpacity>
      <Image source={{ uri: imgUrl }} className="h-20 w-20 rounded" />
      <Text className="text-center text-gray-500 text-md font-light ">
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default CategoriesCard;
