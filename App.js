import React from 'react';
import ReactDOM from 'react-dom/client';

const parent = React.createElement("div", { id: "parent" }, [
    React.createElement("div",{ id:"child" },[
        React.createElement("h1",{ color:"blue" },"I am an h1 tag"),
        React.createElement("h2",{ color:"red" },"I am an h2 tag")
    ]),
    React.createElement("div",{ id:"child2" },[
        React.createElement("h1",{ color:"green" },"I am an h1 tag"),
        React.createElement("h2",{ color:"grey" },"I am an h2 tag")
    ]),
]);

console.log(parent)
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
