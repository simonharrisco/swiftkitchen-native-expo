import * as React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Text, StyleSheet, View, Platform } from "react-native";

import HomeStackNavigator from "../features/Home/HomeStackNavigator";
import UpcomingOrdersStackNavigator from "../features/UpcomingOrders/UpcomingOrdersStackNavigator";
import OrderStackNavigator from "../features/Order/OrderStackNavigator";
import ConsumerCodesNavigator from "../features/ConsumerCodes/ConsumerCodesNavigator";
import OrderHistoryNavigator from "../features/OrderHistory/OrderHistoryNavigator";
import TransactionHistoryNavigator from "../features/TransactionHistory/TransactionHistoryNavigator";
import AccountStackNavigator from "../features/Account/AccountStackNavigator";
import BasketStackNavigator from "../features/Basket/BasketNavigator";
import DirectDebitStackNavigator from "../features/DirectDebit/DirectDebitNavigator";

import { routes, screens } from "../constants/routes";

const Tab = createBottomTabNavigator();

const tabOptions = ({ route }) => {
  const item = routes.find((routeItem) => routeItem.name === route.name);

  if (!item.showInTab) {
    return {
      tabBarButton: () => <View style={{ width: 0 }} />,
      headerShown: false,
      tabBarStyle: styles.tabContainer,
      title: item.title,
    };
  }

  return {
    tabBarIcon: ({ focused }) => item.icon(focused),
    tabBarLabel: ({ focused }) => (
      <Text
        allowFontScaling={false}
        className={
          focused
            ? "text-skBlue font-sk mt-[-10] pb-2"
            : "text-gray-800 font-sk mt-[-10] pb-2"
        }
        style={{ fontFamily: "Jost-Medium" }}
      >
        {item.title || ""}
      </Text>
    ),
    headerShown: false,
    tabBarStyle: styles.tabContainer,
    title: item.title,
  };
};

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator screenOptions={tabOptions}>
      <Tab.Screen name={screens.HomeStack} component={HomeStackNavigator} />
      <Tab.Screen name={screens.OrderStack} component={OrderStackNavigator} />
      <Tab.Screen
        name={screens.UpcomingOrdersStack}
        component={UpcomingOrdersStackNavigator}
      />
      <Tab.Screen
        name={screens.ConsumerCodesStack}
        component={ConsumerCodesNavigator}
      />

      <Tab.Screen
        name={screens.OrderHistoryStack}
        component={OrderHistoryNavigator}
      />

      <Tab.Screen
        name={screens.TransactionHistoryStack}
        component={TransactionHistoryNavigator}
      />
      <Tab.Screen
        name={screens.AccountStack}
        component={AccountStackNavigator}
      />
      <Tab.Screen name={screens.BasketStack} component={BasketStackNavigator} />
      <Tab.Screen
        name={screens.DirectDebitStack}
        component={DirectDebitStackNavigator}
      />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  tabContainer: {
    // different height depending on platform
    height: Platform.OS === "ios" ? 90 : 60,
  },
});

export default BottomTabNavigator;
