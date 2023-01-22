import { View, Text, ScrollView } from "react-native";
import React from "react";
import CategoriesCard from "./CategoriesCard";

const Categories = () => {
  return (
    <ScrollView
      horizontal
      contentContainerStyle={{ paddingHorizontal: 15, paddingTop: 10 }}
    >
      {/* Categories Card */}
      <CategoriesCard imgUrl="https://links.papareact.com/gn7" title="first" />
      <CategoriesCard imgUrl="https://links.papareact.com/gn7" title="second" />
      <CategoriesCard imgUrl="https://links.papareact.com/gn7" title="second" />
      <CategoriesCard imgUrl="https://links.papareact.com/gn7" title="second" />
      <CategoriesCard imgUrl="https://links.papareact.com/gn7" title="second" />
      <CategoriesCard imgUrl="https://links.papareact.com/gn7" title="second" />
    </ScrollView>
  );
};

export default Categories;
