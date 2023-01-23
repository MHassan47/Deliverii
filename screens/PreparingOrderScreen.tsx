import { View, Text, SafeAreaView } from "react-native";
import React, { useEffect } from "react";
import * as Animatable from "react-native-animatable";
import * as Progress from "react-native-progress";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParams } from "../App";

type basketScreenNavigationType = NativeStackNavigationProp<
  RootStackParams,
  "Preparing"
>;
const PreparingOrderScreen = () => {
  const navigation = useNavigation<basketScreenNavigationType>();

  useEffect(() => {
    setTimeout(() => {
      navigation.navigate("Delivery");
    }, 3000);
  }, []);
  return (
    <SafeAreaView className="flex-1 bg-[#00CCBB] justify-center items-center space-y-8">
      <Animatable.Image
        source={require("../assets/orderLoading.gif")}
        animation="slideInUp"
        iterationCount={1}
        className="h-96 w-96"
      />
      <Text className="text-white pb-4 font-semibold text-lg">
        Waiting for Restaurant to accept your order
      </Text>
      <Progress.Bar
        width={200}
        height={10}
        indeterminate={true}
        color="white"
      />
    </SafeAreaView>
  );
};

export default PreparingOrderScreen;
