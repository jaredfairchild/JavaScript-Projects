document.write("<h1>Click to reveal the answers:</h1>");

var num = 55;
var strNum = "55";

function showType() {
	document.getElementById("num").innerHTML = typeof num;
	document.getElementById("strNum").innerHTML = typeof strNum;
}

function showVal() {
	document.getElementById("numVal").innerHTML = num;
	document.getElementById("strNumVal").innerHTML = strNum;
}

function typeCoerce() {
	document.getElementById("coerce2").innerHTML = strNum + num;
	document.getElementById("coerce1").innerHTML = strNum + num;
	document.getElementById("typeOfCoerce").innerHTML = typeof (strNum + num);
}

function showEq() {
	document.getElementById("doubEq").innerHTML = num == strNum;
	document.getElementById("triEq").innerHTML = num === strNum;
}

function gtAndlt() {
	document.getElementById("gt").innerHTML = num > strNum;
	document.getElementById("lt").innerHTML = num < strNum;
}

function showLogic() {
	var leftOpr = num == strNum;
	var rightOpr = num > strNum;
	document.getElementById("and").innerHTML = leftOpr && rightOpr;
	document.getElementById("or").innerHTML = leftOpr || rightOpr;
	document.getElementById("not").innerHTML = !true;
}
