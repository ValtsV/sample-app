import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Person from "./Person/Person";
import UserInput from "./User/UserInput";
import UserOutput from "./User/UserOutput";

class App extends Component {
  state = {
    usernames: ["John", "Silvia", "Alex"],
    inputValue: "",
  };

  handleChange = (e) => {
    const name = e.target.value;
    // const newState = this.state.map((u) => (u = name));
    this.setState({
      usernames: [name, "Silvia", "Alex"],
    });
  };

  render() {
    return (
      <div>
        <UserInput onChange={this.handleChange} value={this.state.inputValue} />
        <UserOutput username={this.state.usernames[0]} />
        <UserOutput username={this.state.usernames[1]} />
        <UserOutput username={this.state.usernames[2]} />
      </div>
    );
  }
}

export default App;
