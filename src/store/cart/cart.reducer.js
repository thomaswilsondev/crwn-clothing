// Import constants for action types
import { CART_ACTION_TYPES } from "./cart.types";

// Define the initial state of the cart
const CART_INITIAL_STATE = {
  isCartOpen: false, // Whether the cart is open or closed (default is closed)
  cartItems: [], // An empty array of cart items
};

// Define a reducer function for the cart state
export const cartReducer = (state = CART_INITIAL_STATE, action = {}) => {
  const { type, payload } = action;

  // Use a switch statement to determine how to update the cart state based on the action type
  switch (type) {
    case CART_ACTION_TYPES.SET_CART_ITEMS:
      // If the action type is SET_CART_ITEMS, return a new state with the updated cart items array
      return {
        ...state,
        cartItems: payload,
      };
    case CART_ACTION_TYPES.SET_IS_CART_OPEN:
      // If the action type is SET_IS_CART_OPEN, return a new state with the updated isCartOpen value
      return {
        ...state,
        isCartOpen: payload,
      };
    default:
      // If the action type is not recognized, return the current state
      return state;
  }
};
