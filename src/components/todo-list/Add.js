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
    { name: "normal", value: "1" },
    { name: "important", value: "2" },
    { name: "forced", value: "3" },
  ];
  const inputHandler = (event) => {
    const info = event.target.value;
    setInfo(info);
  };
  const addHandler = () => {
    let now = new Date();
    if (info.replace(/\s/g, "").length) {
      let payload = { id: now.getTime(), tag: radioValue, info: info };
      dispatch({ type: "ADD-TODO", payload: payload });
      setInfo("");
    } else {
      alert("please add your task before submitting");
    }
  };
  return (
    <Container>
      <Row className="justify-content-md-center">
        <Col lg="6">
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Control
              style={{ textAlign: "left", marginTop: "10px" }}
              as="textarea"
              rows={3}
              onChange={inputHandler}
              value={info}
              placeholder="Add your task here ..."
            />
          </Form.Group>
        </Col>
      </Row>
      <Row className="justify-content-md-center">
        <Col>
          <ButtonGroup>
            {radios.map((radio, idx) => (
              <ToggleButton
                style={{ margin: "2px" }}
                key={idx}
                id={`radio-${idx}`}
                type="radio"
                variant={
                  idx == 0
                    ? "outline-success"
                    : idx == 1
                    ? "outline-warning"
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
          <Button
            variant="secondary"
            onClick={addHandler}
            style={{ margin: "10px 25px" }}
          >
            Add your todo hear
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default Add;
