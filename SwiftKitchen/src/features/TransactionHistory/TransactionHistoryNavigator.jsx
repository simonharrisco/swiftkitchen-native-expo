import React from 'react';
import {View, Text} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';

import {screens} from '../../constants/routes';
import TransactionHistory from './TransactionHistory';

const Stack = createStackNavigator();

const TransactionHistoryStackNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen
        name={screens.TransactionHistory}
        component={TransactionHistory}
      />
    </Stack.Navigator>
  );
};

export default TransactionHistoryStackNavigator;
