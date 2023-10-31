import React from 'react';
import {FlatList, View, StyleSheet} from 'react-native';
import {ActivityIndicator} from 'react-native-paper';

// import {useProductContext} from '../contexts/productContext';
import ProductCard from './ProductItemCard';
import {useSelector} from 'react-redux';

export default function ProductListView() {
  // const {products, isLoading} = useProductContext();
  const {products, isLoading} = useSelector(state => state.productDetails);

  return isLoading ? (
    <View style={styles.activityIndicatorStyle}>
      <ActivityIndicator size="large" />
    </View>
  ) : (
    <FlatList
      data={products}
      renderItem={({item}) => <ProductCard key={item.id} product={item} />}
    />
  );
}

const styles = StyleSheet.create({
  activityIndicatorStyle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
