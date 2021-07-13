// This object sets the prices for pizza sizes
let sizes = {
	"Personal Pizza": 6,
	"Small Pizza": 8,
	"Medium Pizza": 10,
	"Large Pizza": 14,
	"Extra Large Pizza": 16,
};

// This function is used to reset the order to default values.
let toppings, orderTotal, orderDesc;

function resetOrder() {
	toppings = [];
	orderTotal = 0;
	orderDesc = "";
}

// This function sets the toppings array to only those selected
function getToppings() {
	let pickedToppings = document.getElementsByClassName("toppings");
	for (var i = 0; i < pickedToppings.length; i++) {
		if (pickedToppings[i].checked) {
			toppings.push(pickedToppings[i].value);
		}
	}

	orderTotal = toppings.length > 0 ? toppings.length - 1 : 0;
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

	console.log(pickedSize + " = $" + sizes[pickedSize] + ".00");
	text1 += pickedSize + "<br>";

	for (var i = 0; i < toppings.length; i++) {
		text1 = text1 + toppings[i] + "<br>";
		console.log("topping selected: " + toppings[i]);
	}

	console.log("total toppings: " + toppings.length);

	console.log(
		toppings.length + " topping(s) - 1 free topping = $" + orderTotal + ".00"
	);

	// Show different text if a size isn't selected
	orderTotal += sizes[pickedSize];
	console.log("Order Total: $" + orderTotal + ".00");
	orderDesc = text1;
	showOrder(orderTotal);
}

// Put the order on the screen
function showOrder(price) {
	document.getElementById("order").innerHTML = orderDesc;
	document.getElementById("price").innerHTML = "Total: $" + price + ".00";
}
