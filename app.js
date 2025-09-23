const heading = React.createElement(
  "h1",
  { id: "heading" },
  "Hello from react!"
);

const complexElement = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child" }, [
    "Child",
    React.createElement("h1", { id: "grandchild" }, "Grandchild"),
  ]),
  React.createElement("div", { id: "child" }, [
    "Child",
    React.createElement("h1", { id: "grandchild" }, "Grandchild"),
  ]),
]);
console.log(complexElement);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(complexElement);
