import React, { Component } from "react";
import { observer } from "mobx-react";
import DevTools from "mobx-react-devtools";
import TodoList from "./TodoList";
import store from "./TodoStore";

@observer class App extends Component {
  render() {
    return (
      <div>
        <TodoList store={store} />
        <DevTools />
      </div>
    );
  }

  onReset = () => {
    this.props.appState.resetTimer();
  };
}

export default App;
