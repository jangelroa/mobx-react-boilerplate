import React, { Component } from "react";
import { observer } from "mobx-react";
import DevTools from "mobx-react-devtools";
import { observable } from "mobx";
import Counter from "./Counter";

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
