const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// 1. Max value for the guessing game
const max = 100;

// 2. Generate a random number between 1 and max
const answer = Math.floor(Math.random() * max) + 1;

// Uncomment the line below during development to see the answer:
// console.log("Generated Answer (for testing):", answer);

// Function to ask for user's guess
function askGuess() {
  rl.question(`Please enter a number between 1 and ${max}: `, function (input) {
    const guess = Number(input);

    // Check for valid input
    if (isNaN(guess) || guess < 1 || guess > max) {
      console.log(`Invalid input! Enter a number between 1 and ${max}.`);
      askGuess(); // Ask again
    } else {
      // Compare guess with answer
      if (guess === answer) {
        console.log("Congratulations! You guessed the correct number!");
        rl.close();
      } else if (guess < answer) {
        console.log("Too low. Try again!");
        askGuess();
      } else {
        console.log("Too high. Try again!");
        askGuess();
      }
    }
  });
}

// Start the game
askGuess();
