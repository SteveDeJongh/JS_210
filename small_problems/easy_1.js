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

// Tip Calculator

let readlineSync = require('readline-sync');

console.log('What is the bill?');
let bill = readlineSync.prompt();
bill = parseInt(bill);

console.log('What is the tip percentage?');
let percentage = readlineSync.prompt();
percentage = parseFloat(percentage)/100;

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