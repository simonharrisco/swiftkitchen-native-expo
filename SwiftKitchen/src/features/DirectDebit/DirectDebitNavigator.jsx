import React from "react";
import { View, Text } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";

import { screens } from "../../constants/routes";

// import Icon from "react-native-vector-icons/FontAwesome";
import DirectDebit from "./DirectDebit";

const Stack = createStackNavigator();

const DirectDebitStackNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name={screens.DirectDebit} component={DirectDebit} />
    </Stack.Navigator>
  );
};

export default DirectDebitStackNavigator;
