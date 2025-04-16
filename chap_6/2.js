// 1. Create an array of descriptive words
const descriptions = ["brilliant", "kind", "funny", "brave", "creative", "smart", "friendly"];

// 2. Import readline module
const readline = require('readline');

// 3. Set up readline interface
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// 4. Function to describe the name
function describeName() {
  rl.question("Enter a name: ", function(name) {
    // 5. Select a random description
    let randomIndex = Math.floor(Math.random() * descriptions.length);
    let randomDescription = descriptions[randomIndex];

    // 6. Output the result
    console.log(`${name} is ${randomDescription}!`);

    // 7. Close the readline interface
    rl.close();
  });
}

// 8. Call the function
describeName();
