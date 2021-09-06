const gameBoard  = (() => {
  const gameBoard = ['x','x','','x','o','x','o','o','o'];

  return {
    gameBoard
  }
})();

const displayController = (() => {
  const boardContainer = document.querySelector(".game-board-container");
  const renderBoard = function () {
    gameBoard.gameBoard.forEach((box, index) => boardContainer.children[index].textContent = box)
  }


  return {

  }

})()


const Player = (marker) => {
  const playerMarker = marker;

  return {

  }
}