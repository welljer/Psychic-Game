"use strict"
// Array
var computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

// variables//
var wins = 0;
var losses = 0;
var guessesLeft = 10;
var lettersGuessed = [];
var computerGuess = [];

// Function for letter to be guessed//

var compGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
	computerGuess.push(compGuess);
    console.log(computerGuess[0]);


// User choice of letter//
document.onkeyup = function(event) {
	var playerGuess = event.key;
	lettersGuessed.push(playerGuess);
    console.log(computerGuess[0]);
    
    if ((playerGuess === computerGuess[0]) && (guessesLeft > 0)) {
        wins++;
        guessesLeft = 10;
        lettersGuessed.length = 0;
        computerGuess.length = 0;
        var compGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
        computerGuess.push(compGuess);
        console.log(computerGuess[0]);
    }
    
    else if ((playerGuess !== computerGuess[0]) && (guessesLeft > 0)) {
        guessesLeft = guessesLeft-1;
    }
    
    else {
        losses++;
        guessesLeft = 10;
        lettersGuessed.length = 0;
        computerGuess.length = 0;
        var compGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
        computerGuess.push(compGuess);
        console.log(computerGuess[0]);
    }
    
    var html = "<p>Guess the letter to win</p>" +
              "<p>Wins: " + wins + "</p>" +
              "<p>Losses: " + losses + "</p>" +
              "<p>Guesses left: " + guessesLeft + "</p>" +
              "<p>Guesses so far: " + lettersGuessed + "</p>";
     
    document.querySelector("#game").innerHTML = html
}