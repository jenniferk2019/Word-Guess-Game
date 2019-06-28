// Array
var words = ["moon", "star", "mars", "venus", "jupiter", "mercury", "artemis", "tuxedo", "luna", "crystal", "power", "love", "sailor"];

// pick random
var word = words[Math.floor(Math.random() * words.length);

// answer array
var answerArray = [];
for (var i = 0; i < wordL.length; i++) {
    answerArray[i] = "_";
}

var remainingLetters = word.length;

// game loop [?]
while (remainingLetters > 0) {

    // player progress [?]
    alert(answerArray.join(" "));

    // player guess

    var guess = prompt("Guess a letter.");

    if (guess === null) {
        // exit game
        break;
    } else if (guess.length !== 1) {
        alert("Enter a letter.");
    } else {
        // update game state with new guess
        for (var j = 0; j < word.length; j++) {
            if (word[j] === guess) {
                answerArray[j] = guess;
                remainingLetters--;
            }
        }
    }
}

// show answer and congratulate player
alert(answerArray.join(" "));
alert("Good job Sailor Scout!" + word);
