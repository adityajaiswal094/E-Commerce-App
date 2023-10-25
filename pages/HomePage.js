import React from 'react';
import {View, StyleSheet, Dimensions} from 'react-native';
import ProductListView from '../components/ProductListView';

// eslint-disable-next-line no-unused-vars
const {height, width} = Dimensions.get('window');

export default function HomePage() {
  return (
    <View style={styles.rootContainer}>
      <ProductListView />
    </View>
  );
}

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    backgroundColor: 'white',
  },
  text: {
    fontSize: 24,
    color: 'orange',
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});
