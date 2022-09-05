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

    let board = [];

    let currentPlayer = player1;

    let counter = 0;

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

    const displayDraw = () => {
        const overlay = document.querySelector(".overlay");
       const displayWinner = document.querySelector(".displayWinner");
       overlay.style.display = "flex";
       displayWinner.textContent = `Game ended in a draw!`;
       restart();
    }

    const startGame = () => {
        const squares = document.querySelectorAll(".square");
        squares.forEach((square) => {
            square.addEventListener("click", () => {
                if (isValid(square)) {
                    board[square.dataset.index] = currentPlayer.marker // currentPlayer.marker
                    square.textContent = board[square.dataset.index];
                    counter++;
                    if (checkForWinner()) {
                        displayWinner();
                    }
                    else if (counter == 9) {
                        displayDraw();
                    }
                    else {
                        switchPlayer();
                    }
                }
            });
        });
    }

    const restart = () => {
        const restartButton = document.querySelector(".restart");
        const overlay = document.querySelector(".overlay");
        restartButton.addEventListener("click", () => {
            board.splice(0, board.length);
            counter = 0;
            const squares = document.querySelectorAll(".square");
            squares.forEach((square) => {
                square.textContent = "";
            })
            overlay.style.display = "none";
        })
    }

    const displayWinner = () => {
       const overlay = document.querySelector(".overlay");
       const displayWinner = document.querySelector(".displayWinner");
       overlay.style.display = "flex";
       displayWinner.textContent = `${currentPlayer.name} won the game!`;
       restart();
    }

    const isValid = (square) => {
        return square.textContent == "";
    }
    
    return { startGame };
})();

const Game = (() => {
    GameBoard.startGame();
})();