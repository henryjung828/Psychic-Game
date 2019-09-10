
var letters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "_"];
var userWins = 0;
var userLoses = 0;
var guessLeft = 9;
var userGuessed = [];
var eachofLetter = null;
var psychicGuess;
var letterToGuess;
var winsP = document.getElementById("wins");
var losesP = document.getElementById("loses");


document.onkeyup = function(event) {
        var userGuess = event.key; 
    var userGuess = event.key; 
        var userGuess = event.key; 
            guessedLetters.push(userGuess);
    var psychicGuess = letters[Math.floor(Math.random() * letters.length)];

    function countGuessleft () {
        document.querySelector("#guessLeft").innerHTML = "Guess Left:" + guessLeft;
    }

    function soFarUserGuessed () {
        document.querySelector("#letters").innerHTML = "Guess so Far:" + userGuessed.join('');

    }
    
    function countGuessleft();

    var restart = function() {
        guessLeft = 9;
        userGuessed = [];
        var psychicGuess = letters[Math.floor(Math.random() * letters.length)];
    }
    document.onkeyup = function(event) {
        guessLeft--;
        
        var userGuess = String.fromCharCode(event.keyCode).toLowerCase();
        
        guessedLetter.push(userGuess);
        countGuessleft();
        soFarUserGuessed();

    var psychicGuess = letters[Math.floor(Math.random() * letters.length)];
        if (userGuess === psychicGuess) {
             userWin++;
             document.querySelector("#wins").innerHTML = "Wins: " + userWins;
             restart();
       } else if (guessLeft === 0) {
             userLoses++;
             document.querySelector("#loses").innerHTML = "Loses: " + userLoses;
             restart();
            };
             };    
            };  
  