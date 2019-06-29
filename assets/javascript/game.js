//Array
var words = ["moon", "mars", "venus", "jupiter", "mercury", "artemis", "luna", "crystal"]

//Empty Variables 
var randomWord = "";
var lettersOfWord = []
var blanks = 0;
var blanksAndCorrect = [];

//Counter Variables
var wins = 0;
var losses = 0;
var guessesRemaining = 10;

//Starting Game Functions
function Game() {
    randomWord = words[Math.floor(Math.random() * words.length)];

    lettersOfWord = randomWord.split("");

    blanks = lettersOfWord.length;

    for (var i = 0; i < blanks; i++) {
        blanksAndCorrect.push("_");
    }

    document.getElementById("currentword").innerHTML = " " + blanksAndCorrect.join(" ");

}

//pic functions
var moon = document.getElementById("moon");
var mars = document.getElementById("mars");
var venus = document.getElementById("venus");
var jupiter = document.getElementById("jupiter");
var mercury = document.getElementById("mercury");
var artemis = document.getElementById("artemis");
var luna = document.getElementById("luna");
var crystal = document.getElementById("crystal");

function pic() {
    if (randomWord === words[0]) {
        document.getElementById("image").src = "./assets/images/moon.jpg";
    }
    else if (randomWord === words[1]) {
        document.getElementById("image").src = "./assets/images/mars.jpg";
    }
    else if (randomWord === words[2]) {
        document.getElementById("image").src = "./assets/images/venus.jpg";
    }
    else if (randomWord === words[3]) {
        document.getElementById("image").src = "./assets/images/jupiter.jpg";
    }
    else if (randomWord === words[4]) {
        document.getElementById("image").src = "./assets/images/mercury.jpg";
    }
    else if (randomWord === words[5]) {
        document.getElementById("image").src = "./assets/images/artemis.jpg";
    }
    else if (randomWord === words[6]) {
        document.getElementById("image").src = "./assets/images/luna.jpg";
    }
    else if (randomWord === words[7]) {
        document.getElementById("image").src = "./assets/images/crystal.jpg";
    }
};

//Reset Game Function
function reset() {
    guessesRemaining = 10;
    blanksAndCorrect = []
    wrongGuess = []
    Game ()
}

// [if/else] letter chosen matches random word
function checkLetters(letter) {
    var lettersOfWord = false;
    for (var i = 0; i < blanks; i++) {
        if (randomWord[i] == letter) {
            lettersOfWord = true;
        }
    }

// [if] letter false
if (lettersOfWord) {
    for (var i = 0; i < blanks; i++) {
        if (randomWord[i] == letter) {
            blanksAndCorrect[i] = letter;
        }
    }
}

//otherwise, wrong guesses reduce remaining guesses
else {
    wrongGuess.push(letter);
    guessesRemaining--;
}
};
