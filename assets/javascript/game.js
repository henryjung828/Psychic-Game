
var letters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "_"];
var userWins = 0;
var userLoses = 0;
var guessLeft = 0;
var userGuess;
var psychicGuess;
var letterToGuess;
var guessedletter; = [];


document.onkeyup = function(event) {
    var userGuess = event.key; 
        guessedLetters.push(userGuess);
    var psychicGuess = letters[Math.floor(Math.random() * letters.length)];
        if (userGuess === psychicGuess) {
             userWin++;
        guessesLeft = 25;
       } else {
           guessLeft--;
       }
       if (guessLeft === 0) {
           userLoses++;
           guessesLeft = 25; 
           // just added a random number ask in class
       }
    }

  var winsP = document.getElementById("wins");
  var losesP = document.getElementById("loses");
  var guessLeft = document.getElementById("guessLeft");
  var letterGuessed = document.getElementById("guessed");


// function adder(x,y,z) {

//     function consoleInside(letters) {
//          for (var i = 0; i < letters.length; i++) {
//             console.log(letters[i]);
//         };

     directionsText.textContent = "";
     userChoiceText.textContent = "You chose: " + userGuess;
     computerChoiceText.textContent = "The computerchose: " + psychicGuess;
     winsText.textContent = "wins: " + userWins;
     lossesText.textContent = "losses: " + userLoses;

//     };
// };