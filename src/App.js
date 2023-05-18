import React, { Component } from "react";
import { Routes, Route, Navigate } from "react-router-dom";

//components
import CoinsLanding from "./components/digital-currency/CoinsLanding";
import Weather from "./components/weather/Weather";
import Todos from "./components/todo-list/Todos";
import TodoListContextProvider from "./contexts/todo-list/TodoListContextProvider";
import MyNavbar from "./components/MyNavbar";
import Homepage from "./components/HomePage/Homepage";

class App extends Component {
  render() {
    return (
      <div>
        <MyNavbar />

        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/weather" element={<Weather />} />
          <Route
            path="/todo"
            element={
              <TodoListContextProvider>
                <Todos />
              </TodoListContextProvider>
            }
          />
          <Route path="/coins" element={<CoinsLanding />} />
          <Route path="/*" element={<Navigate to="/" />} />
        </Routes>
      </div>
    );
  }
}
export default App;
