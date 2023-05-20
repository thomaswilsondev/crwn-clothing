// Import constants for action types related to the user
import { USER_ACTION_TYPES } from "./user.types";

// Import a utility function for creating actions
import { createAction } from "../../utils/reducer/reducer.utils";

// Define an action creator function that returns an action object with a payload of user
export const setCurrentUser = (user) =>
  createAction(USER_ACTION_TYPES.SET_CURRENT_USER, user);
