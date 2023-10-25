import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
export default function Auth() {
  return (
    <View style={styles.rootContainer}>
      <Text style={styles.textStyle}>Auth Page</Text>
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
