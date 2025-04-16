// 1. Create the recursive factorial function
function factorial(n) {
    console.log("Current value:", n); // 3. Log the current value
  
    // 2. Base case: if n is 0, return 1
    if (n === 0) {
      return 1;
    } else {
      // Recursive case: multiply n by factorial of (n - 1)
      return n * factorial(n - 1);
    }
  }
  
  // 3. Call the function with a number
  let result = factorial(5);
  console.log("Factorial Result:", result);
  
  // 4. Try with other numbers like 3, 7, or 10
  