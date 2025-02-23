const container = document.querySelector(".container");
const newGrid = document.querySelector(".new-grid");
const resetColorBtn = document.querySelector(".reset-color");

// Create dynamic grid sized based on user input
function createGrid(size) {

    // Create the grid rows and columns
    for (let i = 0; i < size; i++) {
        const gridRow = document.createElement("div");
        gridRow.classList.add("grid-box-row");

        for (let j = 0; j < size; j++) {
            const gridColumn = document.createElement("div");
            gridColumn.classList.add("grid-box-column");
            gridRow.appendChild(gridColumn);
        }

        container.appendChild(gridRow);
    }
    
    setGridSize(size);
    resetColor();
}

// Set the width and height of the grid divs based on their number
function setGridSize(size) {
    const gridColumns = document.querySelectorAll(".grid-box-column");

    // Set width and height to make columns adjust to the container's size
    const containerWidth = container.clientWidth;
    const containerHeight = container.clientHeight;

    const columnWidth = containerWidth / size;
    const columnHeight = containerHeight / size;

    // Apply width and height to all columns
    gridColumns.forEach((col) => {
        col.style.width = `${columnWidth}px`;
        col.style.height = `${columnHeight}px`;
    });
}

// Resets the color of the grid divs
function resetColor() {
    const gridColumns = document.querySelectorAll(".grid-box-column");

    gridColumns.forEach(col => {
        col.style.backgroundColor = "rgb(236, 231, 231";
    });
}

// Set a random color on each grid div when hovering over them
container.addEventListener("mouseover", (event)=> {
    const randomColor = Math.floor(Math.random()*16777215).toString(16);
    event.target.style.backgroundColor = `#${randomColor}`;
})

// Set the grid size based on user input
newGrid.addEventListener("click", ()=> {
    const input = Number(prompt("Please enter the size of the grid:"));
    container.innerHTML = "";

    if(input > 100){
        alert("Grid size too bug,please select a smaller number");
    }

    createGrid(input);
})

resetColorBtn.addEventListener("click", ()=> {
    createGrid();
})

// Initialize a 16x16 grid in the beginning
createGrid(16);