import React from 'react';
import {StyleSheet, Dimensions} from 'react-native';
import LottieView from 'lottie-react-native';

// eslint-disable-next-line no-unused-vars
const {height, width} = Dimensions.get('window');

export default function EmptyCartAnimation() {
  return (
    <LottieView
      style={styles.lottieStyle}
      source={require('../assets/lottieAnimations/emptyCart.json')}
      autoPlay
      loop
    />
  );
}

const styles = StyleSheet.create({
  lottieStyle: {
    height: height * 0.42,
    width: height * 0.42,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
