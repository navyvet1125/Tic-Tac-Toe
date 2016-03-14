//Object gameBoard used to handle all game logic within JavaScript

var gameBoard ={
	board: [[null,null,null],
			[null,null,null],
			[null,null,null]],
	playerWins:0,
	computerWins:0,
	catsGames:0,
	isPlayerX: false,
	gameStart: false // This field determines whether or no
};

// Sends the player score, computer score, and the number of cat's games to index.html
var updateScores = function(){
	document.getElementById('playerScore').textContent =gameBoard.playerWins;
	document.getElementById('computerScore').textContent =gameBoard.computerWins;
	document.getElementById('catsScore').textContent =gameBoard.catsGames;
	
}

// Handles the computer win event
var computerWin = function(){
	gameBoard.gameStart =false;
	gameBoard.computerWins++;
	gameBoard.isPlayerX= false;
	alert('I win!!!');
	updateScores();
}
// Handles the player win event
var playerWin = function(){
	gameBoard.gameStart =false;
	gameBoard.playerWins++;
	gameBoard.isPlayerX= true;
	alert('You win!!!');
	updateScores();
}
// Handles the Cat's Game event
var catsWin = function(){
	alert('Cat\'s Game!');
	gameBoard.catsGames++;
	gameBoard.gameStart =false;
	updateScores();

}
// checks to see if the space in the board array is null
var isSpaceClear = function(x,y) {
	return (gameBoard.board[x][y]===null);
}

// Checks to see if there are any empty spaces left
var isCatsGame = function() {
	for (var x = 0; x<3; x++){
		for (var y =0; y<3;y++){
			if (isSpaceClear(x,y)) {
				return false;
			}
		}
	}
	return true;
}

var decideWinner = function (whoWon){
	var isPlayerX = gameBoard.isPlayerX;
	if (whoWon==='X') {
		if(isPlayerX) {
		 	playerWin();
		} else {
			computerWin();
		}
	} else if (whoWon==='O') {
		if(!isPlayerX) {
		 	playerWin();
		} else {
			computerWin();
		}

	} else if(isCatsGame()) {
		catsWin();
	}

}


var getWinner = function () {
	var checker = gameBoard.board;
	
	// Check for top row win
	if ((checker[0][0]===checker[1][0])&&(checker[0][0]===checker[2][0])&&(checker[0][0]!=null)) {
		//return winner
		if(checker[0][0]==='X'){
			return 'X';
		} else {
			return 'O';
		}

	
	// Check for middle row win
	} else if ((checker[0][1]===checker[1][1])&&(checker[0][1]===checker[2][1])&&(checker[0][1]!=null)) {
		//return winner
		if(checker[0][1]==='X'){
			return 'X';
		} else {
			return 'O';
		}
	
	// Check for bottom, row win
	} else if ((checker[0][2]===checker[1][2])&&(checker[0][2]===checker[2][2])&&(checker[0][2]!=null)) {
		//return winner
		if(checker[0][2]==='X'){
			return 'X';
		} else {
			return 'O';
		}
	

	// Check for first column win
	} else if ((checker[0][0]===checker[0][1])&&(checker[0][0]===checker[0][2])&&(checker[0][0]!=null)) {
		//return winner		
		if(checker[0][0]==='X'){
			return 'X';
		} else {
			return 'O';
		}

	// Check for second column win
	} else if ((checker[1][0]===checker[1][1])&&(checker[1][0]===checker[1][2])&&(checker[1][0]!=null)) {
		//return winner
		if(checker[1][0]==='X'){
			return 'X';
		} else {
			return 'O';
		}

	// Check for third column win
	} else if ((checker[2][0]===checker[2][1])&&(checker[2][0]===checker[2][2])&&(checker[2][0]!=null)) {
		//return winner
		if(checker[2][0]==='X'){
			return 'X';
		} else {
			return 'O';
		}


	// Check for forward slash win
	} else if ((checker[0][2]===checker[1][1])&&(checker[0][2]===checker[2][0])&&(checker[0][2]!=null)) {
		//return winner
		if(checker[0][2]==='X'){
			return 'X';
		} else {
			return 'O';
		}

	// Check for back slash win
	} else if ((checker[0][0]===checker[1][1])&&(checker[0][0]===checker[2][2])&&(checker[0][0]!=null)) {
		//return winner
		if(checker[0][0]==='X'){
			return 'X';
		} else {
			return 'O';
		}

	} else {
		return null;
	}
}

var computerChoice = function(){
	var row = Math.floor(Math.random()*3);
	var column = Math.floor(Math.random()*3);
	if (isSpaceClear(row, column)) {
		var element = document.getElementById('box'+row+column);
		if (gameBoard.isPlayerX) {
			element.innerHTML ='<div class="selected-O"></div>';
			gameBoard.board[row][column]='O';
			
		} else {
			element.innerHTML ='<div class="selected-X"></div>';
			gameBoard.board[row][column]='X';
		}
	} else {
		computerChoice();
	}
}

var playerChoice = function (element) {
	if(gameBoard.gameStart && !isCatsGame() && !getWinner()) {
		var elementIdString = element.id.toString();
		var column = elementIdString[elementIdString.length-1];
		var row = elementIdString[elementIdString.length-2];
		
		if (isSpaceClear(row, column)) {
			if (gameBoard.isPlayerX) {
				element.innerHTML ='<div class="selected-X"></div>';
				gameBoard.board[row][column]='X';
				
			} else {
				element.innerHTML ='<div class="selected-O"></div>';
				gameBoard.board[row][column]='O';
			}
			if(!getWinner() && !isCatsGame()){
				computerChoice();
				decideWinner(getWinner());
			} else {
				decideWinner(getWinner());
			}
		}
	}
}



var startGame = function(element) {
	element.className='button-clicked';
	window.setTimeout(function(){element.className='button';}, 200);
	if(!gameBoard.gameStart) {
		clearBoard();
		if(!gameBoard.isPlayerX) {
			computerChoice();
		}
		gameBoard.gameStart= true;
	}
}

var clearBoard = function () {
	if (!gameBoard.gameStart) {
		for (var x = 0; x<3; x++){
			for (var y =0; y<3;y++){
				gameBoard.board[x][y]=null;
				document.getElementById('box'+x+y).innerHTML='';
			}
		}
	}

}
