// 1. Create a grid array variable
let grid = [];

// 2. Set number of cells
const totalCells = 64;

// You can adjust these values to shape the grid
const numCols = 8; // for example, 8 columns
const numRows = totalCells / numCols; // automatically calculate rows

// 3. Set a counter to 0
let counter = 1;

// Loop to create the rows
for (let row = 0; row < numRows; row++) {
  let rowArray = []; // Temporary array to hold column values

  // Nested loop to create columns
  for (let col = 0; col < numCols; col++) {
    rowArray.push(counter);
    counter++;
  }

  // Push the row into the grid
  grid.push(rowArray);
}

// Output the final grid
console.log(grid);
