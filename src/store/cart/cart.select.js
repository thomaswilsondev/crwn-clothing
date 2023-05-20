// Import the createSelector function from the reselect library
import { createSelector } from "reselect";

// Define a selector function to get the cart state from the store
const selectCartReducer = (state) => state.cart;

// Define a selector function to get the value of isCartOpen from the cart state
export const selectIsCartOpen = createSelector(
  [selectCartReducer], // Pass in an array of selector functions that return slices of state
  (cart) => cart.isCartOpen // Pass in a function that returns the desired value
);

// Define a selector function to get the cart items array from the cart state
export const selectCartItems = createSelector(
  [selectCartReducer], // Pass in an array of selector functions that return slices of state
  (cart) => cart.cartItems // Pass in a function that returns the desired value
);

// Define a selector function to calculate the total cost of all items in the cart
export const selectCartTotal = createSelector(
  [selectCartItems], // Pass in an array of selector functions that return slices of state
  (cartItems) =>
    cartItems.reduce(
      // Pass in a function that calculates the total cost of all items in the cart
      (total, cartItem) => total + cartItem.quantity * cartItem.price,
      0
    )
);

// Define a selector function to calculate the totalcount of all items in the cart
export const selectCartCount = createSelector(
  [selectCartItems], // Pass in an array of selector functions that return slices of state
  (cartItems) =>
    cartItems.reduce(
      // Pass in a function that calculates the total count of all items in the cart
      (total, cartItem) => total + cartItem.quantity,
      0
    )
);
