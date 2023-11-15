import React from "react";
import { View, Text } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";

import { screens } from "../../constants/routes";

import Order from "./Order";

const Stack = createStackNavigator();

const OrderStackNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name={screens.Order} component={Order} />
    </Stack.Navigator>
  );
};

export default OrderStackNavigator;
