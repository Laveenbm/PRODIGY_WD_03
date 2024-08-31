let currentPlayer = 'X';
let gameBoard = ['', '', '', '', '', '', '', '', ''];
let gameOver = false;
function handleCellClick(event) {
  const cellIndex = event.target.id.split('-')[1];
  if (gameBoard[cellIndex] === '') {
    gameBoard[cellIndex] = currentPlayer;
    event.target.textContent = currentPlayer;
    checkForWin();
    switchPlayer();
  }
}

function checkForWin() {
  const winningCombinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];
  for (let i = 0; i < winningCombinations.length; i++) {
    const combination = winningCombinations[i];
    if (gameBoard[combination[0]] === gameBoard[combination[1]] && gameBoard[combination[1]] === gameBoard[combination[2]] && gameBoard[combination[0]] !== '') {
      gameOver = true;
      alert(`Player ${currentPlayer} wins!`);
      break;
    }
  }
}
function switchPlayer() {
  currentPlayer = (currentPlayer === 'X') ? 'O' : 'X';
}
function resetGame() {
  gameBoard = ['', '', '', '', '', '', '', '', ''];
  currentPlayer = 'X';
  gameOver = false;
  document.querySelectorAll('.cell').forEach(cell => cell.textContent = '');
}
document.querySelectorAll('.cell').forEach(cell => cell.addEventListener('click', handleCellClick));
document.getElementById('reset-button').addEventListener('click', resetGame);