import React, { createContext, useReducer } from "react";

const initialState = {
  theme: "light"
};

const reducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case "CHANGE_THEME":
      return {
        ...state,
        theme: payload
      };
    default:
      return state;
  }
};

export const Store = createContext();

export const StoreProvider = props => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const value = { state, dispatch };
  return <Store.Provider value={value}>{props.children}</Store.Provider>;
};
