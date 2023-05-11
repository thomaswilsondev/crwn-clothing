import { createContext, useState } from "react";

import PRODUCTS from "../shop-data.json";

// set up create context

export const ProductsContext = createContext({
  products: [],
});

// set up of import index.js
export const ProductsProvider = ({ children }) => {
  const [products, setProducts] = useState(PRODUCTS);
  const value = { products };
  return (
    <ProductsContext.Provider value={value}>
      {children}
    </ProductsContext.Provider>
  );
};
