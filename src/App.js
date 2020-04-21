import React, { Component } from "react";
import "./App.css";

import ValidateComponent from "./Validate/Validate";
import CharComponent from "./Validate/CharComponent";

class App extends Component {
  state = {
    textareaValue: "",
    length: 0,
    showWarning: false,
    switch: false,
  };

  onChangeHandler = (event) => {
    console.log(event.target.value);
    let textareaValue = [...this.state.textareaValue];

    textareaValue = event.target.value;
    let length = textareaValue.length;
    this.setState({ textareaValue: textareaValue, length: length });
  };

  showList = () => {
    const switchValue = this.state.switch;
    this.setState({ switch: !switchValue });
  };

  deleteThis = (index) => {
    let text = [...this.state.textareaValue];
    text.splice(index, 1);
    const text2 = text.join("");
    console.log(text2);
    this.setState({ textareaValue: text2 });
  };

  render() {
    const array = [...this.state.textareaValue];
    const list = array.map((el, index) => (
      <CharComponent
        key={index}
        value={el}
        click={() => this.deleteThis(index)}
      />
    ));

    return (
      <React.Fragment>
        <button className="btn btn-danger m-3" onClick={this.showList}>
          Something
        </button>
        <textarea
          className="m-1"
          onChange={this.onChangeHandler}
          value={this.state.textareaValue}
          length={this.state.length}
        ></textarea>
        <span className="m-2">{this.state.length}</span>
        <ValidateComponent
          length={this.state.length}
          show={this.state.showWarning}
        />
        {this.state.switch ? <ul>{list}</ul> : null}
      </React.Fragment>
    );
  }
}

export default App;
