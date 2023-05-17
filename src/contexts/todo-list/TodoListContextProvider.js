import React, { useReducer } from "react";

export const ToloListContext = React.createContext();
const todoReducer = (prevS, action) => {
  switch (action.type) {
    case "ADD-TODO":
      console.log(prevS);
      return prevS;
  }
};

const TodoListContextProvider = ({ children }) => {
  const [todos, dispatch] = useReducer(todoReducer, "");
  return (
    <>
      <ToloListContext.Provider value={{ todos, dispatch }}>
        {children}
      </ToloListContext.Provider>
    </>
  );
};

export default TodoListContextProvider;
