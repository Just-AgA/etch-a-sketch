const container = document.querySelector(".container");

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
}

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

createGrid(14);