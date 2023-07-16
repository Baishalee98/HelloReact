import React from "react"
import ReactDOM from "react-dom";


const parent = React.createElement(
    "div",
    {id: "parent"},
    [React.createElement(
        "div",
        {id: "child1"},
        [React.createElement("h1",{},"Hello React!"),
        React.createElement("h2",{},"I am Baishalee")]
    ),
    React.createElement(
        "div",
        {id: "child2"},
        [React.createElement("h1",{},"Hello React!"),
        React.createElement("h2",{},"I am Baishalee")]
    )]
);


const heading = React.createElement(
    "h1",
    {id: "heading", xyz: "abc"},
    "Hello World from React!"
);
console.log(heading.props);
console.log(heading.ref);
console.log(heading.key);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);