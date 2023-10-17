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

// 6 Short Long Short

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

// 7 Leap Years Part 1

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

// 8 Leap Years Part 2

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

// 9 Multiples of 3 and 5

// Write a function that computes the sum of all numbers between 1 and some other number, inclusive, that are multiples of 3 or 5. For instance, if the supplied number is 20, the result should be 98 (3 + 5 + 6 + 9 + 10 + 12 + 15 + 18 + 20).

// You may assume that the number passed in is an integer greater than 1.

function multisum(endNum) {
  let total = 0;

  for (i = 1; i <= endNum; i++) {
    if (i % 5 === 0 || i % 3 === 0) {
      total += i;
    }
  }

  return total;
}

multisum(3);       // 3
multisum(5);       // 8
multisum(10);      // 33
multisum(1000);    // 234168

// LS Solution

function isMultiple(number, divisor) {
  return number % divisor === 0;
}

function multisum(maxValue) {
  let sum = 0;

  for (let number = 1; number <= maxValue; number += 1) {
    if (isMultiple(number, 3) || isMultiple(number, 5)) {
      sum += number;
    }
  }

  return sum;
}

// 10 UTF-16 String Value

// Write a function that determines and returns the UTF-16 string value of a string passed in as an argument. The UTF-16 string value is the sum of the UTF-16 values of every character in the string. (You may use String.prototype.charCodeAt() to determine the UTF-16 value of a character.)

function utf16Value(inputString) {
  let total = 0;
  let length = inputString.length;

  for (i = 0; i < length; i++) {
    total += inputString.charCodeAt(i);
  }
  return total;
}

utf16Value('Four score');         // 984
utf16Value('Launch School');      // 1251
utf16Value('a');                  // 97
utf16Value('');                   // 0

// The next three lines demonstrate that the code
// works with non-ASCII characters from the UTF-16
// character set.
const OMEGA = "\u03A9";             // UTF-16 character 'Ω' (omega)
utf16Value(OMEGA);                  // 937
utf16Value(OMEGA + OMEGA + OMEGA);  // 2811

// LS Solution 

function utf16Value(string) {
  let sum = 0;

  for (let idx = 0; idx < string.length; idx += 1) {
    sum += string.charCodeAt(idx);
  }

  return sum;
}