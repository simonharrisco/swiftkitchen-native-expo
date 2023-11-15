import React from 'react';
import {View, Text} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';

import {screens} from '../../constants/routes';
import OrderHistory from './OrderHistory';

const Stack = createStackNavigator();

const OrderHistoryStackNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name={screens.OrderHistory} component={OrderHistory} />
    </Stack.Navigator>
  );
};

export default OrderHistoryStackNavigator;
