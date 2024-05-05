const board = document.getElementById('board');
const restartBtn = document.getElementById('restartBtn');

let currentPlayer = 'X';
let gameBoard = ['', '', '', '', '', '', '', '', ''];
let gameActive = true;

const winningCombos = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8], // linhas
    [0, 3, 6], [1, 4, 7], [2, 5, 8], // colunas
    [0, 4, 8], [2, 4, 6]             // diagonais
];

board.addEventListener('click', (e) => {
    const cell = e.target;
    const cellIndex = parseInt(cell.getAttribute('data-cell'));

    if (gameBoard[cellIndex] === '' && gameActive) {
        cell.textContent = currentPlayer;
        gameBoard[cellIndex] = currentPlayer;
        checkResult();
        currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
    }
});

restartBtn.addEventListener('click', () => {
    gameBoard = ['', '', '', '', '', '', '', '', ''];
    gameActive = true;
    currentPlayer = 'X';
    document.querySelectorAll('.cell').forEach(cell => cell.textContent = '');
});

function checkResult() {
    for (let combo of winningCombos) {
        const [a, b, c] = combo;
        if (gameBoard[a] && gameBoard[a] === gameBoard[b] && gameBoard[a] === gameBoard[c]) {
            gameActive = false;
            setTimeout(() => alert(`${gameBoard[a]} venceu!`), 100);
        }
    }
}
