import React, { useContext } from "react";
import { StoreProvider, Store } from "./store";

const ReduxApp = () => {
  const { state, dispatch } = useContext(Store);
  const codeExample1 = `
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
  `;

  const codeExample2 = `
  import React, { useContext } from "react";
  import { StoreProvider, Store } from "./store";

  const App = () => {
    const { state, dispatch } = useContext(Store);
    return (
      <p>current theme: {state.theme}</p>
      <br />
      <button
        onClick={() =>
          dispatch({
            type: "CHANGE_THEME",
            payload: state.theme === "light" ? "dark" : "light"
          })
        }
      >
        change theme
      </button>
    )
  }

  const ReduxWrapper = () => {
    return (
      <StoreProvider>
        <App />
      </StoreProvider>
    );
  };
`;

  return (
    <div className="active-container">
      <div className="active-explanation">
        <h2>Redux Explanation</h2>
        <h4>
          Setup your store using <code>createContext()</code> and {""}
          <code>useReducer</code>
        </h4>
        <div className="code-container">
          <code>{codeExample1}</code>
        </div>
        <h4>
          Use <code>Store</code> and <code>StoreProvider</code> in your App
        </h4>
        <div className="code-container">
          <code>{codeExample2}</code>
        </div>
      </div>
      <div className="active-example">
        <h2>Redux Implementation</h2>
        <p>current theme: {state.theme}</p>
        <br />
        <button
          onClick={() =>
            dispatch({
              type: "CHANGE_THEME",
              payload: state.theme === "light" ? "dark" : "light"
            })
          }
        >
          change theme
        </button>
      </div>
    </div>
  );
};

const Redux = () => {
  return (
    <StoreProvider>
      <ReduxApp />
    </StoreProvider>
  );
};

export default Redux;
