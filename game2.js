var wins = 0;
var losses = 0;
var guessLeft = 9;
var letters = []; //letters guessed

var computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];

var validChoice = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

		console.log(computerGuess);
		console.log(guessLeft);

function reset () {
	guessLeft = 9;
	letters = [];
	computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
	leftHTML = "Guesses Left : " + guessLeft;
	lettersHTML = "Letters Guessed: " + letters;

	document.querySelector("#left").innerHTML = leftHTML;
	document.querySelector("#letters").innerHTML = lettersHTML;

			console.log(computerGuess);

}

//the function which runs when user pushes a key
document.onkeydown = function(guess) {

	var userGuess = guess.keyCode;

	if (userGuess == validChoice){
		alert(success);
	}

	(guess.keyCode >= 65 && guess.keyCode <= 90);

	if  (userGuess == computerGuess) {

		alert("you won");
	}



	//Inserts variable values into DOM
	var winsHTML = "Wins: " + wins;
	document.querySelector("#wins").innerHTML = winsHTML;

	var lossesHTML = "Losses: " + losses;
	document.querySelector("#losses").innerHTML = lossesHTML;

	var leftHTML = "Guesses Left : " + guessLeft;
	document.querySelector("#left").innerHTML = leftHTML;

	var lettersHTML = "Letters Guessed: " + letters;
	document.querySelector("#letters").innerHTML = lettersHTML;

}





