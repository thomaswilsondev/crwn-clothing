import { compose, createStore, applyMiddleware } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import logger from "redux-logger";
import thunk from "redux-thunk";

import { rootReducer } from "./root-reducer";

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

const middleWares = [
  process.env.NODE_ENV === "development" && logger,
  thunk,
  loggerMiddleware,
].filter(Boolean);

const composeEnhancer =
  (process.env.NODE_ENV !== "production" &&
    window &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;

const persistConfig = {
  key: "root",
  storage,
  blacklist: ["user"],
  whitelist: ["cart"],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const composedEnhancers = composeEnhancer(applyMiddleware(...middleWares));

export const store = createStore(
  persistedReducer,
  undefined,
  composedEnhancers
);

export const persistor = persistStore(store);
