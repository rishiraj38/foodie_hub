import React from "react";
import ReactDOM from "react-dom/client";

//React Element in JSX;
const heading = (
  <h1 className="head" id="heading">
    Namaste React using JSX
  </h1>
);
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);  //This is how we render react element

//React Functional Component
const red = <h2>Hello</h2>
const HeadingComponent = () =>{
  return <h1>Namaste React Functional Component</h1>
}
const Title = ()=>(
  <div>
    <h1>Namaste JSX</h1>
  </div>
)
//Component Composition
const HeadingComponent2 = () =>(
  <div>
    {Title ()} 
    <Title />
    {red}
    <h1>Namaste React functional Component</h1>
  </div>
)

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponent2 />); //this is how we render react functional component

// const heading = React.createElement(
//   "h1",
//   { id: "heading" },
//   "Hello World From React!"
// );

// console.log(heading); //returns object

// const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(heading);

// /* <div id = 'parent'>
//     <div id = 'child'>
//         <h1></h1>
//         <h2></h2>
//     </div>
// </div> */

// const parent = React.createElement(
//   "div",
//   { id: "parent" },[
//     React.createElement("div", { id: "child" }, [
//     React.createElement("h1", {}, "I am H1 tag "),
//     React.createElement("h2", {}, "I am H2 tag "),
//   ]),
//   React.createElement("div", { id: "child" }, [
//     React.createElement("h1", {}, "I am H1 tag "),
//     React.createElement("h2", {}, "I am H2 tag "),
//   ])
// ]);
// root.render(parent)
