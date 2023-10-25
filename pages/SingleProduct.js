/* eslint-disable no-unused-vars */
import React, {useEffect} from 'react';
import {
  View,
  Image,
  Text,
  StyleSheet,
  ScrollView,
  Dimensions,
} from 'react-native';
import {useParams} from 'react-router-native';
import {useProductContext} from '../contexts/productContext';
import FormatPrice from '../utils/helper';
import ColorsList from '../components/ColorsList';
import {Button} from 'react-native-paper';
import {Link} from 'react-router-native';

const baseUrl = 'http:localhost:8080';
const {height, width} = Dimensions.get('window');

export default function SingleProduct() {
  const {id} = useParams();
  const {getSingleProduct, isSingleLoading, singleProduct} =
    useProductContext();

  const {
    name = '',
    price = 0,
    imageUrl = '',
    company = '',
    colors = [],
    description = '',
    category = '',
    stock = 0,
    reviews = 0,
    stars = 0,
  } = singleProduct;

  useEffect(() => {
    const singleProductUrl = `${baseUrl}/singleproduct/${id}`;
    getSingleProduct(singleProductUrl);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <View style={styles.rootContainer}>
      <ScrollView>
        {/* image */}
        <View style={styles.imageContainer}>
          <Image style={styles.imageStyle} source={{uri: imageUrl}} />
        </View>

        {/* details */}
        <View style={styles.textContainer}>
          {/* brand and model name */}
          <View style={styles.titleStyle}>
            <Text style={styles.brandNameStyle}>{company}</Text>
            <Text style={styles.modelNameStyle}>{name}</Text>
          </View>

          {/* price */}
          <Text style={styles.priceStyle}>
            <FormatPrice price={price} />
          </Text>

          {/* colors */}
          {/* TODO */}
          <ColorsList colors={colors} />

          {/* description */}
          <Text style={styles.descriptionStyle}>{description}</Text>
        </View>
      </ScrollView>

      {/* Buy button */}
      <View style={styles.bottomBar}>
        {/* add to cart - add to cart button will just add to cart */}
        <Button mode="text">Add to cart</Button>

        {/* buy - buy button will add to cart and redirect to cart page */}
        <Link to="/cart">
          <Button mode="contained-tonal">Buy</Button>
        </Link>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageContainer: {
    height: 320,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'lime',
  },
  imageStyle: {
    height: 200,
    width: 200,
  },
  textContainer: {
    flex: 1,
    paddingHorizontal: 10,
  },
  titleStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingBottom: 8,
  },
  modelNameStyle: {
    color: 'black',
    fontSize: 24,
  },
  brandNameStyle: {
    color: 'black',
    paddingRight: 5,
    fontSize: 20,
  },
  priceStyle: {
    paddingBottom: 8,
    color: 'black',
    fontSize: 18,
    fontWeight: 'bold',
  },
  descriptionStyle: {
    paddingBottom: 8,
    color: 'black',
    fontSize: 18,
    textAlign: 'justify',
  },
  bottomBar: {
    // flex: 1,
    height: height * 0.08,
    width: width * 1,
    backgroundColor: 'white',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingHorizontal: width * 0.05,
    flexDirection: 'row',
  },
});
