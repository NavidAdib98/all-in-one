import React, { useContext } from "react";
import { Card, Button, Badge } from "react-bootstrap";

//context
import { ToloListContext } from "../../contexts/todo-list/TodoListContextProvider";

const Todo = ({ id, tag, info }) => {
  const { todos, dispatch } = useContext(ToloListContext);
  const time = new Date(id).toLocaleString();
  const removeHandler = () => {
    dispatch({ type: "REMOVE-ITEM", payload: id });
  };
  const tags = {
    1: { name: "normal", variant: "success" },
    2: { name: "important", variant: "warning" },
    3: { name: "forced", variant: "danger" },
  };

  return (
    <Card style={{ width: "18rem", margin: "10px" }}>
      <Card.Body style={{ textAlign: "left" }}>
        <Card.Subtitle
          style={{ textAlign: "left" }}
          className="mb-2 text-muted"
        >
          {time}
        </Card.Subtitle>
        <Card.Text
          style={{
            textAlign: "left",
            height: "70px",
            overflowY: "scroll",
            backgroundColor: "#c6c4c4",
            borderRadius: "5px",
          }}
        >
          {info}
        </Card.Text>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <Badge pill bg={tags[tag].variant}>
            {tags[tag].name}
          </Badge>
          <Button
            onClick={removeHandler}
            variant="outline-secondary"
            style={{ padding: "0px 2px", fontSize: "13px" }}
          >
            remove
          </Button>
        </div>
      </Card.Body>
    </Card>
  );
};

export default Todo;
