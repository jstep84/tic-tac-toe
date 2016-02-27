var player = 1;
var player1 = 0;
var player2 = 0;

function clickTile(tile) {
	if (player === 1) {
		document.getElementById(tile).value = 'X';
		document.getElementById(tile).style.backgroundColor = '#9B344E';
		document.getElementById(tile).disabled=true;
		player -= 1;
		getWinner();
	} else {
		document.getElementById(tile).value = 'O';
		document.getElementById(tile).style.backgroundColor = '#2A4D6E';
		document.getElementById(tile).disabled=true;
		player += 1;
		getWinner();
	}
}

function getWinner() {
	if (document.getElementById('tile1').value == 'X' && 
		document.getElementById('tile2').value == 'X' &&
		document.getElementById('tile3').value == 'X' ||
		document.getElementById('tile4').value == 'X' && 
		document.getElementById('tile5').value == 'X' &&
		document.getElementById('tile6').value == 'X' ||
		document.getElementById('tile7').value == 'X' && 
		document.getElementById('tile8').value == 'X' &&
		document.getElementById('tile9').value == 'X' ||
		document.getElementById('tile1').value == 'X' && 
		document.getElementById('tile4').value == 'X' &&
		document.getElementById('tile7').value == 'X' ||
		document.getElementById('tile2').value == 'X' && 
		document.getElementById('tile5').value == 'X' &&
		document.getElementById('tile8').value == 'X' ||
		document.getElementById('tile3').value == 'X' && 
		document.getElementById('tile6').value == 'X' &&
		document.getElementById('tile9').value == 'X' ||
		document.getElementById('tile1').value == 'X' && 
		document.getElementById('tile5').value == 'X' &&
		document.getElementById('tile9').value == 'X' ||
		document.getElementById('tile3').value == 'X' && 
		document.getElementById('tile5').value == 'X' &&
		document.getElementById('tile7').value == 'X') {
			player1 ++;
			document.getElementById('Score1').innerHTML = "Player 1: " + player1;
			alert('Player 1 wins! The score is\nPlayer 1: ' + player1 + '\nPlayer 2: ' + player2 + '\nPlayer 2 starts the next round');
			newGame();		
	} else if 
	   (document.getElementById('tile1').value == 'O' && 
		document.getElementById('tile2').value == 'O' &&
		document.getElementById('tile3').value == 'O' ||
		document.getElementById('tile4').value == 'O' && 
		document.getElementById('tile5').value == 'O' &&
		document.getElementById('tile6').value == 'O' ||
		document.getElementById('tile7').value == 'O' && 
		document.getElementById('tile8').value == 'O' &&
		document.getElementById('tile9').value == 'O' ||
		document.getElementById('tile1').value == 'O' && 
		document.getElementById('tile4').value == 'O' &&
		document.getElementById('tile7').value == 'O' ||
		document.getElementById('tile2').value == 'O' && 
		document.getElementById('tile5').value == 'O' &&
		document.getElementById('tile8').value == 'O' ||
		document.getElementById('tile3').value == 'O' && 
		document.getElementById('tile6').value == 'O' &&
		document.getElementById('tile9').value == 'O' ||
		document.getElementById('tile1').value == 'O' && 
		document.getElementById('tile5').value == 'O' &&
		document.getElementById('tile9').value == 'O' ||
		document.getElementById('tile3').value == 'O' && 
		document.getElementById('tile5').value == 'O' &&
		document.getElementById('tile7').value == 'O') {
			player2 ++;
			document.getElementById('Score2').innerHTML = "Player 2: " + player2;
			alert('Player 2 wins! The score is\nPlayer 1: ' + player1 + '\nPlayer 2: ' + player2 + '\nPlayer 1 starts the next round');
			newGame();
	}
}

function newGame() {
		document.getElementById('tile1').value ='';  
		document.getElementById('tile1').style.backgroundColor = '#267257';
		document.getElementById('tile1').disabled=false;
		document.getElementById('tile2').value =''; 
		document.getElementById('tile2').style.backgroundColor = '#267257';
		document.getElementById('tile2').disabled=false;
		document.getElementById('tile3').value =''; 
		document.getElementById('tile3').style.backgroundColor = '#267257';
		document.getElementById('tile3').disabled=false;
		document.getElementById('tile4').value ='';  
		document.getElementById('tile4').style.backgroundColor = '#267257';
		document.getElementById('tile4').disabled=false;
		document.getElementById('tile5').value =''; 
		document.getElementById('tile5').style.backgroundColor = '#267257';
		document.getElementById('tile5').disabled=false;
		document.getElementById('tile6').value =''; 
		document.getElementById('tile6').style.backgroundColor = '#267257';
		document.getElementById('tile6').disabled=false;
		document.getElementById('tile7').value ='';  
		document.getElementById('tile7').style.backgroundColor = '#267257';
		document.getElementById('tile7').disabled=false;
		document.getElementById('tile8').value =''; 
		document.getElementById('tile8').style.backgroundColor = '#267257';
		document.getElementById('tile8').disabled=false;
		document.getElementById('tile9').value ='';
		document.getElementById('tile9').style.backgroundColor = '#267257';
		document.getElementById('tile9').disabled=false;
}

function reset() {
		newGame();
		document.getElementById('Score1').innerHTML = "Player 1: 0";
		document.getElementById('Score2').innerHTML = "Player 2: 0";
		player1 = 0;
		player2 = 0; 
}