import React from 'react';
import {View, Text} from 'react-native';

export default function AddToCart({id, color, quantity, product}) {
  return (
    <View>
      <Text>Add to cart component</Text>
    </View>
  );
}

/*

{stock > 0 ? (
          quantity === 0 ? (
            <Button
              mode="text"
              onPress={() => {
                quantity === 0
                  ? setQuantity(quantity + 1)
                  : setQuantity(quantity);
              }}>
              Add to cart
            </Button>
          ) : (
            <Button mode="text" onPress={() => navigateToCart}>
              Go to cart
            </Button>
          )
        ) : (
          <Text style={styles.outOfStock}>Out of stock</Text>
        )}

        // buy - buy button will add to cart and redirect to cart page
        {/* <Button
          mode="contained-tonal"
          disabled={stock > 0 ? false : true}
          onPress={() => {
            if (quantity >= 1) {
              navigateToCart();
            } else {
              setQuantity(quantity + 1);
              navigateToCart();
            }
          }}>
          Buy
        </Button> */

// */
