//change file name from 01-variables.js to app.js

console.log("Hello World");
/* 
on firefox browser, go inspect > Console > Logs tab, 
the display will show Hello World only
*/

/* 
Variables:
let - mutable/changeable (Block-scope)
Var - mutable/changeable (Global-scope)
const - - unmutable/unchangeable
*/
// first(N)ame: camelCase

let firstName = "Serena";
let myFirstName = "Shum";
firstName="Justin"; //owerwrite the firstName
console.log(firstName);

var lastName = "De Leon";
lastName = "Catipay"; //overwrite the lastName
console.log(lastName);

const birthDate = "01-01-2021"; //fixed and can't be owerwrite
//birthDate = "01-02-1997"; //Will pop up error in inspection browser
console.log(birthDate);