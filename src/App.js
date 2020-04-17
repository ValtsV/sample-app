import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Person from "./Person/Person";

class App extends Component {
  state = {};
  render() {
    return (
      <div>
        <h1>Something</h1>
        <Person />
      </div>
    );
  }
}

export default App;
