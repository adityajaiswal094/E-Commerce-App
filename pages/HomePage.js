import React, {useEffect, useCallback} from 'react';
import {View, StyleSheet} from 'react-native';
import ProductListView from '../components/ProductListView';
import {useDispatch} from 'react-redux';
import {
  GetProductsData,
  Loading,
  GetProductsDataError,
} from '../store/redux/productReducers';
import axios from 'axios';
import {BASE_URL} from '@env';
import AppBar from '../components/AppBar';

// import {useNetInfo} from '@react-native-community/netinfo';
// import NoInternetConnection from '../components/NoInternetConnection';
// import AsyncStorage from '@react-native-async-storage/async-storage';
// import {useCartContext} from '../contexts/cartContext';

export default function HomePage() {
  // const netinfo = useNetInfo();

  // console.log('netinfo: ', netinfo);
  // let {cart} = useCartContext();

  // const getLocalCartData = async () => {
  //   await AsyncStorage.getItem('@cartData').then(fetchedLocalCartData => {
  //     const cartData = JSON.parse(fetchedLocalCartData);
  //     if (!Array.isArray(cartData)) {
  //       cart = [];
  //     } else {
  //       cart = cartData;
  //     }
  //   });
  // };

  // // get item from local storage
  // useEffect(() => {
  //   getLocalCartData();
  // }, []);

  // const isConnected = netinfo.isConnected;

  const dispatch = useDispatch();

  const getProducts = useCallback(async url => {
    // dispatch({type: 'LOADING'});
    dispatch(Loading());
    try {
      const response = await axios.get(url);
      const products = await response.data;

      // dispatch({type: 'GET_PRODUCTS_DATA', payload: products});
      dispatch(GetProductsData(products));
    } catch (error) {
      // dispatch({type: 'GET_PRODUCTS_DATA_ERROR'});
      dispatch(GetProductsDataError());
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    getProducts(BASE_URL);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <View style={styles.rootContainer}>
      <AppBar />

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
