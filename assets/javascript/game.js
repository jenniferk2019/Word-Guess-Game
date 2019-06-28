// Array
var words = ["moon", "star", "mars", "venus", "jupiter", "mercury", "artemis", "tuxedo", "luna", "crystal", "power", "love", "sailor"];

// pick random
var word = words[Math.floor(Math.random() * words.length)];

// generate blanks for the number of letters within the word
var answerArray = [];
for (var i = 0; i < word.length; i++) {
    answerArray.push("_");
}
// display number of blanks by using answerArray
var remainingLetters = word.length;

//wait for user to press a key

// when user presses key compare letter press with each letter in 'word', as long as the user has not pressed the same key before, also if it's not in our answerArray. 

// if at least one instance of the letter in the word we don't want to mark as wrong guess. However, if there are more instances of the letter in the word, we need to check it against each letter in the word.

// If there is no instance of the letter in the word after checking it against the full word, we want to lower the remaining guesses by one AND add it to an array of already guessed letters.

// check if any blanks left in answerArray. If blanks are left, wait for another key press. If there are no blanks left, increase win counter by 1 and reset the game. 

// Things to do to reset a game:

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
