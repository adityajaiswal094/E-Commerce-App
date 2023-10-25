import React from 'react';
import {View, StyleSheet, Image, Text} from 'react-native';
import {Link} from 'react-router-native';

import FormatPrice from '../utils/helper';

export default function ProductCard({product}) {
  // eslint-disable-next-line no-unused-vars
  const {id, name, imageUrl, price, colors} = product;
  return (
    <Link to={`/singleproduct/${id}`}>
      <View style={styles.rootContainer}>
        {/* row */}
        <View style={styles.imageContainer}>
          {/* image */}
          <Image style={styles.imageStyle} source={{uri: imageUrl}} />
        </View>

        {/* column */}
        <View style={styles.texContainer}>
          <Text style={styles.textStyle}>{name}</Text>
          {/* spacing */}
          <View style={styles.verticalSpacing} />
          <Text style={styles.textStyle}>
            <FormatPrice price={price} />
          </Text>

          {/* colors */}
          {/* TODO */}
        </View>
      </View>
    </Link>
  );
}

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    elevation: 4,
    marginBottom: 1,
    backgroundColor: 'white',
    height: 180,
    width: '100%',
    paddingVertical: 10,
    paddingHorizontal: 16,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  imageContainer: {
    flex: 1,
    height: '100%',
    // width: 80,
    backgroundColor: 'white',
    justifyContent: 'center',
  },
  texContainer: {
    flex: 2,
    flexDirection: 'column',
    paddingLeft: 20,
    marginTop: 20,
  },
  imageStyle: {
    width: 100,
    height: 100,
  },
  textStyle: {
    fontSize: 18,
    color: 'black',
  },
  verticalSpacing: {
    height: 25,
  },
});
