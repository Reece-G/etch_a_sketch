const container = document.querySelector("#grid-container")


function createGrid() {
    for (i = 0; i < 25; i++) {
        const gridSqaure = document.createElement("div")
        gridSqaure.id = "grid-square";
        container.append(gridSqaure);
}
}

createGrid()