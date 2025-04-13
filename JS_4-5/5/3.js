// 1. Create a blank array
let myWork = [];

// 2. Use a for loop to create 10 lesson objects
for (let i = 1; i <= 10; i++) {
  // 3. Use ternary to set status: true for odd lessons, false for even
  let status = i % 2 === 0 ? false : true;

  // 4. Create the lesson object
  let lesson = {
    name: `Lesson ${i}`,
    status: status
  };

  // 5. Push the lesson to the array
  myWork.push(lesson);
}

// 6. Output the array to the console
console.log(myWork);
