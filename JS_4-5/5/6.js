// 1. Create an empty array
let numberArray = [];

// 2. Run a loop 10 times, adding new incrementing values
for (let i = 1; i <= 10; i++) {
  numberArray.push(i);
}

// 3. Log the array into the console
console.log("Full Array:", numberArray);

// 4. Use a for loop to iterate through the array
console.log("Using regular for loop:");
for (let i = 0; i < numberArray.length; i++) {
  console.log(numberArray[i]);
}

// 5. Use the for...of loop to output each value
console.log("Using for...of loop:");
for (let value of numberArray) {
  console.log(value);
}
