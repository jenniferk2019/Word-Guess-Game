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

console.log(randomWord);
console.log(lettersOfWord);
console.log(blanks);
console.log(blanksAndCorrect);
}