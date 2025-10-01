import React from "react";
import ReactDOM from "react-dom/client";
import { jsx } from "react/jsx-runtime";

// const heading = React.createElement(
//   "h1",
//   { id: "heading" },
//   "Hello from react!"
// );

// const complexElement = React.createElement(
//   "div",
//   { id: "parent" },
//   React.createElement("div", { id: "child" }, [
//     React.createElement("h1", { id: "grandchild", key: 1 }, "Grandchild"),
//   ])
// );

// const userProfile = (
//   <div>
//     <div>Name : Rushi</div>
//     <div>Age : 24</div>
//     <div>Gender : Male</div>
//     <div>Qualification : BE (Computer)</div>
//   </div>
// );

const Title = () => <h1>User profile</h1>;

const FunComp = () => {
  const user = {
    name: "Rushi",
    age: 24,
    gender: "M",
    Qualification: "BE (Comp)",
  };

  return (
    <>
      <Title />
      <div>
        <div>Name : {user.name}</div>
        <div>Age : {user.age}</div>
        <div>Gender : {user.gender}</div>
        <div>Qualification : {user.Qualification}</div>
      </div>
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<FunComp />);
