const squares = document.querySelectorAll(".square");

squares.forEach((square) => {
    square.addEventListener("click", addMarker);
});

function addMarker() {
    this.textContent = Game.currentPlayer.marker // currentPlayer.marker
    Game.board[this.dataset.index] = this.textContent;
}

const Player = (name, marker) => {
    return { name, marker };
}

const player1 = Player("Jake", "X");
const player2 = Player("Computer", "O");

const Game = (() => {
    const board = [];
    const currentPlayer = player1;
    const switchPlayer = () => {
        if (currentPlayer == player1) {
            currentPlayer = player2;
        }
        else {
            currentPlayer = player1;
        }
    }
    return { board, currentPlayer };
})();