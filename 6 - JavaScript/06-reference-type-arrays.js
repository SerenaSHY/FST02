// Reference Data Type : Array
let fruits = ["Banana","Durian","Avocado","Pineapple","Mango"];
console.log("Fruits:",fruits);
// Checking the length of an array
console.log("Fruits Length:",fruits.length);
// Array Indexing
console.log("First Fruit:",fruits[0]);
console.log("Last Fruit:",fruits[fruits.length - 1]);

// Method - function that is associated with an object or class.
// .slice() method - access a portion of an array
// 1st Argument: starting index
// 2nd Argument: element not included
let sliced_fruits = fruits.slice(1,3);
console.log(sliced_fruits);

// Update element/s
fruits[0] = "Dewberry";
console.log("Updated Fruits:",fruits);

// Delete element/s
// .pop() method - deletes the element at the end of the array
fruits.pop();
console.log("Updated Fruits:",fruits);

// .splice() method - add or delete elements at a specified index
// 1st Argument - starting index
// 2nd Argument - deleteCount
// 3rd Argument - element/s you want to add
fruits.splice(1,0, "Rambutan");
fruits.splice(1,1);
console.log("Updated Fruits:",fruits);

// .forEach() method receives a function as it argument and executes it once for every element in the array
fruits.forEach(function functionName(){
});

// .forEach() method receives a function as it argument and executes it once for every element in the array
fruits.forEach(function (fruit){
    console.log("Fruit:",fruit);
});

// Search for elements
// .includes() method - checks if an element exists
console.log("Is Durian Included in the array?:",fruits.includes("Durian"));

// .indexOf() - find the index of a certain element
let index = fruits.indexOf("Durian");
console.log("Index of Durian:",index);
