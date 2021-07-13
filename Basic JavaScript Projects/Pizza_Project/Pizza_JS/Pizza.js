// This object sets the prices for pizza sizes
let sizes = {
	"Personal Pizza": 6,
	"Small Pizza": 8,
	"Medium Pizza": 10,
	"Large Pizza": 12,
	"Extra Large Pizza": 14,
};

// This function is used to reset the order to default values.
let toppings, orderTotal, orderDesc;

function resetOrder() {
	toppings = [];
	orderTotal = 0;
	orderDesc = "<h3>Please select a size and toppings.</h3>";
}

// This function sets the toppings array to only those selected
function getToppings() {
	let pickedToppings = document.getElementsByClassName("toppings");
	for (var i = 0; i < pickedToppings.length; i++) {
		if (pickedToppings[i].checked) {
			toppings.push(pickedToppings[i].value);
		}
	}

	orderTotal = toppings.length;
}

// This function is called when the button is clicked
function getReceipt() {
	// Reset the order
	resetOrder();

	// Get the toppings
	getToppings();

	// Order toppins are added to this String
	var text1 = "<h3>Your Order:</h3>";

	var size = document.getElementsByClassName("size");
	var pickedSize;

	// Determine which size option is selected
	for (var i = 0; i < size.length; i++) {
		if (size[i].checked) {
			pickedSize = size[i].value;
		}
	}

	text1 += pickedSize + "<br>";

	for (var i = 0; i < toppings.length; i++) {
		text1 = text1 + toppings[i] + "<br>";
	}

	// Show different text if a size isn't selected
	if (pickedSize == null) {
		showOrder(0); // Pass a value of 0 if a size isn't selected
	} else {
		orderTotal += sizes[pickedSize];
		orderDesc = text1;
		showOrder(orderTotal);
	}
}

// Put the order on the screen
function showOrder(price) {
	document.getElementById("order").innerHTML = orderDesc;

	// Only show the price if options are picked
	if (price > 0) {
		document.getElementById("price").innerHTML = "Total: $" + price + ".00";
	}
}
