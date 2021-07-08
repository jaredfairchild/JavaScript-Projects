// This variable keeps track of whose turn it is.
let activePlayer = "X";
let continueGame = true;

// This array stores an array of moves. We use this to determine win conditions.
let selectedXSquares = [];
let selectedOSquares = [];

// This object contains arrays of each possible win condition
let winConitions = {
	0: [0, 1, 2],
	1: [3, 4, 5],
	2: [6, 7, 8],
	3: [0, 3, 6],
	4: [1, 4, 7],
	5: [2, 5, 8],
	6: [0, 4, 8],
	7: [2, 4, 6],
};

// This object contains the start and end point for each possible win condition
// Note: there's no '4' because it's the center square and will never be the
// the start or end of a win line
let winLines = {
	0: [100, 100],
	1: [300, 100],
	2: [500, 100],
	3: [100, 300],
	5: [500, 300],
	6: [100, 500],
	7: [300, 500],
	8: [500, 500],
};

// The color for the winning lines
let xColor = "#FF0000";
let oColor = "#0000FF";

// This function is for placing an x or 0 in a square.
function placeXorO(squareNumber) {
	// This condition ensures a square hasn't been selected already.

	if (
		!(
			selectedXSquares.includes(parseInt(squareNumber)) ||
			selectedOSquares.includes(parseInt(squareNumber))
		)
	) {
		// This variable retrieves the html element id that was clicked.
		let select = document.getElementById(squareNumber);

		// This condition checks who's turn it is.
		if (activePlayer === "X") {
			// If activePlayer is equal to 'X', the x.png is place in HTML.
			select.style.backgroundImage = 'url("./images/x.png")';
			selectedXSquares.push(parseInt(select.id));
			checkWinConditions();
			activePlayer = "O";

			if (continueGame) {
				// This function disables clicking for computer choice.
				disableClick();
				// This function waits 1 second before computer places image and enables click.
				setTimeout(function () {
					computersTurn();
				}, 1000);
			}
		} else {
			// If activePlayer is equal to 'O', the o.png is placed in HTML.
			select.style.backgroundImage = 'url("./images/o.png")';
			selectedOSquares.push(parseInt(select.id));
			checkWinConditions();
			activePlayer = "X";
		}

		// This function plays placement sound
		audio("./media/place.mp3");

		// Returning true is needed for our computersTurn() function to work.
		// return true;
	}
}

// This function results in a random square beind selected.
function computersTurn() {
	let picASquare = Math.floor(Math.random() * 9);

	if (
		selectedOSquares.includes(picASquare) ||
		selectedXSquares.includes(picASquare)
	) {
		computersTurn();
	}

	placeXorO(picASquare);
}

// This function parses the selectedXSquares and selectedOSquares arrays to search for win conditions.
// drawWinLine function is called to draw line if condition is met.
function checkWinConditions() {
	if (activePlayer === "X") {
		for (var i = 0; i < 8; i++) {
			if (
				selectedXSquares.includes(winConitions[i][0]) &&
				selectedXSquares.includes(winConitions[i][1]) &&
				selectedXSquares.includes(winConitions[i][2])
			) {
				audio("./media/winGame.mp3");
				// This uses the winning condition to find the coordinates needed to draw the line
				// It also sets the appropriate color since 'X' won
				drawWinLine(
					winLines[winConitions[i][0]][0],
					winLines[winConitions[i][0]][1],
					winLines[winConitions[i][2]][0],
					winLines[winConitions[i][2]][1],
					xColor
				);
				continueGame = false;
				setTimeout(function () {
					resetGame();
				}, 3000);
			}
		}
	} else {
		for (var i = 0; i < 8; i++) {
			if (
				selectedOSquares.includes(winConitions[i][0]) &&
				selectedOSquares.includes(winConitions[i][1]) &&
				selectedOSquares.includes(winConitions[i][2])
			) {
				audio("./media/loseGame.mp3");

				// This uses the winning condition to find the coordinates needed to draw the line
				// It also sets the appropriate color since 'O' won
				drawWinLine(
					winLines[winConitions[i][0]][0],
					winLines[winConitions[i][0]][1],
					winLines[winConitions[i][2]][0],
					winLines[winConitions[i][2]][1],
					oColor
				);
				continueGame = false;
				setTimeout(function () {
					resetGame();
				}, 3000);
			}
		}
	}

	// If the all of the squares are filled then the game is a tie.
	// It needs to check the continueGame boolean in case the final play results in a win
	if (continueGame && selectedXSquares.length + selectedOSquares.length === 9) {
		audio("./media/tie.mp3");
		setTimeout(function () {
			resetGame();
		}, 1000);
	}
}

// Temporarily make body unclickable
function disableClick() {
	// Makes body unclickable
	body.style.pointerEvents = "none";

	// Makes body clickable again after 1 second
	setTimeout(function () {
		body.style.pointerEvents = "auto";
	}, 1000);
}

// This function plays sound effects during the game
function audio(audioURL) {
	let audio = new Audio(audioURL);
	audio.play();
}

// This function resets the game by reloading the page
function resetGame() {
	location.reload();
}

// This function draws the winning line(s) at the end of the game
function drawWinLine(x1, y1, x2, y2, color) {
	const canvas = document.getElementById("win-lines");
	const c = canvas.getContext("2d");

	c.moveTo(x1, y1);
	c.lineTo(x2, y2);
	c.strokeStyle = color;
	c.lineWidth = 10;
	c.stroke();
}
