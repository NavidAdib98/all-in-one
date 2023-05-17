import React, { useContext } from "react";
import { Card, Button } from "react-bootstrap";

//context
import { ToloListContext } from "../../contexts/todo-list/TodoListContextProvider";

const Todo = ({ id, tag, info }) => {
  const { todos, dispatch } = useContext(ToloListContext);
  const time = new Date(id).toLocaleString();
  const removeHandler = () => {
    dispatch({ type: "REMOVE-ITEM", payload: id });
  };

  return (
    <Card style={{ width: "18rem" }}>
      <Card.Body>
        <Card.Title>title</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">{time}</Card.Subtitle>
        <Card.Text>{info}</Card.Text>
        <Button onClick={removeHandler} variant="danger">
          X
        </Button>{" "}
      </Card.Body>
    </Card>
  );
};

export default Todo;
