import React, { Component } from "react";

class UserInput extends Component {
  state = {};
  render() {
    return <input onChange={this.props.onChange}></input>;
  }
}

export default UserInput;
