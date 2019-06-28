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

