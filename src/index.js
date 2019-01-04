import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import * as serviceWorker from "./serviceWorker";
import "bootstrap/dist/css/bootstrap.css";

ReactDOM.render(
  //class attribute also working, but React is giving warning
  //better to use className, it conver to class in real HTML
  React.createElement(
    "ul",
    { className: "list-group" },
    React.createElement("li", { className: "list-group-item active" }, "George")
  ),
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
