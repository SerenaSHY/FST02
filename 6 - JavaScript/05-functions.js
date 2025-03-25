// Functions
// Reusable blocks of code that can be executed whenever called/needed
// 1. Function Declaration
// Global scope, Hoisting 
function greet(){
    console.log("Hello welcome to the world of functions!");
    console.log("Let's Goo!");
}

// Function Call
greet();

// Function with parameters
// Parameters are placeholders
// Arguments: values passed to a function's paramenters
// num1, num2 in () are called variable parameters
function sum(num1, num2) {
    return num1+num2;
}
let a = sum(10,15);
console.log(a);