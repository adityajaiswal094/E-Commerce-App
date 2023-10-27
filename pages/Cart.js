import React from 'react';
import {View, Text, StyleSheet, FlatList, Dimensions} from 'react-native';
import CustomBackButton from '../components/CustomBackButton';
import {useNavigate} from 'react-router-native';
import {useCartContext} from '../contexts/cartContext';
import CartCard from '../components/CartItemCard';
import {Button} from 'react-native-paper';
import FormatPrice from '../utils/helper';
import EmptyCartAnimation from '../components/EmptyCartAnimation';

const {height, width} = Dimensions.get('window');

export default function Cart() {
  const navigate = useNavigate();
  const {cart, totalAmount} = useCartContext();

  return cart.length === 0 ? (
    <View style={styles.emptyCartTextStyle}>
      <EmptyCartAnimation />
      <Text style={styles.textStyle}>Your cart is empty!</Text>
      <Button
        mode="contained-tonal"
        onPress={() => {
          navigate('/', {replace: true});
        }}>
        Shop Now
      </Button>
    </View>
  ) : (
    <>
      {/* cart list */}
      <View style={styles.rootContainer}>
        <CustomBackButton navigate={navigate} />
        <FlatList
          style={styles.cartContainer}
          data={cart}
          renderItem={({item}) => <CartCard key={item.id} cartItem={item} />}
        />

        {/* bottom bar - shows total amount and checkout button */}
        <View style={styles.bottomBar}>
          {/* decrease, quantity, increase */}
          <Text style={styles.textStyle}>
            <FormatPrice price={totalAmount} />
          </Text>

          {/* add to cart button */}
          <Button
            mode="contained-tonal"
            labelStyle={styles.buttonLabelStyle}
            onPress={() => {}}>
            <Text style={styles.buttonTextStyle}>Checkout</Text>
          </Button>
        </View>
      </View>
    </>
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
    gap: 10,
    flex: 1,
    paddingTop: height * 0.06,
    alignItems: 'center',
    backgroundColor: 'white',
  },
  textStyle: {
    color: 'purple',
    fontSize: height < 762 ? height * 0.025 : height * 0.03,
    marginBottom: height * 0.06,
    fontWeight: 'bold',
  },
  bottomBar: {
    // flex: 1,
    height: height * 0.08,
    width: width * 1,
    backgroundColor: 'white',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: width * 0.08,
    flexDirection: 'row',
  },
  buttonLabelStyle: {
    // fontSize: height < 762 ? height * 0.01 : height * 0.018,
    paddingTop: height < 762 ? 4 : 18,
    paddingBottom: height < 762 ? 1 : 6,
    paddingHorizontal: height < 762 ? 0 : 8,
  },
  buttonTextStyle: {
    fontSize: height < 762 ? 16 : 28,
  },
});
