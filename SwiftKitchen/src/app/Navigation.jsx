import React, { createRef } from "react";
import { Button, Text, useColorScheme, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createDrawerNavigator } from "@react-navigation/drawer";
import DrawerNavigator from "../app/DrawerNavigator";

// import { useSelector } from "react-redux";
// import { authSelector } from "../features/Auth/authSlice";
// import Login from "../features/Auth/Login";
// import Register from "../features/Auth/Register";
// import PasswordForgot from "../features/Auth/PasswordForgot";
// import TwoFactorPrompt from "../features/Auth/TwoFactorPrompt";

// import UpcomingOrders from "../features/UpcomingOrders/UpcomingOrders";
// import TransactionHistory from "../features/TransactionHistory/TransactionHistory";
// import ConsumerCodes from "../features/ConsumerCodes/ConsumerCodes";

// import TwoFactorLogin from "../features/Auth/TwoFactorLogin";
// import TwoFactorSetup from "../features/Auth/TwoFactorSetup";
// import ReAuth from "../features/Auth/ReAuth";

const defaultHeaderProps = {
  headerStyle: {
    backgroundColor: "#034AA6",
  },
  headerTintColor: "#fff",
  headerTitleStyle: {
    fontWeight: "bold",
    color: "#fff",
    fontFamily: "Jost",
  },
};

function PlaceholderScreenHome() {
  return (
    <View>
      <Text>Placeholder Screen Home</Text>
    </View>
  );
}

const navigationRef = createRef();
const nav = () => navigationRef.current;

const Tab = createBottomTabNavigator();
const AuthStack = createNativeStackNavigator();
const ReAuthStack = createNativeStackNavigator();
const ConsumerCodeStack = createNativeStackNavigator();
export default function Navigation() {
  return (
    <NavigationContainer ref={navigationRef}>
      <DrawerNavigator nav={nav} />
    </NavigationContainer>
  );
}
