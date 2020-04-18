import React, { Component } from "react";

class UserOutput extends Component {
  state = {};

  render() {
    return (
      <div>
        {this.props.username}
        <p>Some Paragraph 1</p>
        <p>Some Paragraph 2</p>
        <p>Some Paragraph 3</p>
      </div>
    );
  }
}

export default UserOutput;
