const squares = document.querySelectorAll(".square");

squares.forEach((square) => {
    square.addEventListener("click", addMarker);
});

function addMarker() {
    this.textContent = player1.marker; // currentPlayer.marker
    Game.board[this.dataset.index] = this.textContent;
}

const Player = (name, marker) => {
    return { name, marker };
}

const player1 = Player("Jake", "X");
const player2 = Player("Computer", "O");

const Game = (() => {
    const board = [];
    return { board };
})();