// 1. Create a variable with let and assign a string value of "1000"
let value = "1000";
console.log("Global value:", value);

// 2. Create an IIFE with a local value of the same variable name
(function () {
  let value = "2000"; // Local to this IIFE
  console.log("Inside IIFE 1:", value);
})(); // <-- IIFE is called right away

// 3. Create another IIFE and assign its return value to a variable
let result = (function () {
  let value = "3000"; // Again, local to this IIFE
  return value;       // This will be assigned to 'result'
})(); // <-- Immediately invoked

// Print the result and the outer 'value' variable
console.log("Result from IIFE 2:", result);
console.log("Global value after both IIFEs:", value);
