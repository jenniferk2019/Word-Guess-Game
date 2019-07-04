//GAME SETUP--------------------------->

// Array
var words = ["moon", "mars", "venus", "jupiter", "mercury", "artemis", "luna", "crystal"];

// # of wins
var wins = 0;

// # of guesses remaining
var guessesRemain = 10;

// Tally letters guessed
var lettersGuessed = [];

// The currentWord
var currentWord = "";

// Spliting word into individual letters
var currentwordLetters = [];

// # of blank spaces in the word
var blankSpaces = 0;

// # of blank spaces and solved letter guesses
var blankandconfirmSpaces = [];

// Play the game********************************
// Split the length of the word by letter to create the blank spaces
function startGame () {
currentWord = words[Math.floor(Math.random() * words.length)];
currentwordLetters = words.split('');
blankSpaces = lettersGuessed.length;

// Hold number of blank spaces for the word
// Plug in a correct letter into the blank space
for (var i=0; i<blankSpaces; i++) {
    blankandconfirmSpaces [i] = "_";
}



// Reset the game when user guesses all the words in the array
// Reset the game when guessesRemain hits 0
}

