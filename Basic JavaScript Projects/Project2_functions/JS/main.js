// Get the text within the p element and store in a variable
var para = document.getElementById("para").innerText;

// Double the paragraph each time the button is clicked
function double() {
	para += para;
	document.getElementById("para").innerHTML = para;
}
