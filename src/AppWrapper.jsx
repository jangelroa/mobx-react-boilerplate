import { observable, computed } from "mobx";
import { observer } from "mobx-react";
import React, { Component } from "react";
import DevTools from "mobx-react-devtools";

export const t = new class Temperature {
  @observable unit = "C";
  @observable temperatureCelsius = 25;

  @computed get temperatureKelvin() {
    console.log("Calculating Kelvin");
    return this.temperatureCelsius * (9 / 5) + 32;
  }

  @computed get temperatureFahrenheit() {
    console.log("Calculating Fahrenheit");
    return this.temperatureCelsius + 273.15;
  }

  @computed get temperature() {
    console.log("Calculating temperature");
    switch (this.unit) {
      case "K":
        return this.temperatureKelvin + "°K";
      case "F":
        return this.temperatureFahrenheit + "°F";
      case "C":
        return this.temperatureCelsius + "°C";
    }
  }
}();

window.t = t;

const App = observer(({ temperature }) => (
  <div>
    {temperature.temperature}
    <DevTools />
  </div>
));

class AppWrapper extends Component {
  render() {
    return <App temperature={t} />;
  }
}

export default AppWrapper;
