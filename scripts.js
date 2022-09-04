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
    const addMarker = () => {
        const squares = document.querySelectorAll(".square");
        squares.forEach((square) => {
            square.addEventListener("click", () => {
                console.log(square);
                board[square.dataset.index] = currentPlayer.marker // currentPlayer.marker
                square.textContent = board[square.dataset.index];
            });
        });
    }
    return { board, currentPlayer, addMarker };
})();