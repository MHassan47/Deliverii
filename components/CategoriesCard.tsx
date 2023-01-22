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
      <Text className="absolute bottom-1 left-1 text-white text-lg">
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default CategoriesCard;
