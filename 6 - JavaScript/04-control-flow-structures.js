//change file name from 04-control-flow-structures.js to app.js
//Control flow structures
//1. If conditional statement
//Conditionals: If, Else-if, Else statement
let temperature = 0;
if (temperature < 0) {
    //statement
    console.log("It's freezing!");
} else if (temperature >=0 && temperature < 20) {
    console.log("It's cool outside!");
} else if (temperature >= 20 && temperature < 30 ){
    console.log("It's warm outside");
} else {
    console.log("It's hot outside");
}
// Conditionals: switch-case statements
//Unique or exact values
let day = "Tuesday";
switch(day){
    case "Monday":
        console.log("It's the start of the weekdays");
        break;
    case "Friday":
        console.log("It's the end of the weekdays");
        break;
    default:
        console.log("It's just a regular day");
}

// 2. Looping Statements
console.log("Hello World!");
// For Loop
/*
 "components" or "expressions" of a for loop
 1st - Variable Initialization
 2nd - Condition Expression (Terminating Condition)
 3rd - Counter Increment
 */
for (var i = 1; i <5 ; i++) {
    console.log("For loop count:", i);
}
 console.log("For loop count:", i);
// While Loop
// Use: We don't know how many iterations
let count = 1;
while (count <=3 ){
   console.log("Do while count:", count); 
   count++;
}
// Do while loop
let counter = 1;
do {
    console.log("Do while count:", counter);
    counter++;
} while (counter <= 3);