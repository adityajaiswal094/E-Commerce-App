import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  isLoading: false,
  isError: false,
  isSingleLoading: false,
  products: [],
  singleProduct: {},
};

const cartSlice = createSlice({
  name: 'productDetails',
  initialState,
  reducers: {
    Loading: (state, action) => {
      return {...state, isLoading: true};
    },
    GetProductsData: (state, action) => {
      return {...state, products: action.payload, isLoading: false};
    },
    GetProductsDataError: (state, action) => {
      return {...state, isLoading: false, isError: true};
    },
    SingleLoading: (state, action) => {
      return {...state, isSingleLoading: true};
    },
    GetSingleProductData: (state, action) => {
      return {...state, isSingleLoading: false, singleProduct: action.payload};
    },
    GetSingleProductDataError: (state, action) => {
      return {...state, isError: true, isSingleLoading: false};
    },
  },
});

export const {
  Loading,
  GetProductsData,
  GetProductsDataError,
  SingleLoading,
  GetSingleProductData,
  GetSingleProductDataError,
} = cartSlice.actions;
export default cartSlice.reducer;
