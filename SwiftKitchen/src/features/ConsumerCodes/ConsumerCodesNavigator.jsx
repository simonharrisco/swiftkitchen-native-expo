import React from "react";
import { View, Text } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";

import { screens } from "../../constants/routes";
import ConsumerCodes from "./ConsumerCodes";

const Stack = createStackNavigator();

const ConsumerCodesStackNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name={screens.ConsumerCodes} component={ConsumerCodes} />
    </Stack.Navigator>
  );
};

export default ConsumerCodesStackNavigator;
