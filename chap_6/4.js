// 1. Set up an empty array to store the values
let results = [];

// 3. Create a function that returns the sum of two values
function calculate(a, b) {
  return a + b;
}

// 2. Create a loop that runs 10 times
for (let i = 0; i < 10; i++) {
  let val1 = i * 5;      // First value: i * 5
  let val2 = i * i;      // Second value: i * i

  // 4. Call the function with the two values
  let result = calculate(val1, val2);

  // 5. Push the result into the array
  results.push(result);
}

// 6. Output the final array to the console
console.log(results); // 7. Expected: [0, 6, 14, 24, 36, 50, 66, 84, 104, 126]
