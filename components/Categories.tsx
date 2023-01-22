import { View, Text, ScrollView } from "react-native";
import React, { useEffect, useState } from "react";
import CategoriesCard from "./CategoriesCard";
import client, { urlFor } from "../sanity";

interface Category {
  _id: string;
  image: string;
  name: string;
}

const Categories = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    client
      .fetch(
        `
    *[_type == "category"]
    `
      )
      .then((data) => setCategories(data));
  }, []);
  return (
    <ScrollView
      horizontal
      contentContainerStyle={{ paddingHorizontal: 15, paddingTop: 10 }}
    >
      {/* Categories Card */}
      {categories &&
        categories.map((category: Category) => (
          <CategoriesCard
            key={category._id}
            imgUrl={urlFor(category.image).width(200).url()}
            title={category.name}
          />
        ))}
      {/* <CategoriesCard imgUrl="https://links.papareact.com/gn7" title="second" />
      <CategoriesCard imgUrl="https://links.papareact.com/gn7" title="second" />
      <CategoriesCard imgUrl="https://links.papareact.com/gn7" title="second" />
      <CategoriesCard imgUrl="https://links.papareact.com/gn7" title="second" />
      <CategoriesCard imgUrl="https://links.papareact.com/gn7" title="second" /> */}
    </ScrollView>
  );
};

export default Categories;
