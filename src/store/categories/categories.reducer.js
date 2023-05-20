// Import constants for action types
import { CATEGORIES_ACTION_TYPES } from "./categories.types";
// Define the initial state of the categories
export const CATEGORIES_INITIAL_STATE = {
  categories: [], // An empty array of categories
};

// Define a reducer function for the categories state
export const categoriesReducer = (
  state = CATEGORIES_INITIAL_STATE, // Set the initial state to CATEGORIES_INITIAL_STATE
  action = {} // Set the default value of action to an empty object
) => {
  const { type, payload } = action;

  // Use a switch statement to determine how to update the categories state based on the action type
  switch (type) {
    case CATEGORIES_ACTION_TYPES.SET_CATEGORIES:
      // If the action type is SET_CATEGORIES, return a new state with the updated categories array
      return { ...state, categories: payload };
    default:
      // If the action type is not recognized, return the current state
      return state;
  }
};
