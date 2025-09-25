import React from "react";
import ReactDOM from "react-dom/client";

const heading = React.createElement(
  "h1",
  { id: "heading" },
  "Hello from react!"
);

const complexElement = React.createElement(
  "div",
  { id: "parent" },
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", { id: "grandchild", key: 1 }, "Grandchild"),
  ])
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(complexElement);
