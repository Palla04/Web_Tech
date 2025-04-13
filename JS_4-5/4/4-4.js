// 1. Generate a random number between 0 and 5
let randomNumber = Math.random();       // random number between 0 and <1
randomNumber = randomNumber * 6;        // scale to 0–5.999...
randomNumber = Math.floor(randomNumber); // round down to 0–5

// 2. Assign grades based on random number
let grade;
switch (randomNumber) {
  case 0:
    grade = "F";
    break;
  case 1:
    grade = "D";
    break;
  case 2:
    grade = "C";
    break;
  case 3:
    grade = "B";
    break;
  case 4:
    grade = "A";
    break;
  default:
    grade = "Unknown";
    break;
}

// 3. Output the grade
console.log("Grade:", grade);

// 4. Use if-else logic to output a message
if (grade === "F" || grade === "D") {
  console.log("You've failed!");
} else if (grade === "C" || grade === "B") {
  console.log("You've passed!");
} else if (grade === "A") {
  console.log("Nice!");
} else {
  console.log("I don't know this grade.");
}
