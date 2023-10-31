import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  cart: [],
  //   cart: getLocalCartData(),
  totalItem: 0,
  totalAmount: 0,
};

const cartSlice = createSlice({
  name: 'cartDetails',
  initialState,
  reducers: {
    addItemToCart: (state, action) => {
      let {id, color, quantity, product} = action.payload;

      // checking if an item with same id is already present or not in cart
      let existingProduct = state.cart.find(item => item.id === id + color);
      console.log('existingProduct: ', existingProduct);

      if (existingProduct) {
        let updatedProduct = state.cart.map(item => {
          if (item.id === id + color) {
            let newQuantity = item.quantity + quantity;
            if (newQuantity >= item.maxStock) {
              newQuantity = item.maxStock;
            }
            return {...item, quantity: newQuantity};
          } else {
            return item;
          }
        });

        return {...state, cart: updatedProduct};
      } else {
        let cartProduct = {
          id: id + color,
          name: product.name,
          company: product.company,
          imageUrl: product.imageUrl,
          color: color,
          stars: product.stars,
          reviews: product.reviews,
          quantity: quantity,
          price: product.price,
          maxStock: product.stock,
        };

        return {...state, cart: [...state.cart, cartProduct]};
      }
    },

    removeItemFromCart: (state, action) => {
      let itemId = action.payload;

      let updatedCart = state.cart.filter(item => item.id !== itemId);

      return {
        ...state,
        cart: updatedCart,
      };
    },

    increaseItemQuantity: (state, action) => {
      let updatedCart = state.cart.map(item => {
        if (item.id === action.payload) {
          let newQuantity = item.quantity + 1;
          if (newQuantity >= item.maxStock) {
            newQuantity = item.maxStock;
          }
          return {...item, quantity: newQuantity};
        } else {
          return item;
        }
      });

      return {...state, cart: updatedCart};
    },

    decreaseItemQuantity: (state, action) => {
      var updatedCartList = state.cart.map(item => {
        if (item.id === action.payload) {
          let newQuantity = item.quantity - 1;
          if (newQuantity <= 1) {
            newQuantity = 1;
          }
          return {...item, quantity: newQuantity};
        } else {
          return item;
        }
      });

      return {...state, cart: updatedCartList};
    },

    totalCartItemValue: state => {
      let totalItemCountAndValue = state.cart.reduce(
        (initialValue, curItem) => {
          let itemQuantity = curItem.quantity;
          let curItemPrice = curItem.price;
          let curItemQuantity = curItem.quantity;

          initialValue.totalItem += itemQuantity;
          initialValue.totalAmount += curItemPrice * curItemQuantity;

          return initialValue;
        },
        {totalItem: 0, totalAmount: 0},
      );
      return {
        ...state,
        totalItem: totalItemCountAndValue.totalItem,
        totalAmount: totalItemCountAndValue.totalAmount,
      };
    },
  },
});

export const {
  addItemToCart,
  removeItemFromCart,
  increaseItemQuantity,
  decreaseItemQuantity,
  totalCartItemValue,
} = cartSlice.actions;
export default cartSlice.reducer;
