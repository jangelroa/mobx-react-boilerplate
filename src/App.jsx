import React, { Component } from "react";
import { observer } from "mobx-react";
import DevTools from "mobx-react-devtools";
import { observable } from "mobx";

const appState = observable({
  count: 0
});

appState.increment = function() {
  this.count++;
};

appState.decrement = function() {
  this.count--;
};

@observer class Counter extends Component {
  render() {
    return (
      <div>
        Counter: {appState.count} <br />
        <button onClick={this.handleInc}>+</button>
        <button onClick={this.handleDec}>-</button>
        <DevTools />
      </div>
    );
  }

  handleInc = () => {
    appState.increment();
  };
  handleDec = () => {
    appState.decrement();
  };
}

@observer class App extends Component {
  render() {
    return (
      <div>
        <Counter />
      </div>
    );
  }
}

export default App;
