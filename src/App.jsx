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
        Counter: {this.props.store.count} <br />
        <button onClick={this.handleInc}>+</button>
        <button onClick={this.handleDec}>-</button>
      </div>
    );
  }

  handleInc = () => {
    this.props.store.increment();
  };
  handleDec = () => {
    this.props.store.decrement();
  };

  onReset = () => {
    this.props.appState.resetTimer();
  };
}

@observer class App extends Component {
  render() {
    return (
      <div>
        <Counter store={appState} />
      </div>
    );
  }
}

export default App;
