import React from 'react';
import {FlatList} from 'react-native';

import {useProductContext} from '../contexts/productContext';
import ProductCard from './ProductCard';

export default function ProductListView() {
  const {products} = useProductContext();

  return (
    <FlatList
      data={products}
      renderItem={({item}) => <ProductCard key={item.id} product={item} />}
    />
  );
}
