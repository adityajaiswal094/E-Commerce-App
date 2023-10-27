import React from 'react';
import {View, StyleSheet, Text, Dimensions} from 'react-native';
import LottieView from 'lottie-react-native';

// eslint-disable-next-line no-unused-vars
const {height, width} = Dimensions.get('window');

export default function NoInternetConnection() {
  return (
    <View style={styles.rootContainer}>
      <LottieView
        style={styles.lottieStyle}
        source={require('../assets/lottieAnimations/no_internet.json')}
        autoPlay
      />
      <Text style={styles.titleStyle}>No Connection</Text>
      <Text style={styles.captionStyle}>
        Please check you internet connectivity
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },
  lottieStyle: {
    height: height * 0.35,
    width: height * 0.35,
  },
  titleStyle: {
    fontSize: height * 0.025,
    color: 'black',
  },
  captionStyle: {
    fontSize: height * 0.018,
    color: '#56a4a9',
    fontWeight: '300',
  },
});
