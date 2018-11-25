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
console.log(computerGuess)
guessesSoFar.push(userChoice); 

// --Winning
if (userChoice === computerGuess){
  wins++;
  // --adding to incorrect guesses
}else {
    guessesLeft --;
  }
// --Losing
if (guessesLeft = 5) {
    guessesLeft === 0;
    losses ++;
  };
        document.getElementById("wins").innerHtml = "wins" + wins ;
        document.getElementById("losses").innerHtml ="losses" + losses;
        document.getElementById("guessesLeft").innerHTML = "Guesses left: " + guessesLeft;
        document.getElementById("guessesSoFar").innerHTML = "Guesses So Far :" + guessesSoFar;
};
