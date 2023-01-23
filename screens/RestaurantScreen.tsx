import { View, Text, ScrollView, Image, TouchableOpacity } from "react-native";
import React, { useEffect, useLayoutEffect } from "react";
import {
  ArrowLeftIcon,
  QuestionMarkCircleIcon,
  ChevronRightIcon,
} from "react-native-heroicons/outline";
import { StarIcon, MapPinIcon } from "react-native-heroicons/solid";
import {
  useRoute,
  RouteProp,
  ParamListBase,
  useNavigation,
} from "@react-navigation/native";
import { urlFor } from "../sanity";
import DishRow from "../components/DishRow";
import BasketIcon from "../components/BasketIcon";
import { RootStackParams } from "../App";
import { useDispatch } from "react-redux";
import { setRestaurant } from "../redux/features/restaurantSlice";
export interface Restaurant {
  id: string;
  imgUrl: string;
  title: string;
  rating: number;
  genre: string;
  address: string;
  shortDescription: string;
  dishes: Dish[];
  long: number;
  lat: number;
}

export interface Dish {
  key: string;
  _id: string;
  name: string;
  short_description: string;
  price: number;
  image: string;
}

type restaurantScreenRouteType = RouteProp<RootStackParams, "Restaurant">;

const RestaurantScreen = () => {
  const {
    params: {
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
    },
  } = useRoute<restaurantScreenRouteType>();

  const navigation = useNavigation();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(
      setRestaurant({
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
      })
    );
  }, [dispatch]);
  return (
    <>
      <ScrollView>
        {/* <Text>{params.title}</Text> */}
        <View className="relative">
          <Image
            source={{ uri: urlFor(imgUrl).url() }}
            className="w-full h-56 bg-gray-300 p-4"
          />
          <TouchableOpacity
            onPress={navigation.goBack}
            className="absolute top-14 left-5 p-3 bg-gray-200 rounded-full"
          >
            <ArrowLeftIcon color="#00CCBB" size={20} />
          </TouchableOpacity>
        </View>
        <View>
          <View className="bg-white">
            <Text className="text-3xl pl-2">{title}</Text>
            <View className="flex-row space-x-2 my-1 pl-2">
              <View className="flex-row items-center space-x-1">
                <StarIcon color="green" opacity={0.5} size={22} />
                <Text className="text-xs text-gray-500 pl-2">
                  <Text className="text-green-500">{rating}</Text> · {genre}
                </Text>
              </View>

              <View className="flex-row items-center space-x-1">
                <MapPinIcon color="gray" opacity={0.5} size={22} />
                <Text className="text-xs text-gray-500">Nearby · {genre}</Text>
              </View>
            </View>
            <Text className="text-gray-500 mt-2 pb-4 pl-2">
              {shortDescription}
            </Text>
            <TouchableOpacity className="flex-row items-center space-x-2 p-4 border-y border-gray-300">
              <QuestionMarkCircleIcon color="gray" />
              <Text className="font-bold flex-1">Have a food allergy?</Text>
              <ChevronRightIcon color="#00CCBB" />
            </TouchableOpacity>
          </View>
          <View className="pb-36">
            <Text className="px-4 pt-6 mb-3 font-bold text-xl">Menu</Text>

            {/* Dish rows */}
            {dishes &&
              dishes.map((dish: Dish) => (
                <DishRow
                  key={dish._id}
                  id={dish._id}
                  name={dish.name}
                  description={dish.short_description}
                  price={dish.price}
                  image={dish.image}
                />
              ))}
          </View>
        </View>
      </ScrollView>
      <BasketIcon />
    </>
  );
};

export default RestaurantScreen;
