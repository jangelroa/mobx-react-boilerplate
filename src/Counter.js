import React, { Component } from "react";
import { observer } from "mobx-react";
import DevTools from "mobx-react-devtools";
import { observable } from "mobx";

@observer class Counter extends Component {
  @observable count = 0;
  render() {
    return (
      <div>
        Counter: {this.count} <br />
        <button onClick={this.handleInc}>+</button>
        <button onClick={this.handleDec}>-</button>
      </div>
    );
  }

  handleInc = () => {
    console.log("INC");
    this.count++;
  };
  handleDec = () => {
    console.log("DEC");
    this.count--;
  };

  onReset = () => {
    this.props.appState.resetTimer();
  };
}

export default Counter;
