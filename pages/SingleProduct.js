/* eslint-disable no-unused-vars */
import React, {useEffect, useState, useCallback} from 'react';
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
import {useNavigate, useLocation} from 'react-router-native';
import CustomBackButton from '../components/CustomBackButton';
import ReviewStars from '../components/ReviewStars';
import QuantityToggle from '../components/QuantityToggle';
import {addItemToCart} from '../store/redux/cartReducers';
import {useSelector, useDispatch} from 'react-redux';
import {
  GetSingleProductData,
  GetSingleProductDataError,
  SingleLoading,
} from '../store/redux/productReducers';
import axios from 'axios';
import {BASE_URL} from '@env';
import AppBar from '../components/AppBar';

// import {useCartContext} from '../contexts/cartContext';

const {height, width} = Dimensions.get('window');

export default function SingleProduct() {
  const {id} = useParams();
  // const {getSingleProduct, isSingleLoading, singleProduct} =
  //   useProductContext();
  const {isSingleLoading, singleProduct} = useSelector(
    state => state.productDetails,
  );

  // const {addToCart} = useCartContext();

  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();

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

  const singleProductUrl = `${BASE_URL}singleproduct/${id}`;

  const getSingleProduct = useCallback(async url => {
    // dispatch({type: 'SINGLE_LOADING'});
    dispatch(SingleLoading());
    try {
      const response = await axios.get(singleProductUrl);
      const singleProductData = await response.data;
      dispatch(GetSingleProductData(singleProductData));

      // dispatch({type: 'GET_SINGLE_PRODUCT_DATA', payload: singleProduct});
    } catch (error) {
      dispatch(GetSingleProductDataError());
      // dispatch({type: 'GET_SINGLE_PRODUCT_DATA_ERROR'});
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  // fetching single product details
  useEffect(() => {
    // getSingleProduct(singleProductUrl);

    getSingleProduct();
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

  return (
    <>
      <AppBar />
      {isSingleLoading ? (
        <View style={styles.activityIndicatorStyle}>
          <ActivityIndicator size="large" />
        </View>
      ) : (
        <View style={styles.rootContainer}>
          <ScrollView>
            {/* image */}
            <View style={styles.imageContainer}>
              {imageUrl === '' ? (
                <ActivityIndicator size="large" />
              ) : (
                <Image style={styles.imageStyle} source={{uri: imageUrl}} />
              )}
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
              <View style={styles.colorListContainer}>
                <ColorsList
                  color={color}
                  setColor={setColor}
                  stock={stock}
                  colors={colors}
                />
              </View>

              {/* stars and reviews */}
              <View style={styles.reviewContainer}>
                <ReviewStars
                  stars={stars}
                  reviews={reviews}
                  size={height < 762 ? height * 0.02 : height * 0.024}
                  location={location}
                />
              </View>

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
              labelStyle={styles.buttonLabelStyle}
              onPress={() => {
                // addToCart(id, color, quantity, singleProduct);
                dispatch(
                  addItemToCart({
                    id: id,
                    color: color,
                    quantity: quantity,
                    product: singleProduct,
                  }),
                );
                navigateToCart();
              }}>
              <Text style={styles.buttonTextStyle}>Add to cart</Text>
            </Button>
          </View>
        </View>
      )}
    </>
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
    height: height * 0.4,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  imageStyle: {
    height: '70%',
    width: '65%',
  },
  textContainer: {
    flex: 1,
    marginTop: 10,
    paddingHorizontal: width * 0.02,
  },
  titleStyle: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: height < 762 ? height * 0.01 : 0,
  },
  modelNameStyle: {
    color: 'black',
    fontSize: height < 762 ? height * 0.03 : height * 0.04,
  },
  brandNameStyle: {
    color: 'black',
    paddingRight: width * 0.01,
    fontSize: height < 762 ? height * 0.03 : height * 0.03,
    fontWeight: 'bold',
  },
  priceStyle: {
    flex: 1,
    marginBottom: height * 0.01,
    color: 'purple',
    fontSize: height < 762 ? height * 0.025 : height * 0.03,
    fontWeight: 'bold',
  },
  colorListContainer: {
    flex: 1,
    marginBottom: height < 762 ? height * 0.01 : height * 0.03,
  },
  reviewContainer: {
    flex: 1,
    marginBottom: height * 0.01,
  },
  descriptionStyle: {
    flex: 1,
    marginBottom: height * 0.01,
    color: 'black',
    fontSize: height < 762 ? height * 0.02 : height * 0.025,
    textAlign: 'justify',
  },
  bottomBar: {
    // flex: 1,
    height: height * 0.08,
    width: width,
    backgroundColor: 'white',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: width * 0.08,
    flexDirection: 'row',
  },
  activityIndicatorStyle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  outOfStock: {
    color: 'red',
    fontSize: height < 762 ? height * 0.025 : height * 0.04,
    fontWeight: 'bold',
  },
  buttonStyle: {},
  buttonLabelStyle: {
    // fontSize: height < 762 ? height * 0.01 : height * 0.018,
    paddingTop: height < 762 ? 4 : 18,
    paddingBottom: height < 762 ? 1 : 6,
    paddingHorizontal: height < 762 ? 0 : 8,
  },
  buttonTextStyle: {
    fontSize: height < 762 ? 16 : 24,
  },
});
