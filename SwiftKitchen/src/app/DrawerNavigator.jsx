import * as React from "react";
import {
  View,
  StyleSheet,
  Image,
  Text,
  TouchableOpacity,
  StatusBar,
} from "react-native";
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItem,
} from "@react-navigation/drawer";
import BottomTabNavigator from "./BottomTabNavigator";
import { routes, screens } from "../constants/routes";
// import Icon from 'react-native-vector-icons/FontAwesome';
// import BasketIcon from '../features/Header/BasketIcon';
import StyledText, { StyledTextBold } from "../common/components/StyledText";

function Icon() {
  return <Text>x</Text>;
}
function BasketIcon() {
  return <Text>B</Text>;
}

const Drawer = createDrawerNavigator();

const CustomDrawerContent = (props) => {
  const currentRouteName = props.nav()?.getCurrentRoute()?.name;
  return (
    <DrawerContentScrollView {...props}>
      {routes
        .filter((route) => route.showInDrawer)
        .map((route) => {
          const focusedRoute = routes.find((r) => r.name === currentRouteName);
          const focused = focusedRoute
            ? route.name === focusedRoute?.focusedRoute
            : route.name === screens.HomeStack;
          return (
            <DrawerItem
              key={route.name}
              label={() => (
                <View className="flex-row">
                  {/* <Icon name={route.drawerIconName} size={10} /> */}
                  <View className="w-6 mr-5 items-center">{route.icon()}</View>

                  <StyledText
                    className={
                      focused
                        ? "text-skBlue font-bold font-sk"
                        : "font-sk text-gray-500"
                    }
                  >
                    {route.title}
                  </StyledText>
                </View>
              )}
              onPress={() => props.navigation.navigate(route.name)}
            />
          );
        })}
    </DrawerContentScrollView>
  );
};

const DrawerNavigator = ({ nav }) => {
  return (
    <Drawer.Navigator
      screenOptions={({ navigation }) => ({
        headerStyle: {
          backgroundColor: "#034AA6",
        },
        headerTintColor: "#fff",
        headerTitleStyle: {
          color: "#fff",
          fontFamily: "Jost-Bold",
        },
        headerLeft: () => (
          <TouchableOpacity
            onPress={() => navigation.toggleDrawer()}
            style={styles.headerLeft}
            className="py-4 pl-4 pr-8"
          >
            <Icon name="bars" size={15} color="#fff" />
            {/* <Text className="text-white ml-4">=</Text> */}
          </TouchableOpacity>
        ),
        headerRight: () => <BasketIcon navigation={navigation} />,
      })}
      drawerContent={(props) => <CustomDrawerContent {...props} nav={nav} />}
    >
      <Drawer.Screen
        name={screens.HomeTab}
        component={BottomTabNavigator}
        options={{
          title: "SwiftKitchen",
        }}
      />
    </Drawer.Navigator>
  );
};

const styles = StyleSheet.create({
  // drawer content
  drawerLabel: {
    fontSize: 14,
  },
  drawerLabelFocused: {
    fontSize: 14,
    color: "#551E18",
    fontWeight: "500",
  },
});

export default DrawerNavigator;
