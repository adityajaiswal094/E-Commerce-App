import React from 'react';
import {Pressable} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

export default function CustomIconButton({name, size, color, onPress}) {
  return (
    <Pressable onPress={onPress}>
      <Icon name={name} size={size} color={color} />
    </Pressable>
  );
}
