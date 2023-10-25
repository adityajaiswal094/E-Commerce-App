import React from 'react';
import {View} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

export default function CustomIconButton({name, size}) {
  return (
    <View>
      <Icon name={name} size={size} color="white" />
    </View>
  );
}
