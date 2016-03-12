# Tic-Tac-Toe
## Introduction
paragraph The goal of this program is to solve the problem of creating an interactive version of the game Tic-Tac-Toe using HTML, CSS, and JavaScript.

## The problem broken down

+ ###Game flow Breakdown 
+ + Index.html contains a number of divs that will be used in the game environment It will also call both main.css and app.js.

+ + Main.css contains all the css formatting for the game to load.
+ + App.js contains all of the logic for the game, written in JavaScript.

+ ### Game logic 
+ + The JS app contains several functions.  Global variables and objects will be initialized first, followed by auxiliary functions, and finally main functions.  This is to prevent a function from possibly being called before it is loaded.



## The JavaScript File

### Functions
####The JavaScript file utilizes the following functions:

+ gameStart() to startcand run the game.
+ clearBoard() to ensure the board is cleared of any and all moves.
+ isSpaceClear() will return a boolean value indicating whether or not the particular space is empty.
+ playerChoice(parameter) will update the game board appropriately based on the player's choice.
+ computerChoice() will update the game board appropriately based on the computer's choice.
+ checkWinner() checks to see if three in a row has been obtained.
+ checkCats() checks to see if board is full but three in a row has not been obtained.

### Objects
####JavaScript Objects created will include:
+ Game board Object
+ Objects from the DOM

####Game Board Object Properties:
+ gameBoard[] array
+ WhoIsX property
+ WhoIsO property
+ ComputerWins property
+ PlayerWins property