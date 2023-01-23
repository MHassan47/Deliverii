import { View, Text, SafeAreaView } from "react-native";
import React from "react";
import * as Animatable from "react-native-animatable";

const PreparingOrderScreen = () => {
  return (
    <SafeAreaView className="flex-1 bg-[#00CCBB] justify-center items-center ">
      <Animatable.Image
        source={require("../assets/orderLoading.gif")}
        animation="slideInUp"
        iterationCount={1}
        className="h-96 w-96"
      />
      <Text className="text-white">
        Waiting for Restaurant to accept your order
      </Text>
    </SafeAreaView>
  );
};

export default PreparingOrderScreen;
