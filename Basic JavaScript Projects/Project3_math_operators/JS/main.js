function add() {
	// Get the 2 opperands and convert them from strings to integers
	var num2 = parseInt(document.getElementById("num2").innerText);
	var num1 = parseInt(document.getElementById("num1").innerText);

	// Add the numbers together and put the result on the screen
	document.getElementById("result").innerHTML = num1 + num2;
}
