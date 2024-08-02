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
/*
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
*/

//! Access Array Elements
//TODO Define an array of items
let items = ["apple", "banana", "cherry", "date", "elderberry"];

//TODO Access specific elements
let firstItem = items[0];
let thirdItem = items[1];
let lastItem = items[4];

//* Output the results
console.log("Items: " + items);
console.log("First Item: " + firstItem);
console.log("Third Item: " + thirdItem);
console.log("Last Item: " + lastItem);


//! List of Favorite Movies
//TODO Define an array of favorite movies
//* Output each movie individually


//! Sum of Array Elements
//TODO Define an array of numbers
//TODO Calculate sum of the numbers
//* Output the result


//! Concatenate Strings in an Array
//TODO Define an array of strings
//TODO Concatenate the strings
//* Output the result


//! Update Array Elements

//TODO Define an array of items
let colors = ["red", "blue", "green", "yellow", "purple"];
//TODO Update 
//? green to cyan
//? purple to orange
//* Output the results

//Creating an array
let fruits = ["apple","strawberry","cherry","orange"];
//Variables can work as index nums
let kid = 1;


console.log(fruits);
console.log(fruits[3]);
console.log(fruits[kid]);

//updating array data
fruits[1] = "blueberries";
console.log(fruits)

//Adding new item to an array
let officeCharacters = ["Michael ", "Jim", "Dwight"];
console.log(officeCharacters);

//.push = adds new data at the end of the array
officeCharacters.push("Andy");
console.log(officeCharacters);

//.pop = remove the last item in the array
officeCharacters.pop();
console.log(officeCharacters)

//.unshift = Adds a new item to the front of the array
officeCharacters.unshift("Dwight");
console.log(officeCharacters)
console.log(officeCharacters.length);

//.shift = removes the first item in the array
officeCharacters.shift();
console.log(officeCharacters);

//.length = gives us the total number of items in a array
console.log(officeCharacters.length);

//!CONDITIONS

let boo = false;
console.log(boo)

 //? "==" - "is loosely equal to"
let bar = 4 == 5-4;
console.log(bar);

let boo2 = "4"
let boo3 = 5
let boo4 = "four"

console.log(boo2 == boo3);
//?TRUE

//Strictly Equals to "==="

console.log(boo2 === boo3);
//?FALSE

//Not equal to "!="

console.log(boo3 != boo4);
//? TRUE

//Greater than ">"
console.log(boo3 > 6);
//?FALSE

//Less than "<"
console.log(boo3 < 6);
//?TRUE

//Less than or equal to "<="
console.log(boo3 <= 4);
//?TRUE

//Greater Than or equal to ">="
console.log(boo3 >= 5);
//?False


//LOGICAL Operators

// AND = "&&"
console.log("Double Ampersans: " + (4 == 4 && 3 == 3));

// OR = "||"
console.log("Double LINES: " + (4 == 3 || 3 == 3));

// NOT = "!"
console.log("NOT : " + (!false));


//If Structure
if (boo3 == 4) {
    console.log("HEY I'm THE NUMBER 4!");
};


// if Else Structure
let amHungry = true;

if(amHungry == true) {
    console.log("Let's eat! I want Chicken nuggies!");
} else {
    console.log("Let's keep coding! Yay!");
};

//Else if Structure

let howHungry = 0;

if (amHungry === true && howHungry >= 75) {
    console.log("I'm so hungry I can eat a horse.")
} 
else if (amHungry=== true && howHungry >= 25) {
    console.log("I'm hungry enough to eat cheez-its.")
} 
else if (amHungry === false && howHungry >= 25) {
    console.log("I'm depressed.")
} 
else {
    console.log("I'm not that hungry dude.")
};

//Switch Statement 
switch (amHungry == true) {
    case howHungry >= 75:
        console.log("I'm so hungry I can eat a horse.")
        break;
    case howHungry >= 25:
        console.log("I'm hungry enough to eat cheez-its.")
        break;
    default:
        console.log("I just wanna eat to eat.");
}

//! Favorite Fruit Checker
//TODO Define an array of favorite fruits
let favFruits = ["apple", "banana", "cherry", "mango", "melon"];
//TODO Define a variable for the fruit to check
let fruitToCheck = "oranges";
//* Check if the fruit is in the array and output the result
if (favFruits.includes(fruitToCheck)){
    console.log(`${fruitToCheck} is one of my favorite fruits!`);
}else {
    console.log(`${fruitToCheck} is NOT one of my favorite fruits.`)
}

//! Grade Categorizer
//TODO Define a variable for the grade
let grade = 90;
//TODO Categorize the grade
let gradingScale;
if (grade >= 90){
    gradingScale = "A";
}else if (grade >= 80){
    gradingScale = "B";
}else if (grade >= 70){
    gradingScale = "C";
}else if (grade >= 60){
    gradingScale = "D";
}else if (grade >= 50){
    gradingScale = "F"
}else{
    gradingScale = "no grade available";
}
//* output the result
console.log(`The grade ${grade} falls under the grading scale of ${gradingScale}`)

//! Day of the Week Checker
//TODO Define an array of days of the week
let daysOfWeek = ["Mon.", "Tues", "Wed", "Thurs", "Fri", "Sat", "Sun"];
//TODO Define a variable for the day to check
let dayToCheck = "Mon";
//TODO Check if the day is a weekday or weekend 
let checkForWeekend;

if (dayToCheck === "Sat" || dayToCheck === "Sun"){
    checkForWeekend = "weekend"
}else if (daysOfWeek.includes(dayToCheck)){
    checkForWeekend = "weekday";
}else {
    checkForWeekend = "undefined";
}
//* output the result
console.log(`${dayToCheck} is a ${checkForWeekend}`);

//! Temperature Checker
//TODO Define a variable for the temperature
let currentTemp = 90;
//TODO Categorize the temperature and 
let result;
if (currentTemp >= 90){
    result = "Hot";
}else if (currentTemp < 89 && currentTemp >= 75){
    result = "Pretty Hot";
}else if (currentTemp < 74 && currentTemp >= 65){
    result = "Mild";
}else{
    result = "Hell Froze Over";
}//end else if
//*output the result

console.log(`The current temp is ${currentTemp} which means it is ${result}.`)

//! Number Sign Checker
//TODO Define a variable for the number
let checkNum = 45;
//TODO Check the sign of the number
let checkSign;
if (checkNum >= 0){
    checkSign = "positive";
}else {
    checkSign = "negative";
}//end if else
//* output the result

console.log(`The number to check is ${checkNum} which is ${checkSign}`);

//? "==" definition: "is loosely equal to"
let leftNum = 4;
let rightNum = "4";

console.log(leftNum == rightNum);
//! TRUE

//? "===" definition: "is strictly equal to"
console.log(leftNum === rightNum);
//! FALSE

let password = "UndER28S@#fdd";
let password2 = "under28s@#fdd";

console.log(password === password2);

//? "const" is a reserved word (ex. let, var, etc.)
//? what it means "const" = makes your stored information in a variable unchangeable

const myName = "Bryan Ha";

