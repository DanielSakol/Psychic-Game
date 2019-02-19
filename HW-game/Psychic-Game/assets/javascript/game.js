//array of all letters
var allLetters = ["q, w, e, r, t, y, u, i, o, p, a, s, d, f, g, h, j, k, l, z, x, c, v, b, n, m"];

//for loop
//for (var i = 0; i < allLetters.length; i++) {
//    console.log("Every Letter" + allLetters[i]);}

//var for wins, losses, computer guess, guesses-left, and guesses-so-far
var wins= 0;
var losses= 0;
var computerGuess= [];
var userGuess= [];
var guessesLeft = 9;
var guessesSoFar = [];


//document.getElements to pair html p's
var directionsText = document.getElementById("directions-text");
var userChoiceText = document.getElementById("userchoice-text");
var computerGuessText = document.getElementById("computer-guess-text");
var winsText = document.getElementById("wins-text");
var lossesText = document.getElementById("losses-text");
var guessesLeftText = document.getElementById("guesses-left-text");
var guessesSoFarText = document.getElementById("guesses-so-far-text");



//on key up and event key
document.onkeyup = function(event) {
var userGuess = event.key;
guessesSoFar.push(userGuess);
var cpuGuess = allLetters[Math.floor(Math.random()*allLetters.length)];
//make reset function
var reset = function() {
    guessesLeft = 9;
    guessesSoFar = [];
    var cpuGuess = allLetters[Math.floor(Math.random()*allLetters.length)];
    
  }
  

console.log(event.key);
//randomize cpu guess 

guessesSoFar.push(userGuess);
console.log(computerGuess);
{
if ((userGuess === computerGuess) && (guessesLeft > 0)){
    wins++;
    document.querySelector('#wins').textContent = "Wins: " + wins;
    reset();
    //resetGame();

}else if ((userGuess !== computerGuess) && (guessesLeft > 0)) {
    guessesLeft = guessesLeft-1;
    

}else 
    losses++;
    reset();
    //resetGame();
}


//display guesses
winsText = document.getElementById("wins-text");
var toDisplay = "Wins: " + wins;
winsText.textContent = toDisplay;

lossesText = document.getElementById("losses-text");
var toDisplay = "Losses: " + losses;
lossesText.textContent = toDisplay;

guessesSoFarText = document.getElementById("guesses-so-far-text");
var toDisplay = "Guesses so Far: " + guessesSoFar
guessesSoFarText.textContent = toDisplay;

guessesLeftText = document.getElementById("guesses-left-text");
var toDisplay = "Guesses Left: " + guessesLeft
guessesLeftText.textContent = toDisplay;
}



//userChoiceText.textContent = "You Chose: " + userGuess;

