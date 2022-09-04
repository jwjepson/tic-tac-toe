const player1 = {
    marker: "X",
};

const player2 = {
    marker: "O",
}

const board = [];

const squares = document.querySelectorAll(".square");

squares.forEach((square) => {
    square.addEventListener("click", addMarker);
});

