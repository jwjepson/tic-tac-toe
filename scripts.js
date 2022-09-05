const Player = (name, marker) => {
    return { name, marker };
}

const GameBoard = (() => {
    const player1 = Player("Jake", "X");
    const player2 = Player("Computer", "O");
    const winningCombinations = [
        [0,3,6],
        [0,4,8],
        [0,1,2],
        [3,4,5],
        [2,4,6],
        [2,5,8],
        [1,4,7],
        [6,7,8],
    ]
    const board = [];
    let currentPlayer = player1;
    const switchPlayer = () => {
        if (currentPlayer == player1) {
            currentPlayer = player2;
        }
        else {
            currentPlayer = player1;
        }
    }
    const checkForWinner = () => {
        for (let i = 0; i < winningCombinations.length; i++) {
            if (currentPlayer.marker == board[winningCombinations[i][0]] && currentPlayer.marker == board[winningCombinations[i][1]] && currentPlayer.marker == board[winningCombinations[i][2]]) {
                return true;
            }
        }
        return false;
    }
    const addMarker = () => {
        const squares = document.querySelectorAll(".square");
        squares.forEach((square) => {
            square.addEventListener("click", () => {
                if (isValid(square)) {
                    board[square.dataset.index] = currentPlayer.marker // currentPlayer.marker
                    square.textContent = board[square.dataset.index];
                    if (checkForWinner()) {
                        endGame();
                    }
                    switchPlayer();
                }
            });
        });
    }

    const endGame = () => {
       const overlay = document.querySelector(".overlay");
       const displayWinner = document.querySelector(".displayWinner");
       overlay.style.display = "flex";
       displayWinner.textContent = `${currentPlayer.name} won the game!`;
    }
    const isValid = (square) => {
        return square.textContent == "";
    }
    return { addMarker };
})();

const Game = (() => {
    GameBoard.addMarker();
})();