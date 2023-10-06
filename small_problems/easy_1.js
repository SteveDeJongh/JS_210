// JS 210 - Small Problems - Easy 1

// 1 Odd Numbers

for (i = 1; i < 100; i += 2) {
  console.log(i);
}

// 2 Even Numbers

for (i = 1; i < 100; i++) {
  if (i % 2 === 0) {
    console.log(i);
  }
}

// 3 How Big is the Room

let length1 = prompt('Enter the length of the room in meters:');
let width1 = prompt('Enter the width of the room in meters:');

console.log('The are of the room is ' + String(length1 * width1) + ' square meters.');

// LS Solution

let readlineSync = require("readline-sync");

const SQMETERS_TO_SQFEET = 10.7639;

console.log("Enter the length of the room in meters:");
let length = readlineSync.prompt();
length = parseInt(length, 10);

console.log("Enter the width of the room in meters:");
let width = readlineSync.prompt();
width = parseInt(width, 10);

let areaInMeters = (length * width);
let areaInFeet = (areaInMeters * SQMETERS_TO_SQFEET);

console.log(
  `The area of the room is ${areaInMeters.toFixed(2)} square meters (${areaInFeet.toFixed(2)} square feet).`
);

// 4 Tip Calculator

console.log('What is the bill?');
let bill = parseFloat(bill);

console.log('What is the tip percentage?');
let percentage = parseFloat(percentage)/100;

let tip = (bill * percentage);
let total = (tip + bill);

console.log('The tip is $' + tip.toFixed(2));
console.log('The total is $' + total.toFixed(2));

// LS Solution

const bill = parseFloat(prompt('What is the bill?'));
const percentage = parseFloat(prompt('What is the percentage?'));

const tip = bill * (percentage / 100);
const total = bill + tip;

console.log(`The tip is $${tip.toFixed(2)}`);
console.log(`The total is $${total.toFixed(2)}`);

// 5 Sum or Product of Consecutive Integers

let readlineSync = require('readline-sync');

console.log('Please enter an integer great than 0:')
let end = readlineSync.prompt();
console.log("Enter 's' to compute the sum, or 'p' to compute the product.");
let calc = readlineSync.prompt();

let result = 1;

if (calc === 's') {
  for (let i = 2; i <= end; i++) {
    result += i;
  }
} else if (calc === 'p') {
  for (let i = 1; i <= end; i++) {
    result *= i;
  }
}
console.log(result);

// LS Solution, seperate functions.

function computeSum(number) {
  let total = 0;

  for (let i = 1; i <= number; i += 1) {
    total += i;
  }

  return total;
}

function computeProduct(number) {
  let total = 1;

  for (let i = 1; i <= number; i += 1) {
    total *= i;
  }

  return total;
}

const number = parseInt(prompt('Please enter an integer greater than 0'), 10);
const operation = prompt('Enter "s" to compute the sum, or "p" to compute the product.');

if (operation === 's') {
  let sum = String(computeSum(number));
  console.log(`The sum of the integers between 1 and ${String(number)} is ${sum}.`);
} else if (operation === 'p') {
  let product = String(computeProduct(number));
  console.log(`The product of the integers between 1 and ${String(number)} is ${product}.`);
} else {
  console.log('Oops. Unknown operation.');
}

// Short Long Short

function shortLongShort(s1, s2) {
  if (s1.length < s2.length) {
    return s1 + s2 + s1;
  } else {
    return s2 + s1 + s2;
  }
}

shortLongShort('abc', 'defgh');    // "abcdefghabc"
shortLongShort('abcde', 'fgh');    // "fghabcdefgh"
shortLongShort('', 'xyz');         // "xyz"

// Leap Years Part 1

// In the modern era under the Gregorian Calendar, leap years occur in every year that is evenly divisible by 4, unless the year is also divisible by 100. If the year is evenly divisible by 100, then it is not a leap year, unless the year is also evenly divisible by 400.

// Assume this rule is valid for any year greater than year 0. Write a function that takes any year greater than 0 as input and returns true if the year is a leap year or false if it is not a leap year.

function isLeapYear(year) {
  let leap = false;

  if (year % 4 === 0 && year % 100 === 0 && year % 400 === 0) {
    leap = true;
  } else if (year % 4 === 0 && year % 100 === 0) {
    leap = false;
  } else if (year % 4 === 0) {
    leap = true;
  }

  return leap;
}

isLeapYear(2016);      // true
isLeapYear(2015);      // false
isLeapYear(2100);      // false
isLeapYear(2400);      // true
isLeapYear(240000);    // true
isLeapYear(240001);    // false
isLeapYear(2000);      // true
isLeapYear(1900);      // false
isLeapYear(1752);      // true
isLeapYear(1700);      // false
isLeapYear(1);         // false
isLeapYear(100);       // false
isLeapYear(400);       // true

// LS Solution

function isLeapYear(year) {
  if (year % 400 === 0) {
    return true;
  } else if (year % 100 === 0) {
    return false;
  } else {
    return year % 4 === 0;
  }
}

// Or even more concise

const isLeapYear = (year) => (year % 400 === 0) || (year % 4 === 0 && year % 100 !== 0);

// Leap Years Part 2

// The British Empire adopted the Gregorian Calendar in 1752, which was a leap year. Prior to 1752, they used the Julian Calendar. Under the Julian Calendar, leap years occur in any year that is evenly divisible by 4.

// Using this information, update the function from the previous exercise to determine leap years both before and after 1752.

function isLeapYear(year) {
  if (year < 1752 && year % 4 === 0) {
    return true;
  } else if (year % 400 === 0) {
    return true;
  } else if (year % 100 === 0) {
    return false;
  } else {
    return year % 4 === 0;
  }
}

isLeapYear(2016);      // true
isLeapYear(2015);      // false
isLeapYear(2100);      // false
isLeapYear(2400);      // true
isLeapYear(240000);    // true
isLeapYear(240001);    // false
isLeapYear(2000);      // true
isLeapYear(1900);      // false
isLeapYear(1752);      // true
isLeapYear(1700);      // true
isLeapYear(1);         // false
isLeapYear(100);       // true
isLeapYear(400);       // true

// Multiples of 3 and 5

