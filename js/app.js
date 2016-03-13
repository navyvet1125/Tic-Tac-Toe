var gameBoard ={
	board: [[null,null,null],
			[null,null,null],
			[null,null,null]],
	playerWins:0,
	computerWins:0,
	tiedGames:0,
	playerStart: false,
	isPlayerX: true,
	gameStart: false
};


var isSpaceClear = function(x,y) {
	return (gameBoard.board[x][y]===null);
}

var isCatsGame = function() {
	for (var x = 0; x<3; x++){
		for (var y =0; y<3;y++){
			if (gameBoard.board[x][y]===null) {
				return false;
			}
		}
	}
	return true;
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


var playerChoice = function (element) {
	console.log(gameBoard.gameStart && !isCatsGame() && !getWinner());
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
			var isWinner = getWinner();
			if(!isWinner){
				computerChoice();
			} else {
				
			}
		}
	}
}

var computerChoice = function(){
	var row = Math.floor(Math.random()*3);
	var column = Math.floor(Math.random()*3);
	if (!isCatsGame()){

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

}

var startGame = function() {
	clearBoard();
	if(!gameBoard.playerStart) {
		gameBoard.isPlayerX=false;
		computerChoice();
	}
	gameBoard.gameStart= true;
}

var clearBoard = function () {
	for (var x = 0; x<3; x++){
		for (var y =0; y<3;y++){
			gameBoard.board[x][y]=null;
			document.getElementById('box'+x+y).innerHTML='';
		}
	}

}
