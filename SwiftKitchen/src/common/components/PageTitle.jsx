import {View, Text} from 'react-native';
import React from 'react';

export default function PageTitle({text}) {
  return (
    <View className="pt-4">
      <Text
        className="font-sk text-skBlue font-semibold text-xl text-center"
        style={{fontFamily: 'Jost-Medium'}}>
        {text}
      </Text>
    </View>
  );
}
