var wins = 0;
var losses = 0;
var guessLeft = 9;

var computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]

document.onkeydown = function(guess) {

	var userGuess = guess.key;
	var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
	var letters = [];

	if (userGuess == computerGuess) {
		wins++;
		//game resets
	}

	else {
		guessLeft--;
		letters.push(guess.key);
}

var html = "Wins: " + wins + 
	"<br> Losses: " + losses + 
	"<br> Guesses Left: " + guessLeft + 
	"<br> Letters Guessed: " + letters;
document.querySelector("div").innerHTML = html;

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

	//if losses = 0
		//game restarts




