import { createContext, useEffect, useState } from "react";
import {
  addCollectionAndDocuments,
  getCategoriesAndDocuments,
} from "../utils/firebase/firebase.utils.js";
import SHOP_DATA from "../shop-data.js";

// set up create context

export const CategoriesContext = createContext({
  categoriesMap: {},
});

// set up of import index.js
export const CategoriesProvider = ({ children }) => {
  const [categoriesMap, setCategoriesMap] = useState({});
  // find data and fetch into firebase
  useEffect(() => {
    addCollectionAndDocuments("categories", SHOP_DATA);
  }, []);
  //get data category from firebase
  useEffect(() => {
    const getCategoriesMap = async () => {
      const categoryMap = await getCategoriesAndDocuments("categories");
      setCategoriesMap(categoryMap);
    };

    getCategoriesMap();
  }, []);

  const value = { categoriesMap };
  return (
    <CategoriesContext.Provider value={value}>
      {children}
    </CategoriesContext.Provider>
  );
};
