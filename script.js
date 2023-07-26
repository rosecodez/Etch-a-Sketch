// Main container

function createDiv() {
  // create the main div element
  const mainDiv = document.createElement("div");
  // add the main div into DOM
  document.body.appendChild(mainDiv);
  // assign ID to the div element
  mainDiv.setAttribute("id","mainDiv");
}
createDiv();

// Child containers
function createChild() {
  // create the child div element
  const child = document.createElement("div");
  // add the child div under mainDiv
  mainDiv.appendChild(child);
  // assign class to the child div
  child.setAttribute("id", "child");
}
createChild();


//Loop 16 times

function createLoop() {
  for (let i = 0; i < 15; i++) {
    createChild();

  }
}
createLoop();