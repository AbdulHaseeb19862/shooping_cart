export const cartReducer = (state, action) => {
  const { payload, type } = action;

  switch (type) {
    case "ADD_TO_CART":
      return { ...state, cartList: payload.products };

    case "REMOVE_TO_CART":
      return { ...state, cartList: payload.products };

    case "UPDATED_TOTAL":
      return { ...state, total: payload.total };

    default:
      throw new Error("No Case Found In Reducer");
  }
};
