// 1. Set the starting counter to 0
let counter = 0;

// 2. Create a step value
let step = 10; // You can change this to any step value you want

// 3. Use a do...while loop to increment and print the counter
do {
  console.log("Counter:", counter);
  counter += step;
} while (counter < 100);

// Final value after the loop ends
console.log("Final Counter:", counter);
