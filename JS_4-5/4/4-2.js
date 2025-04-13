const readline = require("readline");

// Create readline interface
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Ask the user for their age
rl.question("Please enter your age: ", function(ageInput) {
  let age = Number(ageInput);
  let message;

  if (age >= 21) {
    message = "You may enter the venue and purchase alcohol.";
  } else if (age >= 19) {
    message = "You may enter the venue, but cannot purchase alcohol.";
  } else {
    message = "You are not allowed to enter the venue.";
  }

  console.log(message);
  rl.close(); // Close the input stream
});
