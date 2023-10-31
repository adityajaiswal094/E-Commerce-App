// import React, {useEffect, createContext, useContext, useReducer} from 'react';
// import reducer from '../reducers/cartReducer';
// import AsyncStorage from '@react-native-async-storage/async-storage';

// const CartContext = createContext();

// const initialState = {
//   cart: [],
//   //   cart: getLocalCartData(),
//   totalItem: 0,
//   totalAmount: 0,
// };

// const CartProvider = ({children}) => {
//   const [state, dispatch] = useReducer(reducer, initialState);

//   const addToCart = (id, color, quantity, product) => {
//     dispatch({type: 'ADD_TO_CART', payload: {id, color, quantity, product}});
//   };

//   const removeItem = id => {
//     dispatch({type: 'REMOVE_ITEM', payload: id});
//   };

//   //   increasing and decreasing item quantity from cart page
//   const increaseQuantity = id => {
//     dispatch({type: 'INCREASE_QUANTITY', payload: id});
//   };
//   const decreaseQuantity = id => {
//     dispatch({type: 'DECREASE_QUANTITY', payload: id});
//   };

//   //   storing cart items in localStorage
//   // get to fetch and set to store
//   const storeData = async () => {
//     try {
//       console.log('cartData in set:', state.cart);
//       console.log('stringify cartData in set:', JSON.stringify(state.cart));
//       await AsyncStorage.setItem('@cartData', JSON.stringify(state.cart));
//     } catch (e) {
//       // saving error
//       console.error('Error: ', e);
//       console.error('Error while storing locally.');
//     }
//   };

//   // const getLocalCartData = async () => {
//   //   await AsyncStorage.getItem('@cartData').then(fetchedLocalCartData => {
//   //     const cartData = JSON.parse(fetchedLocalCartData);
//   //     if (!Array.isArray(cartData)) {
//   //       return [];
//   //     }
//   //     return cartData;
//   //   });
//   // };

//   // // get item from local storage
//   // useEffect(() => {
//   //   getLocalCartData();
//   // }, []);

//   // set item in local storage
//   useEffect(() => {
//     storeData();
//     // eslint-disable-next-line react-hooks/exhaustive-deps
//   }, [state.cart]);

//   useEffect(() => {
//     dispatch({type: 'TOTAL_CART_ITEM_VALUE'});
//   }, [state.cart]);

//   return (
//     <CartContext.Provider
//       value={{
//         ...state,
//         addToCart,
//         removeItem,
//         increaseQuantity,
//         decreaseQuantity,
//       }}>
//       {children}
//     </CartContext.Provider>
//   );
// };

// const useCartContext = () => {
//   return useContext(CartContext);
// };

// export {CartContext, CartProvider, useCartContext};
