/*
var hello = "world";
var num = 7;
var bool = true;
var undef = undefined;
var none = null;


console.log(num);

//* changed variable info here!
num = 29;

console.log(num);

//? MATH VARIABLES

var foo;

console.log(foo);

foo = 19;

console.log(foo + 4);

//? concat

var textOne = "Hello";

console.log(textOne + " " + "World!")

//TEMP CONVERTER

// Fah = Cel * 9/5 + 32
//console.log(answer)

var cel = 20;
var fah = cel * (9/5) + 32;

console.log(fah);

var birthYear = 1992;
var currentYear = 2024;
var age = currentYear - birthYear;

console.log(age);

//const == immutable
// cannot change info to const
const bar = "You cannot change me!";

//bar = 8;

console.log(bar);

//let == its accessable based on its scope

let bar2 = "You can change me!";

bar2 = 10;

console.log(bar2);

//dealing with quotes in strings

let stringQuote = "You aren't special";
console.log(stringQuote);

//escaping the quote

let escapeQuote = 'You aren\'t special';
console.log(escapeQuote);

//increments and decrements
let num3 = 0;
console.log(num3);
num3++;
console.log(num3);
num3--;
console.log(num3);

//setting multi-variables
let baz, baz2, baz3;
baz3 = 8;
console.log("I'm Baz3!" + baz3);

//string interpolation (Template literals) 
console.log(`Hello Baz2 ${baz3}`);

//Personal Greeting
let title = "Bryan";
console.log(`Your name is ${title}`);

//Tip Calc
var billAmount;
var tipPercentage;
var total;

billAmount = 23.59;
tipPercentage = billAmount * 0.20;
total = billAmount + tipPercentage;


console.log(total.toFixed(2));

//Age calc
var age = 32;
var ageInDays;

ageInDays = age * 365;

console.log(ageInDays + " " + "days");
*/

var temp = 89;
var conditions = "Sunny";
var sunRise = "6:14 AM";
var sunSet = "7:51 PM";

console.log(`It's currently ${conditions} and ${temp}\u00b0F. The sunrise was at ${sunRise} and the predicted sunset is at ${sunSet}.`)

var a = "3";
var b = "8";

let foo = b;
b = a
a = foo;
console.log(`a is ${a}`);
console.log(`b is ${b}`);

let firstName = prompt("What is your first name? ");
let lastName = prompt("What is your last name? ");

console.log(`Your name is ${firstName} ${lastName}!`);

//MadLib

let noun1 = prompt("Enter a noun");
let verb1 = prompt("Enter a verb");
let adjective1 = prompt("Enter an adjective");

console.log(`I saw a(n) ${noun1} while ${verb1}ing, it was very ${adjective1}!`)


