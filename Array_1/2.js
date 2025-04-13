// 1. Create an empty array
let shoppingList = [];

// 2. Add Milk, Bread, and Apples to your list
shoppingList.push("Milk", "Bread", "Apples");

// 3. Update "Bread" with Bananas and Eggs
shoppingList.splice(1, 1, "Bananas", "Eggs"); // Replace 1 item at index 1

// 4. Remove the last item and output it
let removedItem = shoppingList.pop();
console.log("Removed item:", removedItem);

// 5. Sort the list alphabetically
shoppingList.sort();

// 6. Find and output the index value of Milk
let milkIndex = shoppingList.indexOf("Milk");
console.log("Index of Milk:", milkIndex);

// 7. After Bananas, add Carrots and Lettuce
let bananaIndex = shoppingList.indexOf("Bananas");
shoppingList.splice(bananaIndex + 1, 0, "Carrots", "Lettuce");

// 8. Create a new list containing Juice and Pop
let newItems = ["Juice", "Pop"];

// 9. Combine both lists, adding the new list twice to the end of the first list
let combinedList = shoppingList.concat(newItems, newItems);

// 10. Get the last index value of Pop and output it
let lastPopIndex = combinedList.lastIndexOf("Pop");
console.log("Last index of Pop:", lastPopIndex);

// Output final list (optional)
console.log("Final Shopping List:", combinedList);
