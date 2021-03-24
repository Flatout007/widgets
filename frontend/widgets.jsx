import React from "react";
import ReactDOM from "react-dom";

import Clock from "./clock";
import Tab from "./tab";

document.addEventListener("DOMContentLoaded", (e) => {
  let Root = props => {

    const jsObj = [
      {title: 'title1', content: 'content1'},
      {title: 'title2', content: 'content2'},
      {title: 'title3', content: 'content3'}
    ];

    const objReturn = () => {
      return jsObj;
    }

    return (
      <div id='root-content'>
        <div id="hello">
          <h1>Hello</h1>
        </div>
        <Clock />
        <Tab obj={`${objReturn()}`}/>
      </div>
    )
  }

  const hook = document.getElementById("root");
  ReactDOM.render(<Root />, hook);
})