import React, { useContext, useEffect } from "react";

//context
import { ToloListContext } from "../../contexts/todo-list/TodoListContextProvider";

//components
import Add from "./Add";
import Todo from "./Todo";

const Todos = () => {
  const { todos, dispatch } = useContext(ToloListContext);
  useEffect(() => {
    dispatch({ type: "FETCH", payload: {} });
  }, []);
  return (
    <>
      <Add />
      {todos.map((todo) => (
        <Todo id={todo.id} info={todo.info} tag={todo.tag} key={todo.id} />
      ))}
    </>
  );
};

export default Todos;
