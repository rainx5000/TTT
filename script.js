
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
  

})()

