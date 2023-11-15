import React from 'react';
import {View, Text} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';

import {screens} from '../../constants/routes';
import Account from './Account';

const Stack = createStackNavigator();

const AccountStackNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name={screens.Account} component={Account} />
    </Stack.Navigator>
  );
};

export default AccountStackNavigator;
