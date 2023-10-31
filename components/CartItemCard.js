/* eslint-disable no-unused-vars */
/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Text, StyleSheet, Image, Dimensions} from 'react-native';
import {Button} from 'react-native-paper';
import FormatPrice from '../utils/helper';
import QuantityToggle from './QuantityToggle';
import ReviewStars from './ReviewStars';
import {useLocation} from 'react-router-native';
import {useDispatch} from 'react-redux';
import {
  removeItemFromCart,
  increaseItemQuantity,
  decreaseItemQuantity,
} from '../store/redux/cartReducers';

// import {useCartContext} from '../contexts/cartContext';

const {height, width} = Dimensions.get('window');

export default function CartItemCard({cartItem}) {
  // const {removeItem, increaseQuantity, decreaseQuantity} = useCartContext();

  const location = useLocation();
  const dispatch = useDispatch();

  const {
    id,
    name,
    company,
    imageUrl,
    color,
    quantity,
    stars,
    reviews,
    price,
    subTotal,
    maxStock,
  } = cartItem;

  return (
    <View style={styles.rootContainer}>
      {/* row 1 */}
      <View style={styles.innerContainer1}>
        {/* image */}
        <View style={styles.imageContainer}>
          <Image style={styles.imageStyle} source={{uri: imageUrl}} />
        </View>

        {/* details */}
        <View style={styles.detailsContainer}>
          {/* product name */}
          <Text style={styles.nameStyle}>
            {company} {name}
          </Text>

          {/* stars and review */}
          <ReviewStars
            stars={stars}
            reviews={reviews}
            size={height < 762 ? height * 0.015 : height * 0.015}
            location={location}
          />

          {/* price */}
          <Text style={styles.priceStyle}>
            <FormatPrice price={price} />
          </Text>

          {/* color */}
          <View style={styles.colorStyle}>
            <Text style={styles.colorTextStyle}>Color: </Text>
            <View
              style={{
                height: height < 762 ? height * 0.02 : height * 0.02,
                width: height < 762 ? height * 0.02 : height * 0.02,
                borderRadius: 50,
                backgroundColor: `${color}`,
              }}
            />
          </View>
        </View>
      </View>

      {/* row 2 */}
      <View style={styles.innerContainer2}>
        {/* increase decrease */}
        {/* TODO */}
        <QuantityToggle
          quantity={quantity}
          increaseQuantity={() => {
            // increaseQuantity(id);
            dispatch(increaseItemQuantity(id));
          }}
          decreaseQuantity={() => {
            // decreaseQuantity(id);
            dispatch(decreaseItemQuantity(id));
          }}
        />

        {/* remove button */}
        <Button
          icon="delete"
          mode="text"
          labelStyle={styles.buttonLabelStyle}
          onPress={() => {
            // removeItem(id);
            dispatch(removeItemFromCart(id));
          }}>
          <Text style={styles.buttonTextStyle}>Remove</Text>
        </Button>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  rootContainer: {
    // flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
    elevation: 5,
    backgroundColor: 'white',
    height: height < 762 ? 200 : height * 0.24,
    width: '100%',
  },
  innerContainer1: {
    flex: 3,
    flexDirection: 'row',
    justifyContent: 'space-between',
    // backgroundColor: 'white',
  },

  //   image
  imageContainer: {
    flex: 1,
    // height: '100%',
    // width: width * 0.36,
    // backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  imageStyle: {
    height: '80%',
    width: '80%',
  },

  //   text
  detailsContainer: {
    flex: 2,
    alignItems: 'flex-start',
    // marginLeft: 10,
  },

  nameStyle: {
    color: 'black',
    fontSize: height < 762 ? height * 0.024 : height * 0.025,
    marginVertical: 10,
  },
  priceStyle: {
    color: 'purple',
    fontSize: height < 762 ? height * 0.02 : height * 0.022,
    fontWeight: 'bold',
    marginTop: 8,
  },

  // color
  colorStyle: {
    // flex: 1,
    flexDirection: 'row',
    // backgroundColor: 'orange',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: height < 762 ? height * 0.018 : height * 0.015,
  },
  colorTextStyle: {
    color: 'black',
    fontSize: height < 762 ? height * 0.02 : height * 0.02,
  },

  //   remove button
  innerContainer2: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: height < 762 ? 'space-around' : 'space-around',
    alignItems: 'center',
  },
  buttonLabelStyle: {
    fontSize: height < 762 ? 18 : 24,
    paddingTop: height < 762 ? 4 : 10,
  },
  buttonTextStyle: {
    fontSize: height < 762 ? 16 : 24,
  },
});
