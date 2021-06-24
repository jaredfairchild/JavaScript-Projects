function printDict() {
	// My daughters lizard represented as a JavaScript dictionary
	var pet = {
		name: "Lola",
		species: "Bearded Dragon",
		color: "dark brown",
		favoriteFood: "crickets",
	};

	// She'll be sad that her favorite food is deleted
	delete pet.favoriteFood;

	// Concatenate the dictionary values into a single string
	var about =
		pet.name +
		" is a " +
		pet.color +
		" " +
		pet.species +
		" and her favorite food is " +
		pet.favoriteFood +
		".";

	// Write the string to the window.
	document.getElementById("Dictionary").innerHTML = about;
}
