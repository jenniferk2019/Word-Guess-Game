//GAME SETUP--------------------------->

//Array
var words = ["moon", "mars", "venus", "jupiter", "mercury", "artemis", "luna", "crystal"]

//Pick a random word from Array
var word = words[Math.floor(Math.random() * words.length)];

//Sets answerArray to show lettersin word by using [_]s
//a. answerArray is empty
var answerArray = [];
//b. answerArray loop to match length of word
for (var i = 0; i < word.length; i++) {
//c. sets underscore for word
    answerArray[i] = "_";
}

//Holding number of remainingLetters to be guessed
var remainingLetters = word.length;


//*************** MAIN GAME *******************************//

//Guesses left to be guessed_Main loop
while (remainingLetters > 0)

// //Empty Variables 
// var word = "";
// var lettersOfWord = []
// var blanks = 0;
// var blanksAndCorrect = [];

// //Counter Variables
// var wins = 0;
// var losses = 0;
// var guessesRemaining = 10;

// //Starting Game Functions
// function Game() {
    

//     lettersOfWord = randomWord.split("");

//     blanks = lettersOfWord.length;

//     for (var i = 0; i < blanks; i++) {
//         blanksAndCorrect.push("_");
//     }

//     document.getElementById("currentword").innerHTML = " " + blanksAndCorrect.join(" ");

// }

// //Pic functions
// var moon = document.getElementById("moon");
// var mars = document.getElementById("mars");
// var venus = document.getElementById("venus");
// var jupiter = document.getElementById("jupiter");
// var mercury = document.getElementById("mercury");
// var artemis = document.getElementById("artemis");
// var luna = document.getElementById("luna");
// var crystal = document.getElementById("crystal");

// function pic() {
//     if (randomWord === words[0]) {
//         document.getElementById("image").src = "./assets/images/moon.jpg";
//     }
//     else if (randomWord === words[1]) {
//         document.getElementById("image").src = "./assets/images/mars.jpg";
//     }
//     else if (randomWord === words[2]) {
//         document.getElementById("image").src = "./assets/images/venus.jpg";
//     }
//     else if (randomWord === words[3]) {
//         document.getElementById("image").src = "./assets/images/jupiter.jpg";
//     }
//     else if (randomWord === words[4]) {
//         document.getElementById("image").src = "./assets/images/mercury.jpg";
//     }
//     else if (randomWord === words[5]) {
//         document.getElementById("image").src = "./assets/images/artemis.jpg";
//     }
//     else if (randomWord === words[6]) {
//         document.getElementById("image").src = "./assets/images/luna.jpg";
//     }
//     else if (randomWord === words[7]) {
//         document.getElementById("image").src = "./assets/images/crystal.jpg";
//     }
// };

// //Reset Game Function
// function reset() {
//     guessesRemaining = 10;
//     blanksAndCorrect = []
//     wrongGuess = []
//     Game()
// }

// // [if/else] letter chosen matches random word
// function checkLetters(letter) {
//     var lettersOfWord = false;
//     for (var i = 0; i < blanks; i++) {
//         if (randomWord[i] == letter) {
//             lettersOfWord = true;
//         }
//     }

//     // [if] letter false
//     if (lettersOfWord) {
//         for (var i = 0; i < blanks; i++) {
//             if (randomWord[i] == letter) {
//                 blanksAndCorrect[i] = letter;
//             }
//         }
//     }

//     //Otherwise, wrong guesses reduce remaining guesses
//     else {
//         wrongGuess.push(letter);
//         guessesRemaining--;
//     }
//     //Final Functions - check if the player won
//     function complete() {
//         console.log("wins:" + wins + "| losses:" + losses + "| guesses left:" + guessesRemaining)

//         //If player wins display image and reset new round
//         if (lettersOfWord.toString() == blanksAndCorrect.toString()) {
//             wins++;
//             img()
//             reset()

//             //Display wins
//             document.getElementById("winstracker").innerHTML = " " + wins;

//             //If LOST reset new round
//         } else if (guessesRemaining === 0) {
//             losses++;
//             reset()
//             document.getElementById("losstracker").innerHTML = " " + losses;
//         }

//             //Display losses on screen && guesses remaining countdown
//         document.getElementById("currentword").innerHTML = "  " + blanksAndCorrect.join(" ");
//         document.getElementById("guessesremaining").innerHTML = " " + guessesRemaining;
//     }
//     //Start game functions
//     Game()

//     document.onkeyup = function (event) {
//         var guesses = String.fromCharCode(event.keyCode).toLowerCase();
//         checkLetters(guesses);
//         complete();

//         console.log(guesses);

//         //Save incorrect letters on screen
//         document.getElementById("playerguesses").innerHTML = "  " + wrongGuess.join(" ");
//     };