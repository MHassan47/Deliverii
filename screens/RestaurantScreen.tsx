import { View, Text, ScrollView } from "react-native";
import React from "react";

import { useRoute, RouteProp, ParamListBase } from "@react-navigation/native";

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

type ScreenRouteProp = RouteProp<ParamListBase, string> & {
  params: props;
};
const RestaurantScreen = () => {
  const route = useRoute<ScreenRouteProp>();
  const { params } = route;

  return (
    <ScrollView>
      <Text>{params.title}</Text>
    </ScrollView>
  );
};

export default RestaurantScreen;
