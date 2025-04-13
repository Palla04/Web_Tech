// 1. Create a simple object with three items
let myObject = {
    name: "Alice",
    age: 25,
    city: "New York"
  };
  
  // 2. Using the for...in loop to get properties and values
  console.log("Object properties and values:");
  for (let key in myObject) {
    console.log(`${key}: ${myObject[key]}`);
  }
  
  // 3. Create an array with the same three items
  let myArray = ["Alice", 25, "New York"];
  
  // Using for loop
  console.log("\nArray values using for loop:");
  for (let i = 0; i < myArray.length; i++) {
    console.log(myArray[i]);
  }
  
  // Optional: Using for...in loop on array (not as common, but valid)
  console.log("\nArray values using for...in loop:");
  for (let index in myArray) {
    console.log(myArray[index]);
  }
  