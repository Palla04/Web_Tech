// 1. Create a prompt to ask the user's age
let ageInput = prompt("Please enter your age:");

// 2. Convert the response to a number
let age = Number(ageInput);

// 3. Declare a message variable
let message;

// 4–6. Set message based on age conditions
if (age >= 21) {
  message = "You may enter the venue and purchase alcohol.";
} else if (age >= 19) {
  message = "You may enter the venue, but cannot purchase alcohol.";
} else {
  message = "You are not allowed to enter the venue.";
}

// 7. Output the message to the console
console.log(message);
