// Import the compose, createStore, and applyMiddleware functions from Redux
import { compose, createStore, applyMiddleware } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
// Import the rootReducer function that combines all the individual reducer functions
import { rootReducer } from "./root-reducer";
import logger from "redux-logger";
// Define a logger middleware function for logging actions and state changes
const loggerMiddleware = (store) => (next) => (action) => {
  // If the action doesn't have a type, skip the logging and pass it to the next middleware
  if (!action.type) {
    return next(action);
  }

  // Log the action type, payload, and current state before the action is processed
  console.log("type: ", action.type);
  console.log("payload: ", action.payload);
  console.log("currentState: ", store.getState());

  // Pass the action to the next middleware and log the next state after the action is processed
  next(action);

  console.log("next state: ", store.getState());
};

// Define an array of middleware functions to apply to the store
const middleWares = [process.env.NODE_ENV === "production" && logger].filter(
  Boolean
);

const persistConfig = {
  key: "root",
  storage,
  blacklist: ["user"],
};

const persisedReducer = persistReducer(persistConfig, rootReducer);

// Use the compose function to apply middleware to the store
const composeEnhancer =
  (process.env.NODE_ENV !== "production" &&
    window &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;
const composedEnhancers = composeEnhancer(applyMiddleware(...middleWares));

// Create the Redux store using the rootReducer and the composed enhancers
export const store = createStore(persisedReducer, undefined, composedEnhancers);
export const persistor = persistStore(store);
