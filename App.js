/*
<div id="parent">
   <div id="child">
       <h1>I'm h1 tag</h1>
   </div>
</div>
*/
// const heading= React.createElement("h1",{id:"heading"},"Hello World from React");
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);
// console.log(heading)

const parent=React.createElement("div",{id:"parent"},React.createElement("div",{id:"child"},React.createElement("h1",{},"I'm a h1 tag")));
const heading1= ReactDOM.createRoot(document.getElementById("root"));
heading1.render(parent);
console.log(parent);