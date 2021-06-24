// Function using +
function add() {
	// 10 + 50
	var res = 10 + 50;
	document.getElementById("addResult").innerHTML = res;
}

// Function using -
function subtract() {
	// 50 - 10
	var res = 50 - 10;
	document.getElementById("subResult").innerHTML = res;
}

// Function using *
function multiply() {
	// 20 x 50
	var res = 20 * 50;
	document.getElementById("multResult").innerHTML = res;
}

// Function using %
function modulus() {
	// 7 / 2
	var res = Math.floor(7 / 2).toString() + " with a remainder of " + (7 % 2);
	document.getElementById("moduloResult").innerHTML = res;
}

// Function using ++
function increment() {
	// 10++
	var res = 10;
	res++;
	document.getElementById("incResult").innerHTML = res;
}

// Function using --
function decrement() {
	// 10--
	var res = 10;
	res--;
	document.getElementById("decResult").innerHTML = res;
}

// Function using Math.random()
function rando() {
	document.getElementById("randoResult").innerHTML = Math.floor(
		Math.random() * 100
	);
}
