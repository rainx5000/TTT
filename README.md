Capitalize first letter if factory function will generate more than one object, don't cap if it will only be one.

TASKS:

1 - Gameboard object will store the gameboard array (GameBoard and disPlayController will be modules)
2 - create a factory function to generate our players objects
3 - Write a function that will render the gameboard array onto the webpage. (manually fill in the array with "x"s and "o"s)
4 - Create functions that would allow players to add marks on the board
    1 - should update the gameBoard
    2 - players should switch each turn is made
    3 - should not be able to click on a spot that already has a value
    4 - should be tied to the DOM, when the player clicks their symbol will marked
5 - Create the logic that will check for winner every time a move is made, it will check for 3 in a row, or a tie
6 - Add an interface to allow players to put their names. with a button to restart/start the game and some display of whoever wins


OPTIONAL - Create an AI option, Player vs AI

RANDOM PLANNING:

gameboard will be an object

winning combinations:

012
345
678

036
147
258

048
642

const WinningCombinations = ['012', '345', '678', '036', '147', '258', '048', '642'];


we would filter the winningCombo,

check if every child has the same marker, return true announcing the winner


6 - Add an interface to allow players to put their names. with a button to restart/start the game and some display of whoever wins

  1 - create a Form with:
    1 - player1 input
    2 - player2 input
    3 - Play button
  2 - create a restart game button and reset game
    Reset will clear the board and start a new game, restart will bring up the form again for new players
  3 - We will have a score counter if we were to only reset the game, 
  4 - 
