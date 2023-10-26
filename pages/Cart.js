import React from 'react';
import {View, Text, StyleSheet, FlatList, Dimensions} from 'react-native';
import CustomBackButton from '../components/CustomBackButton';
import {useNavigate} from 'react-router-native';
import {useCartContext} from '../contexts/cartContext';
import CartCard from '../components/CartCard';
import {Button} from 'react-native-paper';

const {height, width} = Dimensions.get('window');

export default function Cart() {
  const navigate = useNavigate();
  const {cart} = useCartContext();

  return (
    <View style={styles.rootContainer}>
      <CustomBackButton navigate={navigate} />

      {/* if cart is empty show this */}
      {/* will try to add lottie animation */}
      {/* for the time being */}

      {cart.length === 0 ? (
        <View style={styles.emptyCartTextStyle}>
          <Text style={styles.textStyle}>Cart is empty</Text>
        </View>
      ) : (
        <>
          {/* cart list */}
          <FlatList
            style={styles.cartContainer}
            data={cart}
            renderItem={({item}) => <CartCard key={item.id} cartItem={item} />}
          />

          {/* bottom bar - shows total amount and checkout button */}
          <View style={styles.bottomBar}>
            {/* decrease, quantity, increase */}
            <Text style={styles.textStyle}>Total</Text>

            {/* add to cart button */}
            <Button mode="contained-tonal" onPress={() => {}}>
              Checkout
            </Button>
          </View>
        </>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    backgroundColor: 'white',
  },
  cartContainer: {
    flex: 1,
    marginTop: 80,
  },
  emptyCartTextStyle: {
    top: '50%',
    // justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: 'red',
  },
  textStyle: {
    color: 'black',
    fontSize: 22,
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
});
