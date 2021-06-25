document.write("<h1>Click to reveal the answers:</h1>");

// Define a number a string variable
var num = 55;
var strNum = "55";

// Show the type of each variable
function showType() {
	document.getElementById("num").innerHTML = typeof num;
	document.getElementById("strNum").innerHTML = typeof strNum;
}

// Show the value of each variable
function showVal() {
	document.getElementById("numVal").innerHTML = num;
	document.getElementById("strNumVal").innerHTML = strNum;
}

// Demonstrate type coercion
function typeCoerce() {
	document.getElementById("coerce2").innerHTML = strNum + num;
	document.getElementById("coerce1").innerHTML = strNum + num;
	document.getElementById("typeOfCoerce").innerHTML = typeof (strNum + num);
}

// Demonstrate the difference between == and ===
function showEq() {
	document.getElementById("doubEq").innerHTML = num == strNum;
	document.getElementById("triEq").innerHTML = num === strNum;
}

// Demonstrate > and <
function gtAndlt() {
	document.getElementById("gt").innerHTML = num > strNum;
	document.getElementById("lt").innerHTML = num < strNum;
}

// Demonstrate some logical operators
function showLogic() {
	var leftOpr = num == strNum; // separate the left operand
	var rightOpr = num > strNum; // separate the right operand
	document.getElementById("and").innerHTML = leftOpr && rightOpr; // demonstrate logical AND
	document.getElementById("or").innerHTML = leftOpr || rightOpr; // demonstrate logical OR
	document.getElementById("not").innerHTML = !true; // demonstrate logical NOT
}
