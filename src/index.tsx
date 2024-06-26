import React from "react";
import * as ReactDOM from "react-dom";
import "./index.scss";
import { Docs } from "./docs/Docs";
import reportWebVitals from "./reportWebVitals";

const root = document.getElementById("root") as HTMLElement;
ReactDOM.render(
  <React.StrictMode>
    <Docs />
  </React.StrictMode>,
  root
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
