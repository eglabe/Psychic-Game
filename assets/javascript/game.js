var wins = 0;
var losses = 0;
var guessLeft = 9;

var computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]

document.onkeydown = function(guess) {

	var userGuess = guess.key;
	var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
	var letters = new Array();

	if (userGuess == computerGuess) {
		wins++;
		//game resets
	}
		else {
			guessLeft--;
			letters.push(guess.key);//pushes all of the letters

	if (guessLeft == 0) {
		losses++;
		//game resets
	}
}


var winsHTML = "Wins: " + wins;
document.querySelector("#wins").innerHTML = winsHTML;

var lossesHTML = "Losses: " + losses;
document.querySelector("#losses").innerHTML = lossesHTML;

var leftHTML = "Guesses Left : " + guessLeft;
document.querySelector("#left").innerHTML = leftHTML;

var lettersHTML = "Letters Guessed: " + letters;
document.querySelector("#letters").innerHTML = lettersHTML;



//console.log(userGuess);
//console.log(computerGuess);
console.log(letters);

}

//when a key is pressed:
	//computer picks a letter

	//if userGuess == computerGuess 
		//wins++
		//game restarts

	//else	
	//guessLeft--
	//letters is logged

	//if guessLeft = 0
		//game restarts




