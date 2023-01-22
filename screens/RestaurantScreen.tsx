import { View, Text, ScrollView, Image, TouchableOpacity } from "react-native";
import React, { useLayoutEffect } from "react";
import { ArrowLeftIcon } from "react-native-heroicons/outline";
import {
  useRoute,
  RouteProp,
  ParamListBase,
  useNavigation,
} from "@react-navigation/native";
import { urlFor } from "../sanity";

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
    </ScrollView>
  );
};

export default RestaurantScreen;
