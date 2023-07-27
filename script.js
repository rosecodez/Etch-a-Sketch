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

  // Events for hovering over the squares
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

//Event to change square color when the cursor moves over different squares
childDiv.addEventListener(
  "mouseover",
  (event) => {
    // initial color
    event.target.style.background = "red";

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

function createButton() {

}