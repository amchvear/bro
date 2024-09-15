let board = [];
let currentPlayer = "X";
let gameOver = false;

for (let i = 0; i < 9; i++) {
    board.push("");
    document.getElementById(`cell-${i}`).addEventListener("click", () => {
        if (!gameOver && board[i] === "") {
            board[i] = currentPlayer;
            document.getElementById(`cell-${i}`).innerHTML = `<span class="${currentPlayer.toLowerCase()}">${currentPlayer}</span>`;
            checkWin();
            currentPlayer = currentPlayer === "X" ? "O" : "X";
        }
    });
}

function checkWin() {
    const winConditions = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];

    for (let i = 0; i < winConditions.length; i++) {
        const condition = winConditions[i];
        if (board[condition[0]] === board[condition[1]] && board[condition[1]] === board[condition[2]] && board[condition[0]] !== "") {
            gameOver = true;
            alert(`Player ${board[condition[0]]} wins!`);
            return;
        }
    }

    if (!board.includes("")) {
        gameOver = true;
        alert("It's a draw!");
    }
}
