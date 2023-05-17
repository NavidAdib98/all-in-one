import React, { useReducer } from "react";

const localStorageKey = "todos";

export const ToloListContext = React.createContext();
const todoReducer = (prevS, action) => {
  switch (action.type) {
    case "ADD-TODO":
      let localState = window.localStorage.getItem(localStorageKey);
      localState = localState ? JSON.parse(localState) : [];
      localState = [...localState, action.payload];
      console.log(localState);
      window.localStorage.setItem(localStorageKey, JSON.stringify(localState));
      return localState;
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
