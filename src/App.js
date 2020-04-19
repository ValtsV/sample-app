import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Person from "./Person/Person";
import UserInput from "./User/UserInput";
import UserOutput from "./User/UserOutput";

class App extends Component {
  state = {
    usernames: ["John", "Silvia", "Alex"],
    showDiv: false,
  };

  handleChange = (e) => {
    const name = e.target.value;
    // const newState = this.state.map((u) => (u = name));
    this.setState({
      usernames: [name, "Silvia", "Alex"],
    });
  };

  showDivFunc = () => {
    const doesShow = this.state.showDiv;
    this.setState({ showDiv: !doesShow });
  };

  render() {
    return (
      <React.Fragment>
        <button className="btn btn-danger m-3" onClick={this.showDivFunc}>
          Something
        </button>
        {this.state.showDiv ? (
          <div>
            <UserInput onChange={this.handleChange} />
            <UserOutput username={this.state.usernames[0]} />
            <UserOutput username={this.state.usernames[1]} />
            <UserOutput username={this.state.usernames[2]} />
          </div>
        ) : null}
      </React.Fragment>
    );
  }
}

export default App;
