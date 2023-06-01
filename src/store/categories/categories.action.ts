import { createAction } from "../../utils/reducer/reducer.utils";
import {
  CATEGORIES_ACTION_TYPES,
  Category,
  CategoriesItem,
} from "./categories.types";
import { Action, ActionWithPayLoad } from "../../utils/reducer/reducer.utils";

//Fetch Start
export type FetchCategoriesStart =
  Action<CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_START>;
export const fetchCategoriesStart = (): FetchCategoriesStart =>
  createAction(CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_START);

// Fetch Success
export type FetchCategoriesSuccess = ActionWithPayLoad<
  CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_SUCCESS,
  Category[]
>;

export const fetchCategoriesSuccess = (
  categoriesArray: Category[]
): FetchCategoriesSuccess =>
  createAction(CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_SUCCESS);

// Fetch Failed
export type FetchCategoriesFailed = ActionWithPayLoad<
  CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_FAILED,
  Error
>;
export const fetchCategoriesFailed = (error: Error): FetchCategoriesFailed =>
  createAction(CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_FAILED, error);

// CategoryItem
export type CategoriesAction =
  | FetchCategoriesFailed
  | FetchCategoriesStart
  | FetchCategoriesSuccess;
