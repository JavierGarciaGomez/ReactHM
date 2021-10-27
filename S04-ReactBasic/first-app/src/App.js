import logo from "./logo.svg";
import "./App.css";

import React, { Component } from "react";
import { Button } from "./Components/Button";

class App extends Component {
  state = {};
  printGreeting = () => {
    this.setState({ valor: 2 });
    console.log(this.state);
  };
  render() {
    const printGreeting2 = () => {
      this.setState({ valor: 2 });
      console.log(this.state);
    };
    console.log(this.state);
    return (
      <div>
        <button className={`${this.state.valor}`} onClick={printGreeting2}>
          Aprieta
        </button>
        <Button />
      </div>
    );
  }
}

export default App;
