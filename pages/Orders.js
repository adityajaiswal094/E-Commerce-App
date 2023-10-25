import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

export default function Orders() {
  return (
    <View style={styles.rootContainer}>
      <Text style={styles.textStyle}>Orders Page</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    backgroundColor: 'white',
  },
  textStyle: {
    color: 'black',
  },
});
