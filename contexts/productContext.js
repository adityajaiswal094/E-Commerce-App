// /* eslint-disable no-unused-vars */
// /* eslint-disable no-undef */
// import React, {useContext, createContext, useEffect, useReducer} from 'react';
// import axios from 'axios';
// import reducer from '../reducers/productReducer';

// const ProductContext = createContext();

// // const baseUrl = 'https://e-commercebackend.up.railway.app/';

// const initialState = {
//   isLoading: false,
//   isError: false,
//   isSingleLoading: false,
//   products: [],
//   singleProduct: {},
// };

// const ProductProvider = ({children}) => {
//   const [state, dispatch] = useReducer(reducer, initialState);

//   // const getProducts = async url => {
//   //   dispatch({type: 'LOADING'});
//   //   try {
//   //     const response = await axios.get(url);
//   //     const products = await response.data;

//   //     dispatch({type: 'GET_PRODUCTS_DATA', payload: products});
//   //   } catch (error) {
//   //     dispatch({type: 'GET_PRODUCTS_DATA_ERROR'});
//   //   }
//   // };

//   // const getSingleProduct = async url => {
//   //   dispatch({type: 'SINGLE_LOADING'});
//   //   try {
//   //     const response = await axios.get(url);
//   //     const singleProduct = await response.data;
//   //     dispatch({type: 'GET_SINGLE_PRODUCT_DATA', payload: singleProduct});
//   //   } catch (error) {
//   //     dispatch({type: 'GET_SINGLE_PRODUCT_DATA_ERROR'});
//   //   }
//   // };

//   // useEffect(() => {
//   //   getProducts(baseUrl);
//   // }, []);

//   return (
//     <ProductContext.Provider value={{...state, getSingleProduct}}>
//       {children}
//     </ProductContext.Provider>
//   );
// };

// // custom hook
// const useProductContext = () => {
//   return useContext(ProductContext);
// };

// export {ProductContext, ProductProvider, useProductContext};
