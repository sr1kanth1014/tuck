import React from "react";
import { render } from "react-dom";
import App from "./src/App";
import "./src/global.css";

render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.querySelector(".root")
);
