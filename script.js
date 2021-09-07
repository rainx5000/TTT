
const Player = (mark) => {
  const marker = mark;

  return {
    marker
  }
}

const gameBoard  = (() => {
  const boardContainer = document.querySelector(".game-board-container");
  const gameBoard = ['','','','','','','','',''];
  const winningCombinations = ['012', '345', '678', '036', '147', '258', '048', '642'];
  const player1 = Player("x");
  const player2 = Player("o");
  const players = [player1, player2];
  const getCurrent = () => players[0];


  const tie = () => {
    boardContainer.style.pointerEvents = "none";
    console.log("TIE GAME");
    return true;
  }
  const winner = () => {
    console.log(`${getCurrent().marker} has won!`)
    return true;
  }
  const endGame = () => {
    console.log('ended')
    boardContainer.style.pointerEvents = "none";
  }





  return {
    gameBoard,
    players,
    getCurrent,
    winningCombinations,
    boardContainer,
    winner,
    tie,
    endGame
  }
})();

const displayController = (() => {
  const boardContainer = gameBoard.boardContainer;
  const player1Input = document.querySelector(".player1-input");
  const player1Display = document.querySelector(".player1-display");
  const player2Input = document.querySelector(".player2-input");
  const player2Display = document.querySelector(".player2-display");
  const form = document.querySelector(".menu");
  const resetBtn = document.querySelector(".reset");
  const restartBtn = document.querySelector(".restart");


  boardContainer.addEventListener("click", markBoard)

  function markBoard (e) {
    if (e.target.textContent) return;
    gameBoard.gameBoard[e.target.classList[0]] = gameBoard.getCurrent().marker;
    renderBoard();
    checkWinner() ? gameBoard.endGame() : gameBoard.players.reverse();
    
  }

  const renderBoard = function () {
    gameBoard.gameBoard.forEach((box, index) => boardContainer.children[index].textContent = box)
  }

  function checkWinner() {
    const boxes = boardContainer.children;
    const winner = gameBoard.winningCombinations.some(combo => {
      const comboArray = combo.split('');
      return comboArray.every(curr => {
        return boxes[curr].textContent === gameBoard.getCurrent().marker;
      })
    })
    if (Array.from(boxes).every(box => box.textContent) && !winner) return gameBoard.tie();
    if (winner) return gameBoard.winner();
  }

  form.addEventListener("submit", formSubmitHandle);
  resetBtn.addEventListener("click", resetGame);
  // restartBtn.addEventListener("click", restartGame);

  function formSubmitHandle (e) {
    player1Display.textContent = player1Input.value;
    player2Display.textContent = player2Input.value;
  }

  function resetGame () {
    gameBoard.gameBoard.forEach((el, index) => {
      gameBoard.gameBoard[index] = '';
    });
    renderBoard();
  }

})()

