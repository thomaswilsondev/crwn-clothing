// Import the combineReducers function from Redux
import { combineReducers } from "redux";

// Import reducer functions for user, categories, and cart state
import { userReducer } from "./user/user.reducer";
import { categoriesReducer } from "./categories/categories.reducer";
import { cartReducer } from "./cart/cart.reducer";

// Define a rootReducer that combines all the individual reducer functions into a single reducer function
export const rootReducer = combineReducers({
  user: userReducer, // Add the user reducer function to the rootReducer
  categories: categoriesReducer, // Add the categories reducer function to the rootReducer
  cart: cartReducer, // Add the cart reducer function to the rootReducer
});
