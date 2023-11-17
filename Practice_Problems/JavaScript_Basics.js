// JS210 - JavaScript Language Fundamentals JavaScript Basics Building Strings

// 1

// const paragraph = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse sed \
//                 ligula at risus vulputate faucibus. Aliquam venenatis nibh ut justo dignissim \
//                 dignissim. Proin dictum purus mollis diam auctor sollicitudin. Ut in bibendum \
//                 ligula. Suspendisse quam ante, dictum aliquam tristique id, porttitor pulvinar \
//                 diam. Maecenas blandit aliquet ipsum. Integer vitae sapien sed nulla rutrum \   
//                 hendrerit ac a urna. Interdum et malesuada fames ac ante ipsum primis in faucibus.';

// console.log(paragraph);

// Solution
// The program does not run. There are bugs/errors.

// You might not get an error if you copy and paste the code into your own editor, especially if you have set it up to strip trailing whitespace.

// Discussion
// First of all, there is a SyntaxError in assigning the paragraph to the paragraph variable. It is not easily visible, but there are spaces at the end of line 5 following the backslash (\) character. The purpose of the backslash is to escape the newline character at the end of the line. However, the extra whitespace prevents this from happening, causing a SyntaxError to be raised.

// The program still has a bug, even after removing the extra whitespace on line 5: there are extra spaces in the middle of some of the sentences. This is because the program considers the whole string to be continuous, so the spaces at the beginning of each line (lines 2 to 6) are interpreted as part of the string.

// 2 Conditions Part 1

// Line 7 : 'Hello'
// Line 11 : 
// Line 15 : 'World'
// Line 19 : '!'

// Discussion
// Recall that only the following six values are falsy:

// false
// null
// undefined
// 0
// NaN
// ''
// All other values are truthy.

// 3 Conditionals Part 2

if (condition1) {
  // ...
  if (condition2) {
    // ...
  } else {
    // ...
  }
} else {
  // ...
  if (condition4) {
    // ...
    if (condition5) {
    // ...
    }
  }
}

// There are 5 number of unique exeuction paths.

// Path 1: condition1 --> condition2
// Path 2: condition1 --> not condition2
// Path 3: not condition1
// Path 4: not condition1 --> condition4
// Path 5: not condition1 --> condition4 --> condition5

// 4 String Assignment

let myName = 'Bob';
const saveName = myName;
myName = 'Alice';
console.log(myName, saveName); // Alive Bob

// const myName = 'Bob';
// const saveName = myName;
// myName.toUpperCase();
// console.log(myName, saveName); // Bob Bob

// If you were thinking that at least one or both of the names should be in uppercase, then you would be wrong. Don't worry though, you're not alone—especially if you come from other programming languages in which strings are mutable. In JavaScript however, primitive strings—such as the ones shown above—are immutable.

// 5 Arithmetic Integer

const readlineSync = require("readline-sync");

console.log("Enter the first number:");
let firstNumber = Number(readlineSync.prompt());
console.log("Enter the second number:");
let secondNumber = Number(readlineSync.prompt());

console.log(`${firstNumber} + ${secondNumber} = ${firstNumber + secondNumber}`);
console.log(`${firstNumber} - ${secondNumber} = ${firstNumber - secondNumber}`);
console.log(`${firstNumber} * ${secondNumber} = ${firstNumber * secondNumber}`);
console.log(`${firstNumber} / ${secondNumber} = ${Math.floor(firstNumber / secondNumber)}`);
console.log(`${firstNumber} % ${secondNumber} = ${firstNumber % secondNumber}`);
console.log(
  `${firstNumber} ** ${secondNumber} = ${Math.pow(firstNumber, secondNumber)}`
);

// 6 Counting the number of Characters

// ex:
Please enter a phrase: walk
// console output
There are 4 characters in "walk".

Please enter a phrase: walk, don't run
// console output
There are 15 characters in "walk, don't run".

function characterCount() {
  const readlineSync = require("readline-sync");
  console.log("Please enter a phrase:");
  let inputString = String(readlineSync.prompt());
  let count = inputString.length;

  console.log(`THere are ${count} characters in "${inputString}".`)
}

// LS Solution

const input = prompt('Please enter a phrase:');
const numberOfCharacters = String(input.length);

console.log(`There are ${numberOfCharacters} characters in '${input}'.`);

// FE, don't count spaces.

const input = prompt('Please enter a phrase:');
const cleanedInput = input.replaceAll(' ', '');
const numberOfCharacters = String(cleanedInput.length);

console.log(`There are ${numberOfCharacters} non-space characters in '${input}'.`);

// Using regex and `replace`

const input = prompt('Please enter a phrase:');
const cleanedInput = input.replace(/ /g, '');
const numberOfCharacters = String(cleanedInput.length);

console.log(`There are ${numberOfCharacters} non-space characters in '${input}'.`);

// Further challenge, only count alphabetical characters.

const input = prompt('Please enter a phrase:');
const cleanedInput = input.replace(/[^a-z]/gi, ''); // 'g' flag replaces all, 'i' is case incensitive.
const numberOfCharacters = String(cleanedInput.length);

console.log(`There are ${numberOfCharacters} characters in '${input}'.`);

// 7 Convert a String to a Number

const DIGITS = {
  '0': 0, '1': 1, '2': 2, '3': 3, '4': 4,
  '5': 5, '6': 6, '7': 7, '8': 8, '9': 9,
};

function stringToInteger(string) {
  let value = 0;
  const numbers = stringToNumbers(string);

  for (let i = 0; i < numbers.length; i += 1) {
    value = 10 * value + numbers[i];
  }

  return value;
}

function stringToNumbers(string) {
  const result = [];

  for (let i = 0; i < string.length; i += 1) {
    result.push(DIGITS[string[i]]);
  }

  return result;
}

stringToInteger('4321');      // 4321
stringToInteger('570');       // 570

// 8 Convert a String to a Signed Number

function stringToSignedInteger(string) {
  switch (string[0]) {
    case '-': return -stringToInteger(string.slice(1));
    case '+': return stringToInteger(string.slice(1));
    default:  return stringToInteger(string);
  }
}

stringToSignedInteger('4321');      // 4321
stringToSignedInteger('-570');      // -570
stringToSignedInteger('+100');      // 100

// 9 Convert a Number to a String

const DIGITS = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

function integerToString(input) {
  let result = '';

  do {
     let remainder = input % 10;
     input = Math.floor(input/10);

     result = DIGITS[remainder] + result;
  } while (input > 0);

  return result;
}

integerToString(4321);      // "4321"
integerToString(0);         // "0"
integerToString(5000);      // "5000"

// 10 Convert a Signed Number to a String

function signedIntegerToString(input) {
  if (input > 0) {
    return "+" + integerToString(input);
  } else if (input < 0) {
    return "-" + integerToString(input - input * 2); // OR (-input)
  } else {
    return "0";
  }
}

signedIntegerToString(4321);      // "+4321"
signedIntegerToString(-123);      // "-123"
signedIntegerToString(0);         // "0"