
const Player = (mark) => {
  const marker = mark;

  return {
    marker
  }
}

const gameBoard  = (() => {
  const gameBoard = ['','','','','','','','',''];
  const player1 = Player("x");
  const player2 = Player("o");
  const players = [player1, player2];
  const getCurrent = () => players[0]






  return {
    gameBoard,
    players,
    getCurrent
  }
})();

const displayController = (() => {
  const boardContainer = document.querySelector(".game-board-container");
  const renderBoard = function () {
    gameBoard.gameBoard.forEach((box, index) => boardContainer.children[index].textContent = box)
  }

  boardContainer.addEventListener("click", markBoard)

  function markBoard (e) {
    gameBoard.gameBoard[e.target.classList[0]] = gameBoard.getCurrent().marker;
    renderBoard();
    gameBoard.players.reverse();
  }


  return {
    boardContainer
  }

})()

