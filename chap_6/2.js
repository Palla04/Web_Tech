// 1. Create an array of descriptive words
const descriptions = ["brilliant", "kind", "funny", "brave", "creative", "smart", "friendly"];

// 2. Create a function that prompts the user for a name
function describeName() {
  let name = prompt("Enter a name:");

  // 3. Select a random value from the array
  let randomIndex = Math.floor(Math.random() * descriptions.length);
  let randomDescription = descriptions[randomIndex];

  // 4. Output the name and description
  console.log(`${name} is ${randomDescription}!`);
}

// 5. Invoke the function
describeName();
