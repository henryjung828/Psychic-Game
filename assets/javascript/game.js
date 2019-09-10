
var letters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "_"];
var userWins = 0;
var userLoses = 0;
var guessLeft = 9;
var userGuess = [];
var eachofLetter = null;
var psychicGuess;
var letterToGuess;
var winsP = document.getElementById("wins");
var losesP = document.getElementById("loses");


document.onkeyup = function(event) {
        var userGuess = event.key; 
        letters.push(userGuess);
    
    
var psychicGuess = letters[Math.floor(Math.random() * letters.length)];

    function countGuessleft() {
        document.querySelector("#guessLeft").innerHTML = "Guess Left:" + guessLeft;
    }

    function  soFarUserGuessed () {
        document.querySelector("#letters").innerHTML = "Guess so Far:" + userGuess.join('');
       
    }
    countGuessleft = 9; 
    
}
    var restart = function() {
        countGuessleft = 9;
        userGuess = [];
        var psychicGuess = letters[Math.floor(Math.random() * letters.length)];
    }
    
    document.onkeyup = function(event) {    
        guessLeft--;
        
    var userGuess = String.fromCharCode(event.keyCode).toLowerCase();
    

    document.onkeyup = function(event) {
    var letters = event.key;
        GuessLeft();
        soFarUserGuessed();
    }    

    var psychicGuess = letters[Math.floor(Math.random() * letters.length)];
        if (userGuess === psychicGuess) {
             userWins++;
             document.querySelector("#wins").innerHTML = "Wins: " + userWins;
             restart();
         } else if (guessLeft === 0) {
             userLoses++;
             document.querySelector("#loses").innerHTML = "Loses: " + userLoses;
             restart();
        };    
    }