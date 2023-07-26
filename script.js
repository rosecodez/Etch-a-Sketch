// Main container
function createDiv() {
  const mainDiv = document.createElement("div");
  document.body.appendChild(mainDiv);
  mainDiv.setAttribute("id","mainDiv");
}
createDiv();

// Child containers
function createChild() {
  const childDiv = document.createElement("div");
  mainDiv.appendChild(childDiv);
  childDiv.setAttribute("id", "childDiv");
}
createChild();

//Loop 16 times
function createLoop() {
  for (let i = 0; i < 255; i++) {
    createChild();
  }
}
createLoop();