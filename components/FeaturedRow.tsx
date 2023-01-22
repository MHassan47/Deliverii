import { View, Text, ScrollView } from "react-native";
import React, { FC, useEffect, useState } from "react";
import { ArrowRightIcon } from "react-native-heroicons/outline";
import RestaurantCard from "./RestaurantCard";
import client from "../sanity";

interface props {
  id: string;
  title: string;
  description: string;
}

interface Restaurants {
  _id: string;
  image: string;
  name: string;
  rating: number;
  type: { name: string };
  genre: string;
  address: string;
  short_description: string;
  dishes: string[];
  long: number;
  lat: number;
}
const FeaturedRow: FC<props> = ({ id, title, description }) => {
  const [restaurants, setRestaurants] = useState([]);
  useEffect(() => {
    client
      .fetch(
        `
    *[_type == "featured" && _id == $id] {
      ...,
      restaurants[] ->{
        ...,
        dishes[]->,
        type-> {
          name
        }
        },
      }[0]
    `,
        { id: id }
      )
      .then((data) => {
        setRestaurants(data?.restaurants);
      })
      .catch((err) => console.log("error"));
  }, [id]);

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
        {restaurants &&
          restaurants?.map((restaurant: Restaurants) => (
            <RestaurantCard
              key={restaurant._id}
              id={restaurant._id}
              imgUrl={restaurant.image}
              title={restaurant.name}
              rating={restaurant.rating}
              genre={restaurant.type?.name}
              address={restaurant.address}
              shortDescription={restaurant.short_description}
              dishes={restaurant.dishes}
              long={restaurant.long}
              lat={restaurant.lat}
            />
          ))}
      </ScrollView>
    </View>
  );
};

export default FeaturedRow;
