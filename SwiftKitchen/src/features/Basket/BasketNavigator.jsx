import React from "react";
import { View, Text } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";

import { screens } from "../../constants/routes";

import Basket from "./Basket";

const Stack = createStackNavigator();

const BasketStackNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name={screens.Basket} component={Basket} />
    </Stack.Navigator>
  );
};

export default BasketStackNavigator;
