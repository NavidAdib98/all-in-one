import React, { useContext, useEffect } from "react";

//context
import { ToloListContext } from "../../contexts/todo-list/TodoListContextProvider";

//components
import Add from "./Add";
import Todo from "./Todo";

//style
import styles from "./Todos.module.css";

const Todos = () => {
  const { todos, dispatch } = useContext(ToloListContext);
  useEffect(() => {
    dispatch({ type: "FETCH", payload: {} });
  }, []);
  return (
    <div className={styles.background}>
      <Add />
      <div
        style={{
          overflowY: "scroll",
          display: "flex",
          justifyContent: "left",
          flexWrap: "wrap",
          backgroundColor: "rgba(141, 141, 141, 0.634)",
          margin: "10px",
          borderRadius: "10px",
        }}
      >
        {todos.map((todo) => (
          <Todo id={todo.id} info={todo.info} tag={todo.tag} key={todo.id} />
        ))}
      </div>
    </div>
  );
};

export default Todos;
