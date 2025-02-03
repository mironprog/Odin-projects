const Gameboard = {
    gameboard: [
        [null, null, null],
        [null, null, null],
        [null, null, null]
    ]
};

let game = true;
function putX(tile){
    if (tile.innerHTML === "") {
        tile.innerHTML = "X"; // "X" helyezése a mezőbe
    }
}

function putO(gameboard){
    const board = gameboard;
    const emptyCells = [];
    for (let row = 0; row < board.length; row++) {
        for (let col = 0; col < board[row].length; col++) {
            if (board[row][col] === null) {
                emptyCells.push({ row, col });
            }
        }
    }

    if (emptyCells.length > 0) {
        const randomIndex = Math.floor(Math.random() * emptyCells.length); 
        const { row, col } = emptyCells[randomIndex]; 
        board[row][col] = "O";  
        return true; 
    }

    return false; 
}

function displayBoard(){
    console.log(Gameboard.gameboard);
}

const checkWin = (board) => {
    const size = board.length;  

   
    for (let row = 0; row < size; row++) {
        if (board[row][0] !== null && board[row].every(cell => cell === board[row][0])) {
            game = false
            return board[row][0];
        }
    }

    for (let col = 0; col < size; col++) {
        if (board[0][col] !== null && board.every(row => row[col] === board[0][col])) {
            game = false;
            return board[0][col];
        }
    }

    if (board[0][0] !== null && board.every((row, index) => row[index] === board[0][0])) {
        game = false;
        return board[0][0];
    }

    if (board[0][size - 1] !== null && board.every((row, index) => row[size - 1 - index] === board[0][size - 1])) {
        game = false;
        return board[0][size - 1];
    }

    return null; 
};

while(game){
    putX(Gameboard.gameboard);
    checkWin(Gameboard.gameboard); 
    putO(Gameboard.gameboard);
    displayBoard();
    checkWin(Gameboard.gameboard);   
}

/*
window.addEventListener('DOMContentLoaded', () => {
    const tiles = Array.from(document.querySelectorAll('.tile'));
    const palyerDisplay = document.querySelectorAll('.display-player');
    const resetButton = document.querySelectorAll('#reset');
    const announcer = document.querySelectorAll('.announcer');

    let currentPlayer = 'X';
    let game = true;

    const PLAYERX_WON = 'PLAYERX_WON';
    const PLAYERO_WON = 'PLAYERO_WON';
    const TIE = 'TIE';

    resetButton.addEventListener('click', resetButton);
});
*/