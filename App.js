const heading=React.createElement("div",{id:"parent"},
React.createElement("h1",{id:"children"},
[
    React.createElement("h1",{id:"children"},"child1"),
    React.createElement("h1",{id:"children"}, "child2")
])

);
// heading is a react element or an object
const root=ReactDOM.createRoot(document.getElementById("root"))
root.render(heading)