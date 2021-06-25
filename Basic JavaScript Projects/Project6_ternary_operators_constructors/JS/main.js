// Person constructor
function Person(name, age) {
	this.name = name;
	this.age = age;
	this.greet = function () {
		return this.name + " is " + this.age + " years old.";
	};
}

// This function is called when the 'Submit' button is clicked
// It takes input from the screen and creates a Person object
function makePerson() {
	var name = document.getElementById("name").value;
	var age = document.getElementById("age").value;
	var person = new Person(name, age);

	var descPerson = person.greet();

	// Nested function
	if (oldEnoughToVote(person)) {
		descPerson += " They are old enough to vote.";
	} else {
		descPerson += " They are NOT old enought to vote.";
	}

	document.getElementById("desc_person").innerHTML = descPerson;
}

// This function uses a ternary operator
function oldEnoughToVote(per) {
	var ofAge;
	per.age >= 18 ? (ofAge = true) : (ofAge = false); // Ternary operator
	return ofAge;
}
