// Hangman Game Pseudocode

// 1. Create array that has the words that the user will guess

var hangmanWords = ["genesis", "exodus", "leviticus", "numbers", "deuteronomy"];
var randomHangmanWords = hangmanWords[Math.floor(Math.random() * hangmanWords.length)];

var string;
var answerArray = [];

// 2. Ask user to press any key to get started


    for (var i = 0; i < randomHangmanWords.length; i++) {
        answerArray[i] = "_";
    }

    string = answerArray.join(" ");
    document.getElementById('answer').innerHTML = string;


document.onkeyup = function(event) {

    // 3. Assign variable to the user input

    var userGuess = event.key;

for (var i = 0; i < randomHangmanWords.length; i++) {

    if (randomHangmanWords[i] === userGuess) {
        answerArray[i] = userGuess;
        console.log(answerArray[i]);
    }

}
document.getElementById('answer').innerHTML = answerArray.join(" ");


console.log(randomHangmanWords);
console.log(userGuess);
}

// 4. Create a randomizer for the array of words that the user will guess


// 5. Create a code that will determine if the key pressed matched any letter in the word


// 6. Create a code that will determine if the key pressed doesn't match the key pressed.

// 7. Assign number of guesses before the game be over

// 8. Create a code to show which letter are already guessed

// 9. Create a code that will not deduct the number of guesses if the user input is repeated.