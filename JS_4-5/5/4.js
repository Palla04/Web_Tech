// 1. Empty array to hold the table data
let myTable = [];

// 2. Set the number of rows and columns
const numRows = 3;
const numCols = 4;

// 3. Counter variable
let counter = 1;

// 4. Outer loop for rows
for (let row = 0; row < numRows; row++) {
  let tempTable = []; // Temporary array for each row

  // 5. Inner loop for columns
  for (let col = 0; col < numCols; col++) {
    tempTable.push(counter); // Add the counter value to the row
    counter++; // Increment counter
  }

  myTable.push(tempTable); // Push the completed row to the main table
}

// Output the table
console.log(myTable);
