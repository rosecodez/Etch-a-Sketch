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
  // Event for changing colors while hovering over the squares
  childDiv.addEventListener(
    "mouseenter",
    (event) => {
      event.target.style.background = "black";
    }
  );
}

const initial = 16;
//Function to loop the squares
function createLoop() {
  for (i = 0; i < initial * initial; i++) {
    createChild();
  }
}
createLoop();

// Function to create buttons, change its color and get user value when button is clicked
function createButton() {
  // create button for changing grid size
  const button = document.createElement("button");
  mainDiv.appendChild(button);
  button.setAttribute("id","button");
  button.textContent = "Change grid size"; 

  // event to get user's value through prompt
  button.addEventListener("click", (event) => {
    userInput = prompt("Please insert desired size, between 1-100");
    if (userInput > 100) {
      alert("Value too high, please retry")
    } else {
      clearGrid();
    }
    return userInput;
  });
}
createButton();

//Function to create eraser and event
function createEraser() {
  // create button for eraser
  const eraserBtn = document.createElement("button");
  mainDiv.appendChild(eraserBtn);
  eraserBtn.setAttribute("id","eraserBtn");
  eraserBtn.textContent = "Eraser";

  // event for eraser
  eraserBtn.addEventListener("click", () => {

  })
}
createEraser()

//Function to clear color
function clearColor() {
  // create button for clearing grid
  const clearBtn = document.createElement("button");
  mainDiv.appendChild(clearBtn);
  clearBtn.setAttribute("id","clearBtn");
  clearBtn.textContent = "Clear";

  // event to clear grid on click
  clearBtn.addEventListener("click", () => {
    mainGrid.childNodes.forEach((child) => {
      child.style.backgroundColor = null;
    });
  });
}
clearColor();

// Function to clear grid
function clearGrid() {
  while(mainGrid.firstChild) {
    mainGrid.removeChild(mainGrid.firstChild);
  }
}

// Function to change grid size
function resizeGrid(userInput) {
  for (i = 0; i < userInput * userInput; i++) {
    createChild();
  }
}
resizeGrid();