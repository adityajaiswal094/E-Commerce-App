const ProductReducer = (state, action) => {
  switch (action.type) {
    case 'LOADING':
      return {...state, isLoading: true};

    case 'GET_PRODUCTS_DATA':
      return {...state, products: action.payload};

    case 'GET_PRODUCTS_DATA_ERROR':
      return {...state, isLoading: false, isError: true};

    case 'SINGLE_LOADING':
      return {...state, isSingleLoading: true};

    case 'GET_SINGLE_PRODUCT_DATA':
      return {...state, isSingleLoading: false, singleProduct: action.payload};

    case 'GET_SINGLE_PRODUCT_DATA_ERROR':
      return {...state, isError: true, isSingleLoading: false};

    default:
      return state;
  }
};

export default ProductReducer;
