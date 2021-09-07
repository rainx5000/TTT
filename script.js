const Player = (mark) => {
  this.marker = mark;
  this.score = 0;

  const getScore = () => score;

  return {
    marker,
    score,
    getScore
  }
}

const gameBoard  = (() => {
  const boardContainer = document.querySelector(".game-board-container");
  const scores = document.querySelector(".scores");
  const gameBoard = ['','','','','','','','',''];
  const winningCombinations = ['012', '345', '678', '036', '147', '258', '048', '642'];
  const _player1 = Player("x");
  const _player2 = Player("o");
  const players = [_player1, _player2];
  const getCurrent = () => players[0];


  const winner = (aWinner) => {
    if (aWinner) {
      const winner = document.querySelector(`.${getCurrent().marker}`);
      const score = getCurrent().score += 1;
      winner.textContent =  score;
      _announceWinner();
    } else {
      _announceWinner("tie");
    }
    return true;
  }
  const endGame = () => {
    boardContainer.classList.toggle("disabled");
  }
  const restartScores = () => {
    players.forEach(player => player.score = 0)
    Array.from(scores.children).forEach(score => score.textContent = 0)
  }

  const _announceWinner = (result) => {
    if (result === "tie") {
      document.querySelector(".announcement").textContent = "Tie!";
    } else {
      document.querySelector(".announcement").textContent = `${getCurrent().marker.toUpperCase()} has won!`
    }
  }


  return {
    gameBoard,
    players,
    getCurrent,
    winningCombinations,
    boardContainer,
    winner,
    endGame,
    scores,
    restartScores
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
    gameBoard.gameBoard.forEach((box, index) => boardContainer.children[index].textContent = box);
  }

  function checkWinner() {
    const boxes = boardContainer.children;
    const winner = gameBoard.winningCombinations.some(combo => {
      const comboArray = combo.split('');
      return comboArray.every(curr => {
        return boxes[curr].textContent === gameBoard.getCurrent().marker;
      })
    })
    if (Array.from(boxes).every(box => box.textContent) && !winner) return gameBoard.winner(false);
    if (winner) return gameBoard.winner(true);
  }

  form.addEventListener("submit", formSubmitHandle);
  resetBtn.addEventListener("click", resetGame);
  restartBtn.addEventListener("click", restartGame);

  function formSubmitHandle (e) {
    player1Display.textContent = `${player1Input.value} [X]`;
    player2Display.textContent = `${player2Input.value} [O]`;
    form.classList.toggle("hidden");
  }

  function resetGame () {
    gameBoard.gameBoard.forEach((el, index) => {
      gameBoard.gameBoard[index] = '';
    });
    gameBoard.boardContainer.classList.remove("disabled");
    document.querySelector(".announcement").textContent = '';
    renderBoard();
  }
  function restartGame () {
    resetGame();
    gameBoard.restartScores();
    form.classList.toggle("hidden");
  }
})()

