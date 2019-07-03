//GAME SETUP--------------------------->

    //Array
    var words = ["moon", "mars", "venus", "jupiter", "mercury", "artemis", "luna", "crystal"]
 
    //# of max guesses
    const maxGuess = 10
 
    // Empty variables
    var guessedLetters = []
    var guessingWord = []
    var wordMatch = 0;
    var numGuess = 0;
    var wins = 0;
 
    // resetGame() ?Do I reset here??
 
    //Keypress function - when the user hits a letter it adds to the blank word
    document.onkeypress = function (event) {
 
    //Game functions - check the letter  to see if matched in the word in the array and make sure it's correct then
    
    //Populate images to let user know they either guessed the word correct or got it wrong.

        correctPic.setAttribute("src", "assets/images/win.jpg")
        incorrectPic.setAttribute("src", "assets/images/lose.jpg");
 
        // Using for loop to search wordsArray for letter
        for (var i = 0, j = wordMatch.length; i < j; i++) {
            if (letter === wordMatch[i]) {
 
        // If guessing word matches random word
                if (guessingWord.join("") === wordMatch) {
 
        // Populate # of wins & losses
 
        // Check if inccorrect guess is on the list
            if () {

                else ()

                else if ()
 
        // Add incorrect letter to guessed list
 
        // Lower the number of remaining guesses
 
        // Show the word before starting the game again
 
        // Get new word
        wordMatch = words[Math.floor(Math.random() * words.length)];
 
        // Reset word arrays
       
    // Reset () ??Do I reset game here??

    // Update the Display
        }
 
        function updateDisplay() {
            document.getElementById("totalWins").textContent = wins;
            document.getElementById("currentWord").innerText = guessingWord.join("")
            document.getElementById("remainingGuesses").innerText = numGuess
            document.getElementById("guessedLetters").innerText = guessedLetters.join(" ")
        } updateDisplay()

        // Reset game here ??
    )};