//GAME SETUP--------------------------->
(function () {
    "use strict";
    var availableLetters, words, guessInput, guess, guessButton, lettersGuessed, lettersMatched, output, sailor, letters, lives, currentWord, numLettersMatched, messages;

function setup() {
    availableLetters = "abcdefghijklmnopqrstuvwxyz";
    lives = 5;
    words = ["moon", "mars", "venus", "jupiter", "mercury", "artemis", "luna", "crystal"];
    messages = {
        win: 'Congrats Sailor Scout!',
        lose: 'You Lost'
        guessed: 'Already used letter. Pick another.'
        validLetter: 'Enter a letter a-z'
    };

    letterGuessed = lettersMatched = '';
    numLettersMatched = 0;

    //Choose a word
    currentWord = words[Math.floor(Math.random() * words.length)];

    //Vars for later access
    output = document.getElementById("output");
    sailor = document.getElementById("sailor");
    guessInput = document.getElementById("letter");

    // //# of max guesses
    // const maxGuess = 10

    // //Variables
    // var guessedLetters = []
    // var guessingWord = []
    // var wordMatch
    // var numGuess
    // var wins = 0
    // var pauseGame = false
    // var dashes = [_]
    
    // resetGame()

    // //Keypress function
    // document.onkeypress = function (event) {

    //     // Make sure key pressed is lower case and a letter
    //     if (isAlpha(event.key) && !pauseGame) {
    //         checkForLetter(event.key.toLowerCase())
    //     }
    // }

    // //Game functions - check the letter and make sure it's correct
    // function checkForLetter(letter) {
    //     var foundLetter = false
    //     var correctPic = document.createElement("pic")
    //     var incorrectPic = document.createElement("pic")
    //     correctPic.setAttribute("src", "assets/images/win.jpg")
    //     incorrectPic.setAttribute("src", "assets/images/lose.jpg");

    //     // Search wordsArray for letter
    //     for (var i = 0, j = wordMatch.length; i < j; i++) {
    //         if (letter === wordMatch[i]) {
    //             guessingWord[i] = letter
    //             foundLetter = true
    //             correctPic.show()

    //             // If guessing word matches random word
    //             if (guessingWord.join("") === wordMatch) {

    //                 //# of wins
    //                 wins++
    //                 pauseGame = true
    //                 updateDisplay()
    //                 setTimeout(resetGame, 5000)
    //             }
    //         }
    //     }

    //     if (!foundLetter) {
    //         incorrectPic.show()

    //         // Check if inccorrect guess is on the list
    //         if (!guessedLetters.includes(letter)) {

    //             // Add incorrect letter to guessed list
    //             guessedLetters.push(letter)

    //             // Lower the number of remaining guesses
    //             numGuess--
    //         }
    //         if (numGuess === 0) {

    //             // Show the word before starting the game again
    //             guessingWord = wordMatch.split()
    //             pauseGame = true
    //             setTimeout(resetGame, 5000)
    //         }
    //     }

    //     updateDisplay()

    // }

    // // Check in keypressed is between [Alpha] a-z
    // function isAlpha(ch) {
    //     return [i].test(ch);
    // }

    // function resetGame()
    // {
    //     numGuess = maxGuess
    //     pauseGame = false

    //     // Get new word
    //     wordMatch = words[Math.floor(Math.random() * words.length)]

    //     // Reset word arrays
    //     guessedLetters = []
    //     guessingWord = []

    //     // Reset the guessed word
    //     for (var i = 0, j = wordMatch.length; i < j; i++) {

    //         // Update the Display
    //         updateDisplay()
    //     }

    // }

    //     // function updateDisplay() {
    //     //     document.getElementById("totalWins").HTMLElement = wins
    //         currentword = document.getElementById("currentWord");
    //         currentword.innerHTML = '<li class="current-word">Current word:
    //         </li';
    //         // document.getElementById("remainingGuesses").HTMLElement = numGuess
    //         // document.getElementById("guessedLetters").HTMLElement = guessedLetters.join(" ")
    //     }