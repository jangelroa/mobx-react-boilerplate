import React from "react";
import { render } from "react-dom";
import { AppContainer } from "react-hot-loader";
import AppWrapper, { t } from "./AppWrapper";

render(
  <AppContainer>
    <AppWrapper />
  </AppContainer>,
  document.getElementById("root")
);

if (module.hot) {
  module.hot.accept("./AppWrapper", () => {
    const NextApp = require("./AppWrapper").default;

    render(
      <AppContainer>
        <NextApp />
      </AppContainer>,
      document.getElementById("root")
    );
  });
}
