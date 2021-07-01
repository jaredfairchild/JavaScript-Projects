let person;
// Write a function that utilizes a while loop
function whileLoop() {
	var i = 0;
	while (i < person.greeting().length) {
		document.getElementById("while").innerHTML = person.greeting().slice(0, i);
		i++;
	}
}

// Write a function that utilizes a for loop
function forLoop() {
	for (var i = 0; i < person.greeting().length; i++) {
		document.getElementById("for").innerHTML = person.greeting().slice(0, i);
	}
}

// Write a function that utilizes an array
function useArray() {
	var foods = [
		"tacos",
		"pizza",
		"spagetti",
		"sushi",
		"barbeque",
		"cheesburgers",
		"chicken nuggets",
		"peanut butter and jelly sandwich",
		"ice cream",
		"fried eggs",
	];

	var random = Math.floor(Math.random() * 10);
	document.getElementById("array").innerHTML =
		"Random food: " + foods[random] + "<br>";
}

function makePerson() {
	// Create an object using the “let” keyword
	person = {
		name: document.getElementById("name").value,
		dob: document.getElementById("dob").value,
		favorite_food: document.getElementById("food").value,
		greeting: function () {
			return (
				"Hello! My name is " +
				this.name +
				". I like " +
				this.favorite_food +
				" and plan to have some on my birthday which is " +
				this.dob +
				"."
			);
		},
		sliceGreeting: function (a, b) {
			return this.greeting().slice(a, b);
		},
	};

	document.getElementById("greet").innerHTML =
		"<p>" + person.greeting() + "</p>";

	useArray();
	whileLoop();
	forLoop();
}
