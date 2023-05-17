import React, { Component } from "react";

//components
import CoinsLanding from "./components/digital-currency/CoinsLanding";
import Weather from "./components/weather/Weather";
import Todos from "./components/todo-list/Todos";
import TodoListContextProvider from "./contexts/todo-list/TodoListContextProvider";

class App extends Component {
  render() {
    return (
      <div>
        {/* <CoinsLanding /> */}
        {/* <Weather /> */}
        <TodoListContextProvider>
          <Todos />
        </TodoListContextProvider>
      </div>
    );
  }
}
export default App;
