/* eslint-disable no-unused-vars */
import React, {useEffect, useState} from 'react';
import {
  View,
  Image,
  Text,
  StyleSheet,
  ScrollView,
  Dimensions,
  BackHandler,
} from 'react-native';
import {useParams} from 'react-router-native';
import {useProductContext} from '../contexts/productContext';
import FormatPrice from '../utils/helper';
import ColorsList from '../components/ColorsList';
import {ActivityIndicator, Button, FAB} from 'react-native-paper';
import {useNavigate} from 'react-router-native';
import CustomBackButton from '../components/CustomBackButton';
import ReviewStars from '../components/ReviewStars';
import AddToCart from '../components/AddToCart';
import CustomIconButton from '../components/CustomIconButton';
import {useCartContext} from '../contexts/cartContext';
import QuantityToggle from '../components/QuantityToggle';

const baseUrl = 'http:localhost:8080';
const {height, width} = Dimensions.get('window');

export default function SingleProduct() {
  const {id} = useParams();
  const {getSingleProduct, isSingleLoading, singleProduct} =
    useProductContext();

  const {addToCart} = useCartContext();

  const navigate = useNavigate();

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

  const [quantity, setQuantity] = useState(1);
  const [color, setColor] = useState(colors[0]);

  const increaseQuantity = () => {
    quantity < stock ? setQuantity(quantity + 1) : setQuantity(stock);
  };

  const decreaseQuantity = () => {
    quantity > 1 ? setQuantity(quantity - 1) : setQuantity(1);
  };

  const navigateToCart = () => {
    navigate(
      '/cart' /* {
      state: {
        quantity: quantity,
        stock: stock,
        setQuantity: setQuantity,
        increaseQuantity: increaseQuantity,
        decreaseQuantity: decreaseQuantity,
      },
    } */,
    );
  };

  // fetching single product details
  useEffect(() => {
    const singleProductUrl = `${baseUrl}/singleproduct/${id}`;
    getSingleProduct(singleProductUrl);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // over-riding hardware back action
  useEffect(() => {
    const backAction = e => {
      // if (e && e.preventDefault) {
      // e.preventDefault();
      // }
      return true;
    };

    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      backAction,
    );

    return () => backHandler.remove;
  }, []);

  // selecting first color as soon as colors[] gets populated
  useEffect(() => {
    let initialColor = colors[0];
    setColor(initialColor);
  }, [colors]);

  return isSingleLoading ? (
    <View style={styles.activityIndicatorStyle}>
      <ActivityIndicator size="large" />
    </View>
  ) : (
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
          <ColorsList
            color={color}
            setColor={setColor}
            stock={stock}
            colors={colors}
          />

          {/* stars and reviews */}
          <ReviewStars stars={stars} reviews={reviews} size={24} />

          {/* description */}
          <Text style={styles.descriptionStyle}>{description}</Text>
        </View>
      </ScrollView>

      <CustomBackButton navigate={navigate} />

      {/* Buy button */}
      <View style={styles.bottomBar}>
        {/* decrease, quantity, increase */}
        {stock > 0 ? (
          <QuantityToggle
            quantity={quantity}
            increaseQuantity={increaseQuantity}
            decreaseQuantity={decreaseQuantity}
          />
        ) : (
          <Text style={styles.outOfStock}>Out of stock</Text>
        )}

        {/* add to cart button */}
        <Button
          mode="contained-tonal"
          disabled={stock > 0 ? false : true}
          onPress={() => {
            addToCart(id, color, quantity, singleProduct);
            navigateToCart();
          }}>
          Add to cart
        </Button>
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
    backgroundColor: 'white',
  },
  imageStyle: {
    height: '65%',
    width: '65%',
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
    color: 'purple',
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
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: width * 0.05,
    flexDirection: 'row',
    marginBottom: height * 0.01,
  },
  activityIndicatorStyle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  outOfStock: {
    color: 'red',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
