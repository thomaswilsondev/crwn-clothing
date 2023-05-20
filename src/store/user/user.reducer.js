// Import constants for action types related to the user
import { USER_ACTION_TYPES } from "./user.types";

// Define the initial state of the user
const INITIAL_STATE = {
  currentUser: null, // Set the initial value of currentUser to null
};

// Define a reducer function for the user state
export const userReducer = (state = INITIAL_STATE, action) => {
  const { type, payload } = action;

  // Use a switch statement to determine how to update the user state based on the action type
  switch (type) {
    case USER_ACTION_TYPES.SET_CURRENT_USER:
      // If the action type is SET_CURRENT_USER, return a new state with the updated currentUser value
      return { ...state, currentUser: payload };
    default:
      // If the action type is not recognized, return the current state
      return state;
  }
};
