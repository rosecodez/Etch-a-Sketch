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

//Function to loop the squares
function createLoop() {
  for (let i = 0; i < 256; i++) {
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

  // create button for clearing grid
  const clearBtn = document.createElement("button");
  mainDiv.appendChild(clearBtn);
  clearBtn.setAttribute("id","button");
  clearBtn.textContent = "Clear";
  
  // event to get user's value through prompt
  button.addEventListener("click", (event) => {
    userInput = prompt("Please insert desired size, between 1-100");
    if (userInput > 100) {
      alert("Value too high, please retry")
      button.onclick = changeSize();
    }
  });
}
createButton();

//Function to clear current grid, recall the createLoop and set the new cell sizes
function changeSize() {
  
  // event to clear grid on click
  clearBtn.onclick = function() {
    (event) => {
      event.style.target.background = "#d9ed92";
    }
  }
}
