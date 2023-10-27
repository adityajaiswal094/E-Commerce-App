import React from 'react';
import {View, StyleSheet} from 'react-native';
import ProductListView from '../components/ProductListView';
import {useNetInfo} from '@react-native-community/netinfo';
import NoInternetConnection from '../components/NoInternetConnection';

export default function HomePage() {
  const netinfo = useNetInfo();
  console.log('netinfo: ', netinfo);

  const isConnected = netinfo.isConnected;

  return (
    <View style={styles.rootContainer}>
      {isConnected === true ? <ProductListView /> : <NoInternetConnection />}
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
