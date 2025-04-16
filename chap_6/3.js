// 1. Set up two variables containing number values
let num1 = 15;
let num2 = 5;

// 2. Set up a variable to hold an operator, either "+" or "-"
let operator = "+"; // You can also test with "-" or an invalid operator like "*"

// 3. Create a function to perform the operation
function calculate(a, b, op = "+") {
  if (op === "+") {
    return a + b;
  } else if (op === "-") {
    return a - b;
  } else {
    // Default to addition if operator is not valid
    return a + b;
  }
}

// 4. Call the function with the first operator
console.log("Result 1:", calculate(num1, num2, operator)); // Should output 20

// 5. Update the operator and call the function again
operator = "-";
console.log("Result 2:", calculate(num1, num2, operator)); // Should output 10

// 6. Test with no operator (should default to addition)
console.log("Result 3:", calculate(num1, num2)); // Should output 20
