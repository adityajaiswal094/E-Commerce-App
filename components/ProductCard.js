import React from 'react';
import {
  View,
  StyleSheet,
  Image,
  Text,
  Dimensions,
  TouchableWithoutFeedback,
} from 'react-native';
import {useNavigate} from 'react-router-native';

import FormatPrice from '../utils/helper';

const {height, width} = Dimensions.get('window');

export default function ProductCard({product}) {
  const {id, name, imageUrl, price, description, company} = product;

  const navigate = useNavigate();

  return (
    <TouchableWithoutFeedback
      onPress={() => {
        navigate(`/singleproduct/${id}`);
      }} /*  to={`/singleproduct/${id}`}*/
    >
      <View style={styles.rootContainer}>
        {/* row */}
        <View style={styles.imageContainer}>
          {/* image */}
          <Image style={styles.imageStyle} source={{uri: imageUrl}} />
        </View>

        {/* column */}
        <View style={styles.texContainer}>
          {/* name */}
          <Text style={styles.nameStyle}>
            {company} {name}
          </Text>

          {/* spacing */}
          <View style={styles.verticalSpacing} />

          {/* price */}
          <Text style={styles.priceStyle}>
            <FormatPrice price={price} />
          </Text>

          {/* spacing */}
          <View style={styles.verticalSpacing} />

          {/* description */}
          <Text numberOfLines={2} style={styles.descriptionStyle}>
            {description}
          </Text>

          {/* colors */}
          {/* TODO */}
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    elevation: 4,
    marginBottom: 1,
    backgroundColor: 'white',
    height: height * 0.25,
    width: width,
    paddingVertical: 8,
    // paddingHorizontal: 2,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  imageContainer: {
    // flex: 1,
    height: '100%',
    width: width * 0.36,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  imageStyle: {
    width: '90%',
    height: '90%',
  },
  texContainer: {
    // flex: 2,
    width: width * 0.64,
    flexDirection: 'column',
    paddingLeft: 20,
    marginTop: 20,
  },
  nameStyle: {
    fontSize: height * 0.024,
    color: 'black',
  },
  priceStyle: {
    color: 'purple',
    fontSize: height * 0.02,
  },
  verticalSpacing: {
    height: 25,
  },
  descriptionStyle: {
    color: 'black',
    fontSize: height * 0.02,
  },
});
