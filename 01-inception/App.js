const heading = React.createElement(
    "h1",
    {id: "heading", xyz: "abc"},
    "Hello World from React!"
);
console.log(heading.props);
console.log(heading.ref);
console.log(heading.key);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);