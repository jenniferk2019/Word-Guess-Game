//GAME SETUP--------------------------->
$(document).ready(function() {

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

//Letter/word guesses left to be guessed_Main loop
while (remainingLetters > 0) {
//Show player progress
document.getElementById("wordblank").innerHTML = anserArray.join("");
//Get a guess from player
var guess = prompt("Guess a letter!");
//If left blank
if (guess === null) {
    //exit game
    break;
//If guess is more than one letter or no letters
}else if (guess.length !== 1) {
    //alert to guess single letter
    alert("Enter a single letter");
//If correct guess update game state with player guess
}else{
    for (var j = 0; j < word.length; j++ ) { 
//If the letter guessed is in word at this point
if (word[j] === guess) {
//Update answerArray with letter guessed at this point
    answerArray[j] = guess;
//Then subject one form remaining letters
remainingLetters--;
}
}
}
//***********END OF MAIN GAME LOOP *******************/
}
//Let player know word
alert(answerArray.join(" "));
//Congratulate the player
alert("Good job Sailor Scout!" + word);