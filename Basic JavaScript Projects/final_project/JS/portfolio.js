// Open the contact form
function openForm() {
	document.getElementById("myForm").style.display = "block";
}

// Close the contact form
function closeForm() {
	document.getElementById("myForm").style.display = "none";
}

// Display first image when page loads
var slideIndex = 1;
showSlides(slideIndex);

// Move through the slideshow with the arrow buttons
function plusSlides(n) {
	showSlides((slideIndex += n));
}

// Move throught the slideshow with the navigation dots
function currentSlide(n) {
	showSlides((slideIndex = n));
}

// Primary function for slideshow
function showSlides(n) {
	var slides = document.getElementsByClassName("mySlides"); // All of the slide elements
	var dots = document.getElementsByClassName("dot"); // All of the navigation dots

	// Set slideIndex to 1 if it's greater than the lenght of slides array.
	// This allows you to "wrap around" back to the first slide from the end
	if (n > slides.length) {
		slideIndex = 1;
	}

	// Set slideIndex to the last slide if n is less than 1
	// This allows you to "wrap around" from the first slide to the last slide
	if (n < 1) {
		slideIndex = slides.length;
	}

	// Hide all of the slides
	for (i = 0; i < slides.length; i++) {
		slides[i].style.display = "none";
	}

	// Remove the "active" style from all of the navigation dots
	for (i = 0; i < dots.length; i++) {
		dots[i].className = dots[i].className.replace(" active", "");
	}

	// Display only the correct slide
	slides[slideIndex - 1].style.display = "block";
	// Set the appropriate navigation dot to "active"
	dots[slideIndex - 1].className += " active";
}
