// variables to be used for the countdown and slideshow
var picNumber;
var counter;

// A dictionary of the pictures for the slideshow
var pictures = {
	1: "beach.jpg",
	2: "desert.jpg",
	3: "field.jpg",
	4: "forest.jpg",
	5: "lake.jpg",
};

// String variables to the pictures in the slideshow
var path = "./images/";
var openImgElement = "<img src=";
var closeImgElement = ">";

var openH1 = "<h1>";
var closeH1 = "</h1>";

// countdown() function
function countdown() {
	counter = document.getElementById("countdown").value; // Get the value submitted
	counter = parseInt(counter); // Convert it to a number

	slideshow(); // start the slideshow
}

function slideshow() {
	picNumber = counter; // Initialize a separate counter for the pictures

	// This ensures that the dicitionary element being accessed is always 1 - 5
	if (picNumber > 5) {
		picNumber % 5 == 0 ? (picNumber = 5) : (picNumber = picNumber % 5); // Ternary operator!
	}

	// Concat the path to the correct picture
	document.getElementById("slideshow").innerHTML = openImgElement.concat(
		path,
		pictures[picNumber], // The dictionary element here changes what picture is shown
		closeImgElement,
		openH1,
		counter,
		closeH1
	);

	// Decrement the counter
	counter--;

	// only continue the slideshow if the counter is >0
	if (counter > 0) {
		setTimeout(slideshow, 2000);
	}
}
