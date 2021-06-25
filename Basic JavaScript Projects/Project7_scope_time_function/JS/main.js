var logMsg; // The logMsg variable has global scope

// The Time_function() from Step 152
function Time_function() {
	var Time = new Date().getHours(); // The Time variable has local scope
	var Reply; // The Reply variable has local scope

	if (Time < 12 == Time > 0) {
		Reply = "It is morning time!";
	} else if (Time >= 12 == Time < 18) {
		Reply = "It is afternoon.";
	} else {
		Reply = "It is evening time.";
	}

	document.getElementById("Time_of_day").innerHTML = Reply;

	consoleMsg("Before assigning a value to logMsg");
	logMsg = "The variable Time is: " + Time + " The variable Reply is: " + Reply;
	consoleMsg("After assigning a value to logMsg");

	consoleErr();
}

function consoleMsg(msg) {
	console.log(msg);

	// Only write the logMsg if it has a value assigned to it
	// Otherwise write that it doesn't have a value yet
	if (logMsg != undefined) {
		console.log(logMsg); // This line writes to the console
	} else {
		console.log("A value has not been assigned to logMsg yet");
	}
}

// This function generates an error on the console
// The error is because the variable Time is local to Time_function()
function consoleErr() {
	console.log(Time);
}
