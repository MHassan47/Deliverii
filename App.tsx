import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { SafeAreaView, Text, View } from "react-native";
import HomeScreen from "./screens/HomeScreen";
import RestaurantScreen, { Dish } from "./screens/RestaurantScreen";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import BasketScreen from "./screens/BasketScreen";
import PreparingOrderScreen from "./screens/PreparingOrderScreen";
import DeliveryScreen from "./screens/DeliveryScreen";

export type RootStackParams = {
  Home: undefined;
  Restaurant: {
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
  };
  Basket: undefined;
  Preparing: undefined;
  Delivery: undefined;
};

const Stack = createNativeStackNavigator<RootStackParams>();

export default function App() {
  return (
    <NavigationContainer>
      <Provider store={store}>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen
            name="Restaurant"
            component={RestaurantScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Basket"
            component={BasketScreen}
            options={{ presentation: "modal", headerShown: false }}
          />
          <Stack.Screen
            name="Preparing"
            component={PreparingOrderScreen}
            options={{ presentation: "fullScreenModal", headerShown: false }}
          />
          <Stack.Screen
            name="Delivery"
            component={DeliveryScreen}
            options={{ presentation: "fullScreenModal", headerShown: false }}
          />
        </Stack.Navigator>
      </Provider>
    </NavigationContainer>
  );
}
