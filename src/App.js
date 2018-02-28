import React, { Component } from "react";
import Button from "./components/Button";

class App extends Component {
  render() {
    return (
      <div>
        <h1>Hello Cosmos!</h1>
        <Button text="Button Text" bg="green" />
      </div>
    );
  }
}

export default App;
