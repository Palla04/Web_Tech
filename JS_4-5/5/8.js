// 1. Output string
let output = "";

// 2. Number to skip
let skipNumber = 5;

// 3. Loop from 1 to 10
for (let i = 1; i <= 10; i++) {
  // 4. Check if current number is the skipNumber
  if (i === skipNumber) {
    // 5. Skip this iteration
    continue;
  }
  // 6. Append value to output string
  output += i + " ";
}

// 7. Output after loop
console.log("Using continue: " + output);
