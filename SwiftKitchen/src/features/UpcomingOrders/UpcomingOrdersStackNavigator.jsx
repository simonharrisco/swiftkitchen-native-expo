import React from 'react';
import {View, Text} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';

import {screens} from '../../constants/routes';
import UpcomingOrders from './UpcomingOrders';

const Stack = createStackNavigator();

const UpcomingOrdersStackNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name={screens.UpcomingOrders} component={UpcomingOrders} />
    </Stack.Navigator>
  );
};

export default UpcomingOrdersStackNavigator;
