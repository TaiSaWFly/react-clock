import React from "react";
import Clock from "./components/clock";
import * as utils from "./utils/utils";

function App() {
  const body = document.querySelector("body");
  body.style.background = utils.randomColor();
  return <Clock />;
}

export default App;
