// Import constants for action types
import { CATEGORIES_ACTION_TYPES } from "./categories.types";

// Import a utility function for creating actions
import { createAction } from "../../utils/reducer/reducer.utils";

// Define an action creator function that returns an action object with a payload of categoriesArray
export const setCategories = (categoriesArray) =>
  createAction(CATEGORIES_ACTION_TYPES.SET_CATEGORIES, categoriesArray);
