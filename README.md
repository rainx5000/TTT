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