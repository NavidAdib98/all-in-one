import React, { Component } from "react";

//components
import CoinsLanding from "./components/digital-currency/CoinsLanding";
import Weather from "./components/weather/Weather";
import Todos from "./components/todo-list/Todos";

class App extends Component {
  render() {
    return (
      <div>
        {/* <CoinsLanding /> */}
        {/* <Weather /> */}
        <Todos />
      </div>
    );
  }
}
export default App;
