//change file name from 03-operators-and-expressions.js to app.js
// 1. Arithmetic Operators

let num1 = 10;
let num2 = 5;

console.log("Addition(+):", num1 + num2); //10+5=15
console.log("Subtraction(-):", num1 - num2); //10-5=5
console.log("Multiplication(*):", num1 * num2); //10*5=50
console.log("Division(/):", num1 / num2); //10/5=2
console.log("Exponents(**):", num1 ** num2); //10**5=10000
console.log("Remainder(%):", num1 % 6); //10/6= remainder 4

//1. Order of Operations
// PEMDAS or BODMAS
/* Parentheses, Exponents, Multiplication & Division (Same level), and
Addition & Substraction (Same level)
Bracket, order, Division Multiplication, Addition, and Substraction
*/
let answer = 3 + 4 * (5-2) ** 2/2;
let neganswer = 3 + 4 * (5-2) ** -2/2;
console.log(answer);
console.log(neganswer);

//2. String Expression or Concatenation
console.log("Hello World");
console.log("Hello" + " " + "World");

//Template Literals
const name = "John";
const greeting = `Hello, ${name}!`; // ${VariableName}
console.log(greeting);

//3. Comparison Operators
//Type coercion
console.log("Equal to (==)", 5 == 5); //Boolean true
console.log("Equal to (==)", 5 == "5"); //Boolean true

console.log("Not equal to (!=)", 5 != 5); //Boolean false
console.log("Not equal to (!=)", 5 != "5"); //Boolean false

console.log("Greater than (>)", 5 > 3); //Boolean true
console.log("Less than (<)", 5 < 3); //Boolean false
console.log("Greater than or Equal to (>=)", 5 >= 3); //Boolean true
console.log("Less than or Equal to (<=)", 5 <= 3); //Boolean false

//Strict Equal to (strictly equal to data types too)
console.log("Strict Equal to (===)", 5 === 5); //Boolean true
console.log("Strict Equal to (===)", 5 === "5"); //Boolean false

//Strict Not Equal to
console.log("Strict Not Equal to (!==)", 5 !== 5); //Boolean false
console.log("Strict Not Equal to (!==)", 5 !== "5"); //Boolean true

//4. Logical operator
/* 
&& - AND: Amphersand 
|| - OR: Pipe
! - NOT: Exclamation Mark
true or false
*/

let sunny = true;
let warm = false;

//AND: True if and only if all conditions are met
console.log("Is it sunny AND warm?", sunny && warm);
//True && False = False

//OR: True if at least 1 of the conditions is true
console.log("Is it sunny OR warm?", sunny || warm);
//True || False = True

//NOT: Inverts the boolean value
console.log("Is it NOT sunny?", !sunny);
//Invert from true to false

//Assignment Expressions
//Assign values to a variable
let num3 = 10;
let num4 = 5;

//Addition Assignment '+='
num3 += num4; //num3 = num3 + num4
console.log(num3); // 15 = 10 + 5

//Substraction Assignment '-='
num3 -= num4; //num3 = num3 - num4, because num3 is already stored from previous addition
console.log(num3); // 10 = 15 - 5

//Multiplication Assignment '*='
num3 *= num4; // num3 = 10*5
console.log(num3); // 50

//Exponent Assignment '**='
num3 **= num4; // 10**5
console.log(num3); //100000

//Remainder Assignment '%='
num3 %= num4; // 100000/5 r. 0
console.log(num3); //0