// All the divs are created through DOM
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
  childDiv.addEventListener(
    "mouseenter",
    (event) => {
      event.target.style.background = "black";
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
  // create button through DOM
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
    },
  );

  // event onclick to get user's value to change grid through prompt
  button.addEventListener("click", (event) => {
    // prompt
    userInput = prompt("Please insert desired grid size between 1-100");
  });
  return userInput = resize;
}
createButton();
console.log(resize);

function resetGrid(userInput) {
  if (userInput > 100)  
    alert("Value too high, please reinsert");
  else (userInput < 100) 
  
}

  