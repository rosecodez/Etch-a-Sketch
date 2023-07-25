// Main container

// create the main div element
const mainDiv = document.createElement("div");
// add the main div into DOM
document.body.appendChild(mainDiv);
// assign ID to the div element
mainDiv.setAttribute("id","mainDiv");


// Child containers

// create the child div element
const child = document.createElement("div");
// add the child div under mainDiv
mainDiv.appendChild(child);
// assign class to the child div
child.setAttribute("class", "child");