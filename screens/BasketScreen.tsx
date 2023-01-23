import { View, Text } from "react-native";
import React, { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { useSelector, useDispatch } from "react-redux";
import { setRestaurant } from "../redux/features/restaurantSlice";
import { selectBasketItems } from "../redux/features/basketSlice";
import { Item } from "../redux/features/basketSlice";
const BasketScreen = () => {
  const navigation = useNavigation();
  const restaurant = useSelector(setRestaurant);
  const items = useSelector(selectBasketItems);
  const dispatch = useDispatch();
  const [groupedItemsInBasket, setGroupedItemsInBasket] = useState([]);

  const useGroupedItems = (items: Item[]): { [key: string]: Item[] } => {
    const [groupedItems, setGroupedItems] = useState<{ [key: string]: Item[] }>(
      {}
    );

    useEffect(() => {
      const newGroupedItems: { [key: string]: Item[] } = {};
      items.forEach((item) => {
        if (!newGroupedItems[item.id]) {
          newGroupedItems[item.id] = [];
        }
        newGroupedItems[item.id].push(item);
      });
      setGroupedItems(newGroupedItems);
    }, [items]);

    return groupedItems;
  };
  return (
    <View>
      <Text>BasketScreen</Text>
    </View>
  );
};

export default BasketScreen;
