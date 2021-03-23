import React from "react";
import ReactDOM from "react-dom";

import Clock from "./clock";

document.addEventListener("DOMContentLoaded", (e) => {
  let Root = props => {
    return (
      <div>
        <h1>Hello</h1>
        <Clock />
      </div>
    )
  }

  const hook = document.getElementById("root");
  ReactDOM.render(<Root />, hook);
})