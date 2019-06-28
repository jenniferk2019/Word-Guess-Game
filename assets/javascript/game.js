// // Creates an array that lists out all of the options (Rock, Paper, or Scissors).
var wordList = ["moon", "star", "mars", "venus", "jupiter", "mercury", "artemis", "tuxedo", "luna", "crystal", "power", "love", "sailor"];

var wordChoice = wordList[Math.floor(Math.random() * wordList.length);

var answerArray = [];
for (var i = 0; i < wordList.length; i++) {
    answerArray[i] = "_";
}
var remainingLetters = word.length;

while (remainingLetters > 0) {
    // Game code goes here
    // Show the player their progress
    // Take input from the player
    // Update answerArray and remainingLetters for every correct guess
}

alert(answerArray.join(" "));

var guess = prompt("Guess a letter");
if (guess === null) {
    break;
} else if (guess.length !== 1) {
    alert("Enter a letter.");
} else {
    for (var j = 0; j < word.length; j++) {
    if (word[j] === guess) {
     answerArray[j] = guess;
    remainingLetters--;
     }
    }
}


// var answerArray = [];
// for (var i = 0; i < word.length; i++) {
//  answerArray[i] = "_";
// }

// var remainingLetters = word.length;
// while (remainingLetters > 0) {
//     // Game code goes here
//     // Show the player their progress
//     // Take input from the player
//     // Update answerArray and remainingLetters for every correct guess
//    }

// // Creating variables to hold the number of wins, losses, and ties. They start at 0.
// var wins = 0;
// var guessesremain = 0;
// var alreadyguessed = 0;

// // Create variables that hold references to the places in the HTML where we want to display things.
// var directionsText = document.getElementById("directions-text");
// var winsText = document.getElementById("wins-text");
// var userchoiceLetter = document.getElementById("userchoice-letter");
// var guessesremainText = document.getElementById("guessesremain-text");
// var alreadyguessedText = document.getElementById("alreadyguessed-text");


// };
//   </script >