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

//Function to loop the squares
function createLoop() {
  for (let i = 0; i < 256; i++) {
    createChild();
  }
}
createLoop();
// Function to create button, change its color and get user value when button is clicked
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
      event.target.style.background = "#d9ed92";
    },
  );

  // event to get user's value through prompt
  button.addEventListener("click", (event) => {
    userInput = prompt("Please insert desired size, between 1-100");
    if (userInput > 100) {
      alert("Value too high, please retry")
    } else {
      button.onclick = changeSize();
    }
    
  });
}
createButton();

let newChildren = "";
// Function to clear current grid, recall the createLoop and set the new cell sizes
function changeSize() {
  console.log(userInput);
}
