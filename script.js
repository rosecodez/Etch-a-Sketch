

// All the divs are created through DOM
// Main container
function createDiv() {
  const mainDiv = document.createElement("div");
  document.body.appendChild(mainDiv);
  mainDiv.setAttribute("id", "mainDiv");
}
createDiv();

// Function to create footer
function createFooter() {
  const footer = document.createElement("footer");
  mainDiv.appendChild(footer);
  footer.textContent = "RoseCodez @ The Odin Project 2023";
}
createFooter();

// Grid container
function createGrid() {
  const mainGrid = document.createElement("div");
  mainDiv.appendChild(mainGrid);
  mainGrid.setAttribute("id", "mainGrid");
}
createGrid();

// Function to create individual square and change its color while hovering
function createChild() {
  const childDiv = document.createElement("div");
  mainGrid.appendChild(childDiv);
  childDiv.setAttribute("class", "childDiv");
  // Event for changing colors while hovering over the squares
  childDiv.addEventListener(
    "mouseenter",
    (event) => {
      let randomColor = Math.floor(Math.random()*16777215).toString(16);
      event.target.style.background = '#' + randomColor;
      
      if(parseFloat(event.target.style.opacity)) {
        event.target.style.opacity = parseFloat(event.target.style.opacity) + 0.1;
      } else {
        event.target.style.opacity = 0.1;
      }
    }
  );
}

// Function to loop the squares
// default grid size (16x16)
const size = 16;
function createLoop() {
  for (i = 0; i < size * size; i++) {
    createChild();
  }
}
createLoop();

// Function to create buttons, change its color and get user value when button is clicked
function changeGridBtn() {
  // create button for changing grid size
  const changeGridBtn = document.createElement("button");
  mainDiv.appendChild(changeGridBtn);
  changeGridBtn.setAttribute("id", "changeGridBtn");
  changeGridBtn.textContent = "Change grid size";

  // event to get user's value through prompt
  changeGridBtn.addEventListener("click", (event) => {
    j = 1;
    userInput = prompt("Please insert desired size, between 1-100");
    if (userInput > 100) {
      alert("Value too high, please retry")
    } else {
      clearGrid();
    }
    resizeGrid(userInput);
  });
}
changeGridBtn()

//Function to clear color
function clearColor() {
  // create button for clearing grid
  const clearBtn = document.createElement("button");
  mainDiv.appendChild(clearBtn);
  clearBtn.setAttribute("id", "clearBtn");
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
  while (mainGrid.firstChild) {
    mainGrid.removeChild(mainGrid.firstChild);
  }
}

// Function to change grid size
function resizeGrid(userInput) {
  for (i = 0; i < userInput * userInput; i++) {
    // redeclare childDiv
    // had difficulty to access the element already created with DOM, so this actually worked
    const childDiv = document.createElement("div");
    mainGrid.appendChild(childDiv);
    childDiv.setAttribute("class", "childDiv");

    //calculate size of squares each time grid changes size
    childDiv.style.flexBasis = `calc(100% / ${userInput})`;

    //redeclare event listener for changing color when hovering over

    childDiv.addEventListener(
      "mouseenter",
      (event) => {
        var randomColor = Math.floor(Math.random()*16777215).toString(16);
        event.target.style.background = '#' + randomColor;
        if(parseFloat(event.target.style.opacity)) {
          event.target.style.opacity = parseFloat(event.target.style.opacity) + 0.1;
        } else {
          event.target.style.opacity = 0.1;
        }
      }
    );
  }
}

// Function to create header
function createHeader() {
  const header = document.createElement("header");
  mainDiv.appendChild(header);
  header.textContent = "Etch a Sketch";
}
createHeader();