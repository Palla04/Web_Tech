const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// 1. Ask the user to select a number between 0 and 10
rl.question("Pick a number between 0 and 10: ", function(input) {
  // 2. Convert the input to a number
  const prize = Number(input);

  // 3. Initialize the message string
  let message = "My Selection: " + prize + "\n";
  let prizeMessage = "";

  // 4. Use a switch statement to assign a prize
  switch (prize) {
    case 0:
    case 1:
      prizeMessage = "You won a chocolate bar!";
      break;
    case 2:
    case 3:
      prizeMessage = "You won a movie ticket!";
      break;
    case 4:
    case 5:
      prizeMessage = "You won a gift card!";
      break;
    case 6:
    case 7:
      prizeMessage = "You won a Bluetooth speaker!";
      break;
    case 8:
    case 9:
      prizeMessage = "You won a smartwatch!";
      break;
    case 10:
      prizeMessage = "Jackpot! You won a laptop!";
      break;
    default:
      prizeMessage = "Invalid selection. Please choose a number from 0 to 10.";
  }

  // 6. Output the result
  console.log(message + prizeMessage);
  rl.close();
});
