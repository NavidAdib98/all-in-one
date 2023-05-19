import React from "react";
import {
  Container,
  Image,
  Row,
  Col,
  Table,
  Card,
  Carousel,
} from "react-bootstrap";
import MyImg from "../../assets/me.jpeg";
import TehranImg from "../../assets/tehranUni.png";
import SharifImg from "../../assets/sharifUni.png";
import weatherGif from "../../images/weather.gif";
import CoinsGif from "../../images/coins.gif";
import TodoGif from "../../images/todos.gif";
import { MdEmail, MdPermPhoneMsg } from "react-icons/md";

import styles from "./Homepage.module.css";
import { Link } from "react-router-dom";

const Homepage = () => {
  return (
    <>
      <Container
        fluid
        style={{
          backgroundColor: "#979797",
          padding: "10px",
          marginTop: "",
        }}
      >
        <Row>
          <Col md={3}>
            <Image src={MyImg} style={{ width: "300px" }} roundedCircle />
          </Col>
          <Col md={9}>
            <Row>
              <h2 style={{ fontFamily: "sans-serif", fontSize: "5rem" }}>
                Navid Adib
              </h2>
              <p style={{ fontSize: "1.5rem" }}>
                to be a{" "}
                <span
                  style={{
                    color: "#761313",
                    fontFamily: "fantasy",
                    fontSize: "1.5rem",
                    fontWeight: "bold",
                  }}
                >
                  frontend
                </span>{" "}
                web developer
              </p>
              <div>
                <div className={styles.pill}>React</div>
                <div className={styles.pill}>React Native</div>
                <div className={styles.pill}>Vue</div>
              </div>
            </Row>
            <Row style={{ marginTop: "20px" }}>
              <Col>
                <div className={styles.contact}>
                  <MdEmail />
                  <span>: nadib1998@gmail.com</span>
                </div>
                <div className={styles.contact}>
                  <MdPermPhoneMsg />
                  <span>: 0936 020 3244</span>
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
      <Container style={{ marginTop: "20px" }}>
        <Row style={{ overflowX: "auto", borderRadius: "10px" }}>
          <Table striped style={{ padding: "5px" }}>
            <tbody>
              <tr>
                <td style={{ fontWeight: "bold" }}>Age:</td>
                <td>24 years old</td>
                <td style={{ fontWeight: "bold" }}>Home town:</td>
                <td>Tehran, Iran</td>
              </tr>
              <tr>
                <td style={{ fontWeight: "bold" }}>Master University:</td>
                <td>
                  University of Tehran, medical Engineering{" "}
                  <Image
                    src={TehranImg}
                    style={{ width: "50px" }}
                    roundedCircle
                  />
                </td>
                <td style={{ fontWeight: "bold" }}>Email:</td>
                <td>nadib1998@gmail.com</td>
              </tr>
              <tr>
                <td style={{ fontWeight: "bold" }}>Bachelor Degree:</td>
                <td>
                  Sharif University of Technology, Electrical Engineering{" "}
                  <Image
                    src={SharifImg}
                    style={{ width: "50px" }}
                    roundedCircle
                  />
                </td>
                <td style={{ fontWeight: "bold" }}>Phone & WhatsApp:</td>
                <td>989360203244</td>
              </tr>
            </tbody>
          </Table>
        </Row>
        <Card>
          <Card.Header>Demo</Card.Header>
          <Row style={{ marginTop: "10px" }}>
            <Col md={4}>
              <Card
                className={styles.app}
                as={Link}
                to="/weather"
                style={{
                  textDecoration: "none",
                  color: "inherit",
                  margin: "5px",
                }}
              >
                <Card.Img variant="top" src={weatherGif} />
                <Card.Body>
                  <Card.Title>Weather</Card.Title>
                  <Card.Text>
                    Enter the name of your desired city and discover its current
                    weather conditions.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4}>
              <Card
                className={styles.app}
                as={Link}
                to="/coins"
                style={{
                  textDecoration: "none",
                  color: "inherit",
                  margin: "5px",
                }}
              >
                <Card.Img variant="top" src={CoinsGif} />
                <Card.Body>
                  <Card.Title>Digital Concurrency </Card.Title>
                  <Card.Text>
                    Explore various digital currencies and their current market
                    values
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4}>
              <Card
                className={styles.app}
                as={Link}
                to="/todo"
                style={{
                  textDecoration: "none",
                  color: "inherit",
                  margin: "5px",
                }}
              >
                <Card.Img variant="top" src={TodoGif} />
                <Card.Body>
                  <Card.Title>Todo list </Card.Title>
                  <Card.Text>
                    Type your task with their priority. dont worry. they are{" "}
                    <span style={{ color: "#761313" }}>persistent</span>. add or
                    delete them.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Card>

        <Card style={{ marginTop: "20px" }}>
          <Card.Header>Software Skills</Card.Header>
          <Card.Body>
            <Card.Title>React</Card.Title>
            <Card.Text>
              Class & functional component – styled component – conditional
              rendering – component life cycle – pure component & memo – HOC –
              SPA version (5,6) hooks (useState, useReducer, useContext,
              useEffect, useCallback, useRef, …, custom hooks)
            </Card.Text>
            <Card.Title>Redux</Card.Title>
            <Card.Text>
              store-action-reducer middleware (logger, thunk, …)
            </Card.Text>
            <Card.Title>Others</Card.Title>
            <Card.Text>
              React Native: stylesheet, Navigation, redux, …
            </Card.Text>
            <Card.Text>Vue js (beginner)</Card.Text>
            <Card.Text>HTML CSS Js (ES6) Bootstrap</Card.Text>
            <Card.Text>REST API, GraphQl, SQL, git, jira</Card.Text>
            <Card.Text>Python: numpy, pandas, keras, tensorflow, … </Card.Text>
            <Card.Text>
              Deep learning: object detection, tracking, classification,
              segmentation, feature extraction
            </Card.Text>
          </Card.Body>
        </Card>
      </Container>
    </>
  );
};

export default Homepage;
