import React from 'react';
import {View, Text} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import {screens} from '../../constants/routes';
import Home from './Home';

const Stack = createStackNavigator();

const HomeStackNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name={screens.Home} component={Home} />
    </Stack.Navigator>
  );
};

export default HomeStackNavigator;
