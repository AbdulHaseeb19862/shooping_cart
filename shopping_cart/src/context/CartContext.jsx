import { createContext, useContext, useReducer } from "react";
import { cartReducer } from "../reducer/cartReducer";

const initialState = {
  cartList: [],
  total: 0,
};

const CartContext = createContext(initialState);

export function CartProvider({ children }) {
  const [state, dispatch] = useReducer(cartReducer, initialState);
  const addToCart = (product) => {
    const updatedCartList = state.cartList.concat(product);
    updatedTotal(updatedCartList);
    dispatch({
      type: "ADD_TO_CART",
      payload: {
        products: updatedCartList,
      },
    });
  };

  const removeToCart = (product) => {
    const updatedCartList = state.cartList.filter(
      (current) => current.id !== product.id
    );
    updatedTotal(updatedCartList);
    dispatch({
      type: "REMOVE_TO_CART",
      payload: {
        products: updatedCartList,
      },
    });
  };

  const updatedTotal = (products) => {
    let total = 0;
    products.forEach((product) => (total = total + product.rate));

    dispatch({
      type: "UPDATED_TOTAL",
      payload: { total },
    });
  };

  const value = {
    cartList: state.cartList,
    total: state.total,
    addToCart,
    removeToCart,
    updatedTotal,
  };
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export const useCart = () => {
  const context = useContext(CartContext);
  return context;
};
