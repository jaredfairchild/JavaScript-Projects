var subName;
var bday;
var color;
var num;

var days = [
	"Sunday",
	"Monday",
	"Tuesday",
	"Wednesday",
	"Thursday",
	"Friday",
	"Saturday",
];

function collectData() {
	subName = document.getElementById("name").value;

	bday = document.getElementById("bday").value;
	var date = getDateObj(bday);

	color = document.getElementById("color").value;
	setColor(color);

	num = document.getElementById("number").value;

	var data = welcomeMsg(subName, date);

	document.getElementById("presentData").innerHTML = data;
}

// This function uses .concat() to create a message.
function welcomeMsg(name, date) {
	var msg1 = "Hello ";
	var msg2 = "<br>Did you know that your birthday was on a ";
	var dayOfWeek = days[date.getDay()];
	var msg3 = "?";

	var finalMsg = msg1.concat(name, msg2, dayOfWeek, msg3);
	return finalMsg;
}

// This function uses .slice() to get the value of the Birthday input
// and then parses the integers to create a Date object
function getDateObj(dateString) {
	var year = dateString.slice(0, 4);
	var month = dateString.slice(5, 7);
	var day = dateString.slice(8, 10);

	var d = new Date(year, month - 1, day);
	return d;
}

// This function takes the submitted color and sets that as the
// background color for the message.
function setColor(col) {
	document.getElementById("presentData").style.backgroundColor = col;
}

// This function picks a random number
// uses .toPrecision() to limit it to 4 digits,
// then uses .toString() to convert it to a String
// then puts it in the appropriate field when it gains focus
function fillRando() {
	var randomNum = Math.random() * 1000;
	var preciseNum = randomNum.toPrecision(4);
	var numString = preciseNum.toString();
	document.getElementById("number").value = numString;
}
