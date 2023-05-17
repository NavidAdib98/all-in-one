import React, { useReducer } from "react";

const localStorageKey = "todos";

export const ToloListContext = React.createContext();
const todoReducer = (prevS, action) => {
  let localState = window.localStorage.getItem(localStorageKey);
  localState = localState ? JSON.parse(localState) : [];
  switch (action.type) {
    case "FETCH":
      return localState;
    case "ADD-TODO":
      localState = [...localState, action.payload];
      window.localStorage.setItem(localStorageKey, JSON.stringify(localState));
      return localState;
    case "REMOVE-ITEM":
      let state = prevS.filter((item) => item.id !== action.payload);
      window.localStorage.setItem(localStorageKey, JSON.stringify(state));
      return state;
  }
};

const TodoListContextProvider = ({ children }) => {
  const [todos, dispatch] = useReducer(todoReducer, []);
  return (
    <>
      <ToloListContext.Provider value={{ todos, dispatch }}>
        {children}
      </ToloListContext.Provider>
    </>
  );
};

export default TodoListContextProvider;
