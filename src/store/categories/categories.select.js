// Import the createSelector function from the reselect library
import { createSelector } from "reselect";

// Define a selector function to get the categories state from the store
const selectCategoryReducer = (state) => state.categories;

// Define a selector function to get the categories array from the categories state
export const selectCategories = createSelector(
  [selectCategoryReducer], // Pass in an array of selector functions that return slices of state
  (categoriesSlice) => categoriesSlice.categories // Pass in a function that returns the desired value
);

// Define a selector function to map the categories array to an object with category titles as keys and category items as values
export const selectCategoriesMap = createSelector(
  [selectCategories], // Pass in an array of selector functions that return slices of state
  (categories) =>
    categories.reduce((acc, category) => {
      // Use the reduce method to map the categories array to an object
      const { title, items } = category;
      acc[title.toLowerCase()] = items; // Set the category title as the key and the category items as the value
      return acc;
    }, {}) // Use an empty object as the initial value for the accumulator
);
