import { createContext, useEffect, useReducer } from "react";
import { createAction } from "../utils/reducer/reducer.utils";
import {
  onAuthStateChangedListener,
  createUserDocumentFromAuth,
} from "../utils/firebase/firebase.utils";
// Create a new context with an initial value of null for currentUser
export const UserContext = createContext({
  setCurrentUser: () => null,
  currentUser: null,
});
// Define the initial state for the userReducer
const INITIAL_STATE = {
  currentUser: null,
};
// Define the action types for the userReducer
export const USER_ACTION_TYPES = {
  SET_CURRENT_USER: "SET_CURRENT_USER",
};

// Define the userReducer function to update the currentUser
const userReducer = (state, action) => {
  console.log("dispatched");
  console.log(action);
  const { type, payload } = action;
  switch (type) {
    case USER_ACTION_TYPES.SET_CURRENT_USER:
      return {
        ...state,
        currentUser: payload,
      };
    default:
      throw new Error(`Unhandled type ${type} in userReducer`);
  }
};
// Create a UserProvider component to provide the currentUser and setCurrentUser values to children components
export const UserProvider = ({ children }) => {
  // WHEN USE USESTATE OF UPDATE VALUE
  // const [currentUser, setCurrentUser] = useState(null);
  // WHEN USE USEREDUCER OF UPDATE VALUE THEN USE USESTATE
  const [{ currentUser }, dispatch] = useReducer(userReducer, INITIAL_STATE);
  // Define the setCurrentUser function to dispatch the action to update the currentUser
  const setCurrentUser = (user) => {
    dispatch(createAction(USER_ACTION_TYPES.SET_CURRENT_USER, user));
  };
  console.log(currentUser);
  // Create a value object with the currentUser and setCurrentUser values
  const value = { currentUser, setCurrentUser };

  //find fetch off set up current User
  useEffect(() => {
    // Listen to the auth state change using the onAuthStateChangedListener function
    const unsubscribe = onAuthStateChangedListener((user) => {
      // If the user is logged in, create a new user document using the createUserDocumentFromAuth function
      if (user) {
        createUserDocumentFromAuth(user);
      }
      // Update the currentUser value using the setCurrentUser function
      setCurrentUser(user);
    });
    // Return the unsubscribe function to remove the listener on component unmount
    return unsubscribe;
  }, []);

  // Provide the value object to children components through the UserContext.Provider
  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
