// actions.js
export const addToCart = (item) => {
  return {
    type: 'ADD_TO_CART',
    payload: item,
  };
};

export const removeFromCart = (item) => {
  return {
    type: 'REMOVE_FROM_CART',
    payload: item,
  };
};

export const decreaseCartItem = (item) => {
  return {
    type: 'DECREASE_CART_ITEM',
    payload: item,
  };
};

export const clearCart = () => {
  return {
    type: 'CLEAR_CART',
  };
};

// reducers.js
const initialState = {
  cartItems: [],
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_TO_CART':
      const newItem = action.payload;
      const existingItemIndex = state.cartItems.findIndex(item => item.name === newItem.name);

      if (existingItemIndex !== -1) {
        // If item already exists, increment the quantity
        const updatedCartItems = [...state.cartItems];
        updatedCartItems[existingItemIndex].quantity += 1;

        return {
          ...state,
          cartItems: updatedCartItems,
        };
      } else {
        // If item doesn't exist, add it to the cart with quantity 1
        return {
          ...state,
          cartItems: [...state.cartItems, { ...newItem, quantity: 1 }],
        };
      }

    case 'REMOVE_FROM_CART':
      const itemToRemove = action.payload;
      const updatedCartItems = state.cartItems.filter(item => item.name !== itemToRemove.name);

      return {
        ...state,
        cartItems: updatedCartItems,
      };

    case 'DECREASE_CART_ITEM':
      const itemToDecrease = action.payload;
      const updatedCartItemsDecrease = [...state.cartItems];
      const indexToDecrease = updatedCartItemsDecrease.findIndex(item => item.name === itemToDecrease.name);

      if (indexToDecrease !== -1 && updatedCartItemsDecrease[indexToDecrease].quantity > 1) {
        updatedCartItemsDecrease[indexToDecrease].quantity -= 1;
      }

      return {
        ...state,
        cartItems: updatedCartItemsDecrease,
      };

    case 'CLEAR_CART':
      // Clear the entire cart
      return {
        ...state,
        cartItems: [],
      };

    default:
      return state;
  }
};

export default cartReducer;
