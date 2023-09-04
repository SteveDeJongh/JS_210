// JS210 - JavaScript Language Fundamentals JavaScript Basics Building Strings

// 1

const paragraph = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse sed \
                ligula at risus vulputate faucibus. Aliquam venenatis nibh ut justo dignissim \
                dignissim. Proin dictum purus mollis diam auctor sollicitudin. Ut in bibendum \
                ligula. Suspendisse quam ante, dictum aliquam tristique id, porttitor pulvinar \
                diam. Maecenas blandit aliquet ipsum. Integer vitae sapien sed nulla rutrum \   
                hendrerit ac a urna. Interdum et malesuada fames ac ante ipsum primis in faucibus.';

console.log(paragraph);

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

const myName = 'Bob';
const saveName = myName;
myName.toUpperCase();
console.log(myName, saveName); // Bob Bob

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