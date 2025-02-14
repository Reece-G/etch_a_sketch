const container = document.querySelector("#grid-container");
const button = document.querySelector("button")
button.addEventListener('click', event => {
    squaresPerSide = prompt("Enter squares per grid side: ")
    removeGrid(container)
    newGrid(squaresPerSide)
})

/* This needs to re-render whenever the viewpoint is resized */
function setGridSqaureSize(squaresPerSide) {
    let containerWidth = container.scrollWidth
    let squareWidth =  (containerWidth / squaresPerSide)
    return squareWidth
}

function calcGridSize(squaresPerSide) {
    let gridSize = squaresPerSide **2;
    return gridSize
}

function createGrid(squareSize, gridSize) {
    console.log(gridSize)
    for (i = 0; i < gridSize; i++) {
        const gridSquare = document.createElement("div")
        gridSquare.id = "grid-square";
        gridSquare.style.width = `${squareSize}px`;
        container.append(gridSquare);
    }
}

function removeGrid(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}

async function hoverListener() {
    const gridSquares = document.querySelectorAll("#grid-square")
    gridSquares.forEach(square => square.addEventListener('mouseenter', event => {
        let currentOpacity = event.target.style.opacity;
        if (currentOpacity) {
            event.target.style.opacity = Number(currentOpacity) - 0.1
        }
        else {
            event.target.style.opacity = 0.9
        }
    }))
}

function newGrid(squaresPerSide = 16) {
    createGrid(
        squareSize = setGridSqaureSize(squaresPerSide),
        gridSize = calcGridSize(squaresPerSide)
    )
    hoverListener()
}

newGrid()

