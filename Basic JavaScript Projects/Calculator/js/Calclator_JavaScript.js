// Calculator object
const Calculator = {
	Display_Value: "0",
	First_Operand: null,
	Wait_Second_Operand: false,
	operator: null,
};

// Function for clicks on digit buttons
function Input_Digit(digit) {
	// Syntax for "Object Destructuring"
	const { Display_Value, Wait_Second_Operand } = Calculator;

	if (Wait_Second_Operand === true) {
		Calculator.Display_Value = digit;
		Calculator.Wait_Second_Operand = false;
	} else {
		// Ternary operator sets the display to the appropriate value
		Calculator.Display_Value =
			Display_Value === "0" ? digit : Display_Value + digit;
	}
}

// Function for click on the '.' button
function Input_Decimal(dot) {
	if (Calculator.Wait_Second_Operand === true) return;
	if (!Calculator.Display_Value.includes(dot)) {
		Calculator.Display_Value += dot;
	}
}

// Function for button clicks on math operators
function Handle_Operator(Next_Operator) {
	// Syntax for "Object Destructuring"
	const { First_Operand, Display_Value, operator } = Calculator;

	const Value_of_Input = parseFloat(Display_Value);

	if (operator && Calculator.Wait_Second_Operand) {
		Calculator.operator = Next_Operator;
		return;
	}

	if (First_Operand == null) {
		Calculator.First_Operand = Value_of_Input;
	} else if (operator) {
		const Value_Now = First_Operand || 0;

		let result = Perform_Calculation[operator](Value_Now, Value_of_Input);

		result = Number(result).toFixed(9);

		result = (result * 1).toString();
		Calculator.Display_Value = parseFloat(result);
		Calculator.First_Operand = parseFloat(result);
	}
	Calculator.Wait_Second_Operand = true;
	Calculator.operator = Next_Operator;
}

// Perform the correct opperation for each mathematical operator
const Perform_Calculation = {
	"/": (First_Operand, Second_Operand) => First_Operand / Second_Operand,
	"*": (First_Operand, Second_Operand) => First_Operand * Second_Operand,
	"+": (First_Operand, Second_Operand) => First_Operand + Second_Operand,
	"-": (First_Operand, Second_Operand) => First_Operand - Second_Operand,
	"=": (First_Operand, Second_Operand) => Second_Operand,
};

// Reset the Calculator object
function Calculator_Reset() {
	Calculator.Display_Value = "0";
	Calculator.First_Operand = null;
	Calculator.Wait_Second_Operand = false;
	Calculator.operator = null;
}

// Ensure that the display is kept up to date
function Update_Display() {
	document.querySelector(".calculator-screen").value = Calculator.Display_Value;
}

Update_Display();

// Add eventListener to each key and handle click events
const keys = document.querySelector(".calculator-keys");
keys.addEventListener("click", (event) => {
	const { target } = event;

	// Do nothing if item clicked isn't a button
	if (!target.matches("button")) {
		return;
	}

	// Handle clicks on operator buttons
	if (target.classList.contains("operator")) {
		Handle_Operator(target.value);
		Update_Display();
		return;
	}

	// Handle AC button
	if (target.classList.contains("all-clear")) {
		Calculator_Reset();
		Update_Display();
		return;
	}

	Input_Digit(target.value);
	Update_Display();
});
