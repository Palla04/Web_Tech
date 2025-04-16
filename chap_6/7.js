// 1. Set the start variable to 10
let start = 10;

// 2. Create a countdown function that takes one argument
function countdown(value) {
  // 3. Output current countdown value
  console.log(value);

  // 4. If value is less than 1, stop the recursion
  if (value < 1) {
    return;
  }

  // 5, 6, 7, 8, 9. If value > 0, decrement and call the function again
  return countdown(value - 1);
}

// Call the countdown function with the starting value
countdown(start);
