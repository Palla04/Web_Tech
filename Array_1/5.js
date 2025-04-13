// 1. Create an object named people with an empty array called friends
let people = {
    friends: []
  };
  
  // 2. Create three variables, each containing a friend's details
  let friend1 = {
    firstName: "Pallabi",
    lastName: "Biswas",
    id: 101
  };
  
  let friend2 = {
    firstName: "Riddhi",
    lastName: "Ghosh",
    id: 102
  };
  
  let friend3 = {
    firstName: "Ratri",
    lastName: "Basu",
    id: 103
  };
  
  // 3. Add the three friends to the friends array
  people.friends.push(friend1, friend2, friend3);
  
  // 4. Output the people object to the console
  console.log(people);
  