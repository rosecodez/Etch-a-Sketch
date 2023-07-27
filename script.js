// Main container
function createDiv() {
  const mainDiv = document.createElement("div");
  document.body.appendChild(mainDiv);
  mainDiv.setAttribute("id","mainDiv");
}
createDiv();

// Grid container
function createGrid() {
  const mainGrid = document.createElement("div");
  mainDiv.appendChild(mainGrid);
  mainGrid.setAttribute("id","mainGrid");
}
createGrid();

// Function to create individual square and change its color while hovering
function createChild() {
  const childDiv = document.createElement("div");
  mainGrid.appendChild(childDiv);
  childDiv.setAttribute("id", "childDiv");

  // Event for hovering over the squares
  // This will leave a 'trail' after the cursor passes over the squares

  //Event to change color when the cursor enters a square
  childDiv.addEventListener(
    "mouseenter",
    (event) => {
      // initial color
      event.target.style.background = "black";

      // reset color delay
      setTimeout(() => {
        event.target.style.background = "";
      }, 500);
    },
    false,
  );
}

//Function to loop 256(16x16) times the square
function createLoop() {
  for (let i = 0; i < 256; i++) {
    createChild();
  }
}
createLoop();
// Function to create button
function createButton() {
  const button = document.createElement("button");
  mainDiv.appendChild(button);
  button.setAttribute("id","button");
  button.textContent = "Change grid size";

  // event to change button color
  button.addEventListener(
    "mouseenter",
    (event) => {
      // initial color
      event.target.style.background = "#d9ed92";

      // reset color delay
      setTimeout(() => {
        event.target.style.background = "";
      }, 500);
    },
    false,
  );
}
createButton();