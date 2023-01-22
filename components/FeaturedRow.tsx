import { View, Text, ScrollView } from "react-native";
import React, { FC } from "react";
import { ArrowRightIcon } from "react-native-heroicons/outline";
import RestaurantCard from "./RestaurantCard";
interface props {
  id: string;
  title: string;
  description: string;
}
const FeaturedRow: FC<props> = ({ id, title, description }) => {
  return (
    <View>
      <View className="mt-4 flex-row items-center justify-between px-4">
        <Text className="font-bold text-lg">{title}</Text>
        <ArrowRightIcon color="#00CCBB" />
      </View>
      <Text className="text-xs text-gray-500 px-4">{description}</Text>

      <ScrollView
        horizontal
        contentContainerStyle={{ paddingHorizontal: 15 }}
        showsHorizontalScrollIndicator={false}
        className="pt-4"
      >
        <RestaurantCard
          id={123}
          imgUrl="https://links.papareact.com/gn7"
          title="Sushi"
          rating={4.5}
          genre="Japanese"
          address="123 Main St"
          shortDescription="this is a description"
          dishes={[]}
          long={20}
          lat={15}
        />
      </ScrollView>
    </View>
  );
};

export default FeaturedRow;