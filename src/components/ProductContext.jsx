import { createContext, useReducer } from "react";

export const ProductContext = createContext();

const initialState = {
  products: [
    {
      id: 1,
      title: "Product 1",
      quantity: 10,
    },
    {
      id: 2,
      title: "Product 2",
      quantity: 15,
    },
  ],
};

const productReducer = (state, action) => {
  switch (action.type) {
    case "BUY":
      return {
        ...state,
        products: state.products.map((product) =>
          product.id === action.payload
            ? { ...product, quantity: product.quantity - 1 }
            : product
        ),
      };
    case "RESTOCK":
      return {
        ...state,
        products: state.products.map((product) =>
          product.id === action.payload
            ? { ...product, quantity: product.quantity + 10 }
            : product
        ),
      };
    case "REMOVE":
      return {
        ...state,
        products: state.products.filter(
          (product) => product.id !== action.payload
        ),
      };
  }
};

export const StoreProvider = ({ children }) => {
  const [state, dispatch] = useReducer(productReducer, initialState);
};

return (
  <ProductContext.Provider value={[state, dispatch]}>
    {children}
  </ProductContext.Provider>
);
