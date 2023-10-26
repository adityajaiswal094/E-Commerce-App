import React from 'react';
import {View, Text, StyleSheet, Dimensions} from 'react-native';
import CustomIconButton from './CustomIconButton';

const width = Dimensions.get('window').width;

export default function QuantityToggle({
  quantity,
  increaseQuantity,
  decreaseQuantity,
}) {
  return (
    <View style={styles.quantityToggle}>
      <CustomIconButton
        name="minus"
        size={24}
        color={'black'}
        onPress={decreaseQuantity}
      />
      <Text style={styles.textStyle}>{quantity}</Text>
      <CustomIconButton
        name="plus"
        size={24}
        color={'black'}
        onPress={increaseQuantity}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  quantityToggle: {
    width: width * 0.35,
    // flex: 1,
    // backgroundColor: 'orange',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  textStyle: {
    color: '#640ca3',
    fontSize: 20,
    fontWeight: 'bold',
  },
});
