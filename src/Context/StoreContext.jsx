import { createContext, useState } from "react";
import { food_list } from "../assets/assets";

export const StoreContext = createContext(null);

const StoreContextProvider = ({ children }) => {
  const [cartItems, serCartItems] = useState({});

  const addToCart = (itemId) => {
    if (!cartItems) {
    }
  };

  const ContextValue = {
    food_list,
  };
  return (
    <StoreContext.Provider value={ContextValue}>
      {children}
    </StoreContext.Provider>
  );
};

export default StoreContextProvider;
