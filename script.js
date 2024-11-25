const container = document.querySelector("#grid-container")
const sqaurePerSide = 16;
const gridSize = sqaurePerSide** 2;

/* This needs to re-render whenever the viewpoint is resized */
function setGridSqaureSize() {
    var containerWidth = container.scrollWidth
    var squareWidth =  (containerWidth / sqaurePerSide)
    return squareWidth
}

function createGrid(squareSize) {
    for (i = 0; i < gridSize; i++) {
        const gridSquare = document.createElement("div")
        gridSquare.id = "grid-square";
        gridSquare.style.width = `${squareSize}px`;
        container.append(gridSquare);
}
}

var squareSize = setGridSqaureSize()
createGrid(squareSize)
