"use strict"
//--Vars--//
var wins = 0;
var losses = 0;
var guessesLeft = 5;
var guessesSoFar = [];
var compChoices = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];

document.onkeyup = function(event) {
var userChoice = String.fromCharCode(event.keyCode).toLocaleLowerCase();
var computerGuess = compChoices[Math.floor(Math.random()*compChoices.length)];
console.log(compChoices)
guessesSoFar.push(userChoice); 

// --Winning
if (userChoice === computerGuess){
  wins++;
  guessesLeft =5
  guessesSoFar.length
  getElementById("wins").innerHtml(wins)
};

// --Losing
else if (guessesLeft === 0){
  losses ++;
  guessesLeft = 5;
  guessesSoFar.length = 0;
  getElementById("losses").innerHtml(losses)
};

// --adding to incorrect guesses
else if (userChoice !== computerGuess){
  guessesLeft --;

};


};