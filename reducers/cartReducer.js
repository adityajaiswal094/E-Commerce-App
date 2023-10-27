const CartReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TO_CART':
      let {id, color, quantity, product} = action.payload;

      // checking if an item with same id is already present or not in cart
      let existingProduct = state.cart.find(item => item.id === id + color);

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

        console.log('cartProduct.subTotal: ', cartProduct.subTotal);
        return {...state, cart: [...state.cart, cartProduct]};
      }

    case 'REMOVE_ITEM':
      let itemId = action.payload;

      let updatedCart = state.cart.filter(item => item.id !== itemId);
      return {
        ...state,
        cart: updatedCart,
      };

    case 'INCREASE_QUANTITY':
      var updatedCartList = state.cart.map(item => {
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
      return {...state, cart: updatedCartList};

    case 'DECREASE_QUANTITY':
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

    case 'TOTAL_CART_ITEM_VALUE':
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

    default:
      return state;
  }
};

export default CartReducer;
