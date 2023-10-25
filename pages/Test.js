import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

export default function Test() {
  return (
    <View style={styles.rootContainer}>
      <Text style={styles.textStyle}>Test Page</Text>
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
