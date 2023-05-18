import USER_ACTION_TYPES from "./user.types";
// Define the initial state for the userReducer
export const USER_INITIAL_STATE = {
  currentUser: null,
};

// Define the userReducer function to update the currentUser
export const userReducer = (state = USER_INITIAL_STATE, action = {}) => {
  const { type, payload } = action;

  switch (type) {
    case USER_ACTION_TYPES.SET_CURRENT_USER:
      return { ...state, currentUser: payload };
    default:
      return state;
  }
};
