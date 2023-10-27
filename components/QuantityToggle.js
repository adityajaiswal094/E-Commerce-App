import React from 'react';
import {View, Text, StyleSheet, Dimensions} from 'react-native';
import CustomIconButton from './CustomIconButton';

const {height, width} = Dimensions.get('window');

export default function QuantityToggle({
  quantity,
  increaseQuantity,
  decreaseQuantity,
}) {
  return (
    <View style={styles.quantityToggle}>
      <CustomIconButton
        name="minus"
        size={height < 762 ? height * 0.025 : height * 0.025}
        color={'black'}
        onPress={decreaseQuantity}
      />
      <Text style={styles.textStyle}>{quantity}</Text>
      <CustomIconButton
        name="plus"
        size={height < 762 ? height * 0.025 : height * 0.025}
        color={'black'}
        onPress={increaseQuantity}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  quantityToggle: {
    width: width < 361 ? width * 0.28 : width * 0.18,
    // flex: 1,
    // backgroundColor: 'blue',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  textStyle: {
    color: '#640ca3',
    fontSize: height < 762 ? height * 0.025 : height * 0.025,
    fontWeight: 'bold',
  },
});
