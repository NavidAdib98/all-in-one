import React from "react";

//components
import Add from "./Add";
import TodoListContextProvider from "../../contexts/todo-list/TodoListContextProvider";

const Todos = () => {
  return (
    <>
      <TodoListContextProvider>
        <Add />
      </TodoListContextProvider>
    </>
  );
};

export default Todos;
