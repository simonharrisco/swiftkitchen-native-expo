import React from "react";
import { Text } from "react-native";
// import Icon from 'react-native-vector-icons/FontAwesome';
function Icon() {
  return <Text>x</Text>;
}

export const screens = {
  HomeTab: "HomeTab",
  HomeStack: "HomeStack",
  Home: "Home",

  OrderStack: "OrderStack",
  Order: "Order",
  OrderForDay: "OrderForDay",

  UpcomingOrdersStack: "UpcomingOrdersStack",
  UpcomingOrders: "UpcomingOrders",

  DirectDebitStack: "DirectDebitStack",
  DirectDebit: "DirectDebit",
  DirectDebitViewCreateRedirect: "DirectDebitViewCreateRedirect",
  DirectDebitUpdate: "DirectDebitUpdate",

  ConsumerCodesStack: "ConsumerCodesStack",
  ConsumerCodes: "ConsumersCode",

  AccountStack: "AccountStack",
  Account: "Account",

  OrderHistoryStack: "OrderHistoryStack",
  OrderHistory: "OrderHistory",

  TransactionHistoryStack: "TransactionHistoryStack",
  TransactionHistory: "TransactionHistory",

  BasketStack: "BasketStack",
  Basket: "Basket",
  BasketCheckout: "BasketCheckout",
  BasketConfirmWallet: "BasketConfirmWallet",
  BasketConfirmStripe: "BasketConfirmStripe",
  BasketCheckoutStripe: "BasketCheckoutStripe",
};
export const routes = [
  {
    name: screens.HomeTab,
    focusedRoute: screens.HomeTab,
    title: "Home",
    showInTab: false,
    showInDrawer: false,
    icon: (focused) => (
      <Icon name="home" size={18} color={focused ? "#034AA6" : "#333"} />
    ),
  },
  {
    name: screens.HomeStack,
    focusedRoute: screens.HomeStack,
    title: "Homepage",
    showInTab: false,
    showInDrawer: true,
    icon: (focused) => (
      <Icon name="home" size={18} color={focused ? "#034AA6" : "#333"} />
    ),
  },
  {
    name: screens.Home,
    focusedRoute: screens.HomeStack,
    title: "Home",
    showInTab: false,
    showInDrawer: false,
    icon: (focused) => (
      <Icon name="home" size={18} color={focused ? "#034AA6" : "#333"} />
    ),
  },

  {
    name: screens.OrderStack,
    focusedRoute: screens.OrderStack,
    title: "Order",
    showInTab: true,
    showInDrawer: true,
    icon: (focused) => (
      <Icon name="cutlery" size={18} color={focused ? "#034AA6" : "#333"} />
    ),
  },
  {
    name: screens.Order,
    focusedRoute: screens.OrderStack,
    title: "Order",
    showInTab: true,
    showInDrawer: false,
    icon: (focused) => (
      <Icon name="cutlery" size={18} color={focused ? "#034AA6" : "#333"} />
    ),
  },
  {
    name: screens.UpcomingOrdersStack,
    focusedRoute: screens.UpcomingOrdersStack,
    title: "Upcoming",
    showInTab: true,
    showInDrawer: true,
    icon: (focused) => (
      <Icon name="calendar-o" size={18} color={focused ? "#034AA6" : "#333"} />
    ),
  },
  {
    name: screens.UpcomingOrders,
    focusedRoute: screens.UpcomingOrdersStack,
    title: "Upcoming Orders",
    showInTab: true,
    showInDrawer: false,
    icon: (focused) => (
      <Icon name="calendar-o" size={18} color={focused ? "#034AA6" : "#333"} />
    ),
  },
  {
    name: screens.DirectDebitStack,
    focusedRoute: screens.DirectDebitStack,
    title: "Direct Debit",
    showInTab: true,
    showInDrawer: true,
    icon: (focused) => (
      <Icon name="bank" size={18} color={focused ? "#034AA6" : "#333"} />
    ),
  },
  {
    name: screens.DirectDebit,
    focusedRoute: screens.DirectDebitStack,
    title: "Direct Debit",
    showInTab: true,
    showInDrawer: false,
    icon: (focused) => (
      <Icon name="bank" size={18} color={focused ? "#034AA6" : "#333"} />
    ),
  },
  {
    name: screens.ConsumerCodesStack,
    focusedRoute: screens.ConsumerCodesStack,
    title: "Consumers",
    showInTab: true,
    showInDrawer: true,
    icon: (focused) => (
      <Icon name="users" size={18} color={focused ? "#034AA6" : "#333"} />
    ),
  },
  {
    name: screens.ConsumerCodes,
    focusedRoute: screens.ConsumerCodesStack,
    title: "SwiftKitchen Keys",
    showInTab: true,
    showInDrawer: false,
    icon: (focused) => (
      <Icon name="users" size={18} color={focused ? "#034AA6" : "#333"} />
    ),
  },
  {
    name: screens.OrderHistoryStack,
    focusedRoute: screens.OrderHistoryStack,
    title: "Order History",
    showInTab: false,
    showInDrawer: true,
    icon: (focused) => (
      <Icon name="list-alt" size={18} color={focused ? "#034AA6" : "#333"} />
    ),
  },
  {
    name: screens.OrderHistory,
    focusedRoute: screens.OrderHistoryStack,
    title: "Order History",
    showInTab: false,
    showInDrawer: false,
    icon: (focused) => (
      <Icon name="list-alt" size={18} color={focused ? "#034AA6" : "#333"} />
    ),
  },
  {
    name: screens.TransactionHistoryStack,
    focusedRoute: screens.TransactionHistoryStack,
    title: "Transaction History",
    showInTab: false,
    showInDrawer: true,
    icon: (focused) => (
      <Icon name="history" size={18} color={focused ? "#034AA6" : "#333"} />
    ),
  },
  {
    name: screens.TransactionHistory,
    focusedRoute: screens.TransactionHistoryStack,
    title: "Transaction History",
    showInTab: false,
    showInDrawer: false,
    icon: (focused) => (
      <Icon name="history" size={18} color={focused ? "#034AA6" : "#333"} />
    ),
  },
  {
    name: screens.BasketStack,
    focusedRoute: screens.Basket,
    title: "Basket",
    showInTab: false,
    showInDrawer: true,
    icon: (focused) => (
      <Icon
        name="shopping-cart"
        size={18}
        color={focused ? "#034AA6" : "#333"}
      />
    ),
  },
  {
    name: screens.Basket,
    focusedRoute: screens.Basket,
    title: "Basket",
    showInTab: false,
    showInDrawer: false,
    icon: (focused) => (
      <Icon
        name="shopping-cart"
        size={18}
        color={focused ? "#034AA6" : "#333"}
      />
    ),
  },
  {
    name: screens.AccountStack,
    focusedRoute: screens.AccountStack,
    title: "Account",
    showInTab: false,
    showInDrawer: true,
    icon: (focused) => (
      <Icon name="cogs" size={18} color={focused ? "#034AA6" : "#333"} />
    ),
  },
  {
    name: screens.Account,
    focusedRoute: screens.AccountStack,
    title: "Account",
    showInTab: true,
    showInDrawer: false,
    icon: (focused) => (
      <Icon name="cogs" size={18} color={focused ? "#034AA6" : "#333"} />
    ),
  },
];
