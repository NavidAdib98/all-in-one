import React, { useState, useContext } from "react";

//context
import { ToloListContext } from "../../contexts/todo-list/TodoListContextProvider";

//Bootstrap
import {
  Form,
  Container,
  Row,
  Col,
  Button,
  ButtonGroup,
  ToggleButton,
} from "react-bootstrap";

const Add = () => {
  const { todos, dispatch } = useContext(ToloListContext);
  const [radioValue, setRadioValue] = useState("1");
  const [info, setInfo] = useState("");
  const radios = [
    { name: "Home", value: "1" },
    { name: "Office", value: "2" },
    { name: "School", value: "3" },
  ];
  const inputHandler = (event) => {
    const info = event.target.value;
    setInfo(info);
  };
  const addHandler = () => {
    let now = new Date();
    let payload = { id: now.getTime(), tag: radioValue, info: info };
    dispatch({ type: "ADD-TODO", payload: payload });
  };
  return (
    <Container>
      <Row className="justify-content-md-center">
        <Col lg="4">
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>Add your task hear</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              onChange={inputHandler}
              value={info}
            />
          </Form.Group>
        </Col>
      </Row>
      <Row className="justify-content-md-center">
        <Col lg="4">
          <ButtonGroup>
            {radios.map((radio, idx) => (
              <ToggleButton
                key={idx}
                id={`radio-${idx}`}
                type="radio"
                variant={
                  idx == 0
                    ? "outline-success"
                    : idx == 1
                    ? "outline-info"
                    : "outline-danger"
                }
                name="radio"
                value={radio.value}
                checked={radioValue === radio.value}
                onChange={(e) => setRadioValue(e.currentTarget.value)}
              >
                {radio.name}
              </ToggleButton>
            ))}
          </ButtonGroup>
          <Button variant="primary" onClick={addHandler}>
            +
          </Button>{" "}
        </Col>
      </Row>
    </Container>
  );
};

export default Add;
