var gameBoard ={
	board: [[null,null,null],
			[null,null,null],
			[null,null,null]],
	playerWins:0,
	computerWins:0,
	tiedGames:0,
	turnIsPlayer: true,
	isPlayerX: true
};

console.log(gameBoard.isPlayerX);

var playerChoice = function (element) {
	var elementIdString = element.id.toString();
	var column = elementIdString[elementIdString.length-1];
	var row = elementIdString[elementIdString.length-2];
	
	if (isSpaceClear(row, column)) {
		if (gameBoard.isPlayerX) {
			element.innerHTML ='<div class="selected-X"></div>';
			gameBoard.board[row][column]='X';
			computerChoice();
			
		} else {
			element.innerHTML ='<div class="selected-O"></div>';
			gameBoard.board[row][column]='O';
			computerChoice();
		}
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

var isSpaceClear = function(x,y) {
	return (gameBoard.board[x][y]===null);
}


