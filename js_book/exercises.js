// LS JavaScript Book - Exercises

// Preparations - Exercises

// 1 

mkdir my_folder
cd my_folder
touch one.js
touch two.js

node one.js
node two.js

// 2

cd ..

rm -R my_folder

// 3

mkdir preparations_exercises
cd preparations_exercises
touch foo.js

// 4
// A
node foo.js // outputs "bar"

// B 
> let foo = 'bar'
= undefined

> console.log(foo);
bar
= undefined

> foo
= 'bar'

// C
> let foo = 'bar';
  console.log(foo);
  foo
bar
= "bar" // Ultimate return value from the last line of code.

// 5

substring // String, instance
create // Object, static method 
fromCharCode // String, static
slice // String, Array, instance
toString // String, Object, Array, Number, instance

// 6 Acceptable variable names: (excluding constants)

index  // Yes
CatName // No, not camelCase
snake_case // No, not camelCase
lazyDog // Yes
quick_Fox // No, not camelCase
1stCharacter // No, start with a number.
operand2 // Yes
BIG_NUMBER // No, not camelCase

// 7 Acceptable function names:

index // Yes
CatName // Yes, but only if function is a constructor.
snake_case // No not camelCase
lazyDog // Yes
quick_Fox // No, not camelCase
1stCharacter // No, starts with a number
operand2 // Yes
BIG_NUMBER // No.

// 8 Acceptable names for constants representing magic numbers

index // No
CatName // No
snake_case // No
lazyDog // No
quick_Fox // No
1stCharacter // No
operand2 // No
BIG_NUMBER // Yes, magic number constants always use SCREAMING_SNAKE_CASE

// 9 Which of the following names don't satisfy the style guidelines for naming variables, functions, or constants?

index
CatName
snake_case // No
lazyDog
quick_Fox // No
1stCharacter // No
operand2
BIG_NUMBER

// JS Book - The basics Exercises

// 1

'Steve' + 'De Jongh';

// 2 

> let number = 4936
> let ones = number % 10
> ones
= 6

> number = (number - ones) / 10
= 493

> let tens = number % 10
> tens
= 3

> number = (number - tens) / 10
= 49

> let hundreds = number % 10
> hundreds
= 9

> let thousands = (number - hundreds) / 10
> thousands
= 4

// 3 

'true' // String
false // Boolean
1.5 // Number
2 // Number
undefined // undefined
{ foo: 'bar' } // Object

// 4

console.log('5' + 10); // logs '510' instead of 15 as implciit type coercion converts the 10 into a string, and then concatenates the two strings.

// 5

console.log(Number('5') + 10);

// Or

console.log(parseInt('5', 10) + 10);

// 6

console.log(`The value of 5 + 10 is ${Number('5') + 10}.`)

// 7

let foo = ['a', 'b', 'c'];
console.log(foo.length);  // => 3
console.log(foo[3]);      // will this result in an error? No, it returns undefined.

// 8 

let names = ['asta', 'butterscoth', 'pudding', 'neptune', 'darwin'];

// 9

let pets = {
  asta: 'dog',
  butterscoth: 'cat',
  pudding: 'cat',
  neptune: 'fish',
  darwin: 'lizard',
}

// 10

'foo' === 'Foo' // false, case matters.

// 11

parseInt('3.1415') // 3

// 12

'12' < '9' // true, since the operands are string, they are evaluated character by character.

// Varaibles - Exercises

// 1

greeter.js
let name = "Victor";
console.log(`Good Morning, ${name}.`)
console.log(`Good Afternoon, ${name}.`)
console.log(`Good Evening, ${name}.`)

// 2

age.js
let age = 20;
console.log(`In 10 years, you will be ${age + 10} years old.`)
console.log(`In 20 years, you will be ${age + 20} years old.`)
console.log(`In 30 years, you will be ${age + 30} years old.`)
console.log(`In 40 years, you will be ${age + 40} years old.`)

// 3

{
  let foo = 'bar';
}

console.log(foo);

// Raises an error, as foo is out of scope as it's declared within a block.

// 4

const NAME = 'Victor';
console.log('Good Morning, ' + NAME); // Outputs with 'Victor'
console.log('Good Afternoon, ' + NAME); // Outputs with 'Victor'
console.log('Good Evening, ' + NAME); // Outputs with 'Victor'

NAME = 'Joe'; // Error! You can't change the value of a constant.
console.log('Good Morning, ' + NAME);
console.log('Good Afternoon, ' + NAME);
console.log('Good Evening, ' + NAME);

// 5 

let foo = 'bar';
{
  let foo = 'qux';
}

console.log(foo); // logs 'bar'

// This is because instead of changing the value of foo on line 234, we're delcaring a new blocked scoped variable `foo`.

// Line 1 initializes a variable named foo with the value'bar'. Line 2 starts a block, which creates a new scope for let variables. The variable on line 1 is still visible at this point, but line 3 declares a new variable named foo that shadows (hides) the variable from line 1. This second variable gets initialized to 'qux', but it goes out of scope on line 4 when the block ends. That brings foo from line 1 back into scope, so line 6 logs its value: bar.

// 6

const FOO = 'bar';
{
  const FOO = 'qux';
}

console.log(FOO);

// For much the same reason as the previous exercise, this program doesn't raise an error, and it logs bar on line 6. One key difference, though, is that we are using const instead of let, which may have led you to believe an error would occur on line 3. However, since the two const variables are separate entities -- that is, the declaration on line 3 declares a completely new constant -- no error occurs.

// Input/Output Exercises

// 1

touch greeter.js
let rlSync = require('readline-sync');

let name = rlSync.question("What's your name? ");
console.log(`Hello, ${name}!`)

// OR for browser

let name = prompt("What's your name? ");
console.log(`Hello, ${name}!`);

// 2
let firstName = prompt("What is your first name?" );
let lastName = prompt("What's your last name? ");
console.log(`Hello, ${firstName} ${lastName}!`);

// 3

age.js
let age = Number(prompt("How old are you? "));
console.log(`In 10 years, you will be ${age + 10} years old.`)
console.log(`In 20 years, you will be ${age + 20} years old.`)
console.log(`In 30 years, you will be ${age + 30} years old.`)
console.log(`In 40 years, you will be ${age + 40} years old.`)

// Functions Exercises

// 1

// This code outputs 1

// The foo() method call does not affect the output as within the `foo` method declaration on `lines 2-4`, we declare a new `bar` variable that is initialized to the value 2.

// 2 

greeter.js

function promptForName(firstOrLast) {
  return prompt(`What is your ${firstOrLast} name?`)
}
let firstName = promptForName('first');
let lastName = promptForName('last');

console.log(`Good Morning, ${firstName + ' ' + lastName}.`)
console.log(`Good Afternoon, ${firstName + ' ' + lastName}.`)
console.log(`Good Evening, ${firstName + ' ' + lastName}.`)

// LS Solution

function getName(prompt) {
  let readlineSync = require('readline-sync');
  let name = readlineSync.question(prompt);
  return name;
}

let firstName = getName('What is your first name? ');
let lastName = getName('What is your last name? ');
console.log(`Hello, ${firstName} ${lastName}!`);

// 3

function multiply(n1, n2) {
  return n1 * n2;
}

let firstNumber = Number(prompt('Entere the first number: '));
let secondNumber = Number(prompt('Enter the second number: '));

console.log(`${firstNumber} * ${secondNumber} = ${multiply(firstNumber, secondNumber)}`)

// LS Solution

function multiply(left, right) {
  return left * right;
}

function getNumber(prompt) {
  let readlineSync = require('readline-sync');
  return parseFloat(readlineSync.question(prompt));
}

let left = getNumber('Enter the first number: ');
let right = getNumber('Enter the second number: ');
console.log(`${left} * ${right} = ${multiply(left, right)}`);

// 4

function scream(words) {
  words = words + '!!!!';
  return;
  console.log(words);
}

scream('Yipeee');

// This code does not log anything to the console as the function terminates due to the `return` on line 347 before the `console.log` call is made.

// 5

function scream(words) {
  return words + '!!!!';
}

scream('Yipeee');

// This code does not log anything to the console, but does now return a value of Yipeee!!!!.

// 6

// In the code shown below, identify the following items:

// the function arguments: 2, 3, 4
// the function body: `let result = num1 * num2 * num3;
                  //  return result`
// the function declaration: 
              // function multiplyNumbers(num1, num2, num3) {
              //   let result = num1 * num2 * num3;
              //   return result;
              // }
// the function invocation
              // multiplyNumbers(2,3,4);
// the function name
              // multiplyNumbers
// the function parameters
              // num1, num2, num3
// the function return value
              // the value represented by the variable `result`.
// the names of all variables in this program
              // multiplyNummbers, result, num1, num2, num3, product

function multiplyNumbers(num1, num2, num3) {
  let result = num1 * num2 * num3;
  return result;
}

let product = multiplyNumbers(2, 3, 4);

// The function name is multiplyNumbers.

// The function arguments are the values 2, 3, and 4 between the parentheses on line 6. The function parameters are num1, num2, and num3 on line 1.

// The function body consists of everything between the { on line 1 and the } on line 4. It doesn't matter whether you include or exclude the braces as part of your answer.

// The function declaration is everything on lines 1-4. The function invocation is multiplyNumbers(2, 3, 4) on line 6.

// The function's return value is determined by multiplying the arguments together. That value is initially stored in the local variable result in the function's body. It gets assigned to product after the function returns.

// This code's complete list of variables includes multiplyNumbers, num1, num2, num3, result, and product. In particular, the function name and its parameters are all variables. In this case, multiplyNumbers is a global variable, but num1, num2, and num3 are local variables defined inside the function.

// 7

function foo(bar, qux) {
  console.log(bar);
  console.log(qux);
}

foo('Hello');

// logs 'Hello' and 'undefined', when we fail to provide an explicit arugment in the invocation, the parameter is assigned the value of `undefined`.

// 8

function foo(bar, qux) {
  console.log(bar);
  console.log(qux);
}

foo(42, 3.1415, 2.718);

// logs 42 and 3.1415, extra arguments are ignored.

// 9

// Identify all of the variables named on each line of the following code. You may assume that question is the name of a built-in function in JavaScript (it is not, so this code won't work as written).

function multiply(left, right) { // multiply, left, right
  let product = left * right; // product, left, right
  return product; // product
}

function getNumber(prompt) { // getNumber, prompt
  return parseFloat(question(prompt)); // parseFloat, question, prompt
}

let left = getNumber('Enter the first number: '); // left, getNumber
let right = getNumber('Enter the second number: '); // right, getNumber
console.log(`${left} * ${right} = ${multiply(left, right)}`); // console, left, right, multiply.

// LS Solution

// Line 1: multiply, left, right: The function name and the parameter names are all variable names.
// Line 2: product, left, right
// Line 3: product
// Line 6: getNumber, prompt
// Line 7: parseFloat, question, prompt. This one is a little tricky. parseFloat is an actual built-in function in JavaScript; we are pretending that question also is a built-in function. As such, we know that both parseFloat and question are variable names.
// Line 10: left, getNumber
// Line 11: right, getNumber
// Line 12: console, left, right, multiply: console.log is a little tricky here. console is the variable name for the built-in Console object. In contrast, console.log is the name of a method in that object. As such, log is a property name, not a variable name.

// 10 

function multiply(left, right) { // Mulitply(global), left(local), right(local)
  let product = left * right; // local: product, left, right
  return product; // local: product
}

function getNumber(prompt) { // global: getNumber, local: prompt
  return parseFloat(question(prompt)); // global: parsefloat, question, local: prompt;
}

let left = getNumber('Enter the first number: '); // global: left, getNumber
let right = getNumber('Enter the second number: '); // global: right, getNumber
console.log(`${left} * ${right} = ${multiply(left, right)}`); // global: console, left, right, multiply

// Global Variables: multiply, getNumber, left, right, console, parseFloat, question.
// Local Variables: left, right, product, prompt

// Function names are global variables unless those functions are defined as an object property or nested inside another function. Thus, multiply, getNumber, console, parseFloat, and question are all global variables in this program. In addition, function parameters and variables declared inside a function are always local variables. Thus, left, right, product, and prompt are all local variables.

// In the next exercise, we'll see why left and right are both global and local variables.

// 11

// No, the left and right on lines 1 and 2 are local parameter names for the `multiply` function. The `left` and `right` used on lines `10-12` are globally defined variables.

// LS

// They are not the same variables.

// The left and right variables declared on lines 10 and 11 are a little tricky. First, though they have the same names as the parameters defined for the multiply function, they are not the same variables. (The function parameters shadow the variables on lines 10 and 11.) Furthermore, they are global variables even though they are only accessible on line 12 (technically, left is also accessible on line 11 but is not used). They are considered global because they are defined at the topmost level of the program.

// The left and right parameters on line 1 are local variables since function parameters are always local to the function. Thus, line 2 refers to the local variables.

// Flow Control - Exercises

// 1

false || (true && false); // false
true || (1 + 2); // true
(1 + 2) || true; // 3
true && (1 + 2); // 3
false && (1 + 2); // false
(1 + 2) && true; // true
(32 * 4) >= 129; // false
false !== !true; // false
true === 4; // false
false === (847 === '847'); // true
false === (847 == '847'); // false
(!true || (!(100 / 5) === 20) || ((328 / 4) === 82)) || false; // true

// 2

function evenOrOdd(num) {
  if (num % 2 === 0) {
    console.log('even');
  } else {
    console.log('odd');
  }
}

evenOrOdd(2);
evenOrOdd(3);

// 3

function evenOrOdd(num) {
  if (Number.isInteger(num)) {
    if (num % 2 === 0) {
      console.log('even');
    } else {
      console.log('odd');
    }
  } else {
    console.log('Error: input must be a valid integer.')
  }
}

evenOrOdd(2);
evenOrOdd(3);
evenOrOdd('a');

// LS Solution

function evenOrOdd(number) {
  if (!Number.isInteger(number)) {
    console.log('Sorry, the value you passed is not an integer');
    return;
  }

  if (number % 2 === 0) {
    console.log('even');
  } else {
    console.log('odd');
  }
}

// 4

function barCodeScanner(serial) {
  switch (serial) {
    case '123':
      console.log('Product1');
    case '113':
      console.log('Product2');
    case '142':
      console.log('Product3');
    default:
      console.log('Product not found!');
  }
}

barCodeScanner('113'); // logs: Product2, product3, product not found!
// This is because of the lack of `break` satatement in the switch statements case clauses.

// 5

// return foo() ? 'bar' : qux();

// Refactored to be use an if statement.

// if (foo()) {
//   return 'bar';
// } else {
//   return qux();
// }

// 6

function isArrayEmpty(arr) {
  if (arr) {
    console.log('Not Empty');
  } else {
    console.log('Empty');
  }
}

isArrayEmpty([]); // 'Not Empty' // An empty array isn't a falsy value.

// 7

function capitalize(string) {
  if (string.length > 10) {
    return string.toUpperCase();
  } else {
    return string;
  }
}

capitalize('hello world');
capitalize('goodbye');

// LS Solution using ternary operator.

function capsLong(string) {
  return ((string.length > 10) ? string.toUpperCase() : string);
}

console.log(capsLong("Sue Smith"));     // => Sue Smith
console.log(capsLong("Sue Robertson")); // => SUE ROBERTSON
console.log(capsLong("Joe Thomas"));    // => Joe Thomas
console.log(capsLong("Joe Stevens"));   // => JOE STEVENS

// 8

function numberRange(num) {
  if (num >= 0 && num <= 50 ) {
    console.log(`${num} is between 0 and 50`);
  } else if (num >= 51 && num <= 100) {
    console.log(`${num} is between 51 and 100`);
  } else if (num > 100) {
    console.log('125 is greater than 100');
  } else if (num < 0) {
    console.log(`${num} is less than 0`);
  }
}

numberRange(25);
numberRange(75);
numberRange(125);
numberRange(-25);

// LS Solution

function numberRange(number) {
  if (number < 0) {
    console.log(`${number} is less than 0`);
  } else if (number <= 50) {
    console.log(`${number} is between 0 and 50`);
  } else if (number <= 100) {
    console.log(`${number} is between 51 and 100`);
  } else {
    console.log(`${number} is greater than 100`);
  }
}

// 9

console.log(false ?? null); // false
console.log(true ?? (1 + 2)); // true
console.log((1 + 2) ?? true); // 3
console.log(null ?? false); // false
console.log(undefined ?? (1 + 2)); // 3
console.log((1 + 2) ?? null); // 3
console.log(null ?? undefined); // undefined
console.log(undefined ?? null); // null

// 10

function show(foo = undefined, bar = null) {
  console.log(`foo is ${foo ?? 3}, bar is ${bar ?? 42}`);
}

show(5, 7); // foo is 5, bar is 7
show(0, 0); // foo is 0, bar is 0
show(4); // foo is 4, bar is 42
show(); // foo is 3, bar is 42

// Loops and Iterating - Exercises

// 1

let age = 20;

for (let adder = 10; adder <= 40; adder += 10) {
  console.log(`In ${adder} years, you will be ${age + adder} years old.`);
}

// LS Solution

let readlineSync = require('readline-sync');
let age = readlineSync.question('How old are you? ');
age = parseInt(age);
console.log(`You are ${age} years old.`);
for (let future = 10; future <= 40; future += 10) {
  console.log(`In ${future} years, you will be ${age + future} years old.`);
}

// 2

function factorial(num) {
  let result = 1;
  for (i = 1; i <= num; i += 1) {
    result *= i;
  }

  return result;
}

console.log(factorial(1));     // => 1
console.log(factorial(2));     // => 2
console.log(factorial(3));     // => 6
console.log(factorial(4));     // => 24
console.log(factorial(5));     // => 120
console.log(factorial(6));     // => 720
console.log(factorial(7));     // => 5040
console.log(factorial(8));     // => 40320

// LS Solution, working backwards

function factorial(number) {
  let result = 1;
  for (let counter = number; counter > 0; counter -= 1) {
    result *= counter;
  }

  return result;
}

console.log(factorial(1));     // => 1
console.log(factorial(2));     // => 2
console.log(factorial(3));     // => 6
console.log(factorial(4));     // => 24
console.log(factorial(5));     // => 120
console.log(factorial(6));     // => 720
console.log(factorial(7));     // => 5040
console.log(factorial(8));     // => 40320

// 3

let counter = 0;

while (counter = 1) { // reasignment that returns a truthy value, not testing for equality.
  console.log(counter);
  counter += 1;

  if (counter > 2) {
    break;
  }
}

// 4

for (let i = 0; i < 5;) {
  console.log(i += 1);
}

// The code doesn't produce an error since all 3 components of the for loop are optional. In this code, we omit the "next value" component; however, this isn't a problem here since we increment the loop variable on line 2.

// 5

function randomNumberBetween(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

let tries = 0;
let result = randomNumberBetween(1, 6);
tries += 1;

while (result <= 2) {
  result = randomNumberBetween(1, 6);
  tries += 1;
}

console.log('It took ' + String(tries) + ' tries to get a number greater than 2');

// Refactored to not call `randomnNumberBetween` in 2 different locations.

function randomNumberBetween(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

let tries = 0;
let result;

do {
  result = randomNumberBetween(1, 6);
  tries += 1;
} while (result <= 2)

console.log('It took ' + String(tries) + ' tries to get a number greater than 2');

// 6

function factorial(num) {
  let result = 1;
  for (i = 1; i <= num; i += 1) {
    result *= i;
  }

  return result;
}

// Refactored to use recursion.

function factorial(num) {
  if (num === 1) {
    return 1;
  }

  return num * factorial(num - 1);
}

console.log(factorial(4));

// Arrays - Exercises

// 1

// array1 4
// array2 5
// array3 0
// array4 3
// array 5 101

// 2

let myArray = [1, 3, 6, 11, 4, 2,
  4, 9, 17, 16, 0];

myArray.forEach(function (num) {
  if (num % 2 === 0) {
    console.log(num);
  }
});

// LS alt solution using a for loop

for (let i = 0; i < myArray.length; i += 1) {
  let value = myArray[i];
  if (value % 2 === 0) {
    console.log(value);
  }
}

// 3

let myArray = [
  [1, 3, 6, 11],
  [4, 2, 4],
  [9, 17, 16, 0],
];

for (let i = 0; i < myArray.length; i += 1) {
  myArray[i].forEach(function(num) {
    if (num % 2 === 0) {
      console.log(num);
    }
  })
}

// Alt LS Solutions

for (let i = 0; i < myArray.length; i += 1) {
  for (let j = 0; j < myArray[i].length; j += 1) {
    let value = myArray[i][j];
    if (value % 2 === 0) {
      console.log(value);
    }
  }
}

// 4

let myArray = [
  1, 3, 6, 11,
  4, 2, 4, 9,
  17, 16, 0,
];

let resArr = myArray.map(function(num) {
  if (num % 2 === 0) {
    return 'even';
  } else {
    return 'odd';
  }
});

// 5

function findIntegers(arr) {
  return arr.filter(el => Number.isInteger(el));
}

let things = [1, 'a', '1', 3, NaN, 3.1415, -4, null, false];
let integers = findIntegers(things);
console.log(integers); // => [1, 3, -4]
 
// LS Solution

function findIntegers(array) {
  return array.filter(function(element) {
    return Number.isInteger(element);
  });
}

// 6

function oddLengths(arr) {
  return arr.map(el => el.length).filter(el => (el % 2 !== 0));
}

let arr = ['a', 'abcd', 'abcde', 'abc', 'ab'];
console.log(oddLengths(arr)); // => [1, 5, 3]

// LS Solution

function oddLengths(strings) {
  let lengths = strings.map((letters) => letters.length);
  let oddLengths = lengths.filter((number) => number % 2 === 1);
  return oddLengths;
}

let arr = ['a', 'abcd', 'abcde', 'abc', 'ab'];
console.log(oddLengths(arr));

// 7

function sumOfSquares(array) {
  return array.reduce((acc, curr) => acc  + (curr * curr), 0)
}

let array = [3, 5, 7];
console.log(sumOfSquares(array)); // => 83

// LS Solution

function sumOfSquares(numbers) {
  return numbers.reduce((accumulator, number) => {
    return accumulator + number * number;
  }, 0);
}

let array = [3, 5, 7];
console.log(sumOfSquares(array)); // => 83

// 8 

function oddLengths(arr) {
  return arr.reduce((acc, curr) => {
    if (curr.length % 2 !== 0) {
      acc.push(curr.length);
    }
    return acc;
  }, [])
}

let arr = ['a', 'abcd', 'abcde', 'abc', 'ab'];
console.log(oddLengths(arr)); // => [1, 5, 3]

// LS Solution, same thing, just different wording.

function oddLengths(strings) {
  return strings.reduce((filteredNumbersArray, letters) => {
    let length = letters.length;
    if (length % 2 === 1) {
      filteredNumbersArray.push(length);
    }

    return filteredNumbersArray;
  }, []);
}

let arr = ['a', 'abcd', 'abcde', 'abc', 'ab'];
console.log(oddLengths(arr));

// 9

let numbers1 = [1, 3, 5, 7, 9, 11];
let numbers2 = [];
let numbers3 = [2, 4, 6, 8];

numbers1.includes(3);
numbers2.includes(3);
numbers3.includes(3);

// OR

function checkIfThree(arr) {
  return arr.indexOf(3) >= 0;
}

// 10

let arr = [
  ["hello", "world"],
  ["example", "mem", null, 6, 88],
  [4, 8, 12]
];

arr[1][3] = 606;

// Objects - Exercises

// 1

let person = {
  name:       'Bob',
  occupation: 'web developer',
  hobbies:    'painting',
};

person.name

// OR

person['name']

// 2 

// Which of the following values are valid keys for an object?

// 1 // yes
// '1' // yes
// undefined // yes
// 'hello world' // yes
// true // yes
// 'true' // yes

// All of these values or valid keys, however JavaScript will coerce the non-string key values to a string. Therfor `1` and `'1'` will be the same key.

// 3

let myArray = {
  '0': 1,
  '1': 2,
  '2': 3,
  'length': 3,
};

for (let i = 0; i < myArray.length; i += 1) {
  console.log(myArray[i]);
}

// 4

let obj = {
  b: 2,
  a: 1,
  c: 3,
};

let arr = Object.keys(obj);

let capArr = arr.map((el) => el.toUpperCase());

// 5

let myProtoObj = {
  foo: 1,
  bar: 2,
};

let myObj = Object.create(myProtoObj);

console.log(myObj);

// 6

// Which of the following values are primitive values? Which are objects? Which are neither?

// "foo" // primitive
// 3.1415 // primitive
// [ 'a', 'b', 'c' ] // Object
// false // Primitve
// foo // neither, foo is an indentifier. Identifiers are used to name things that have values, such as variables or functions.
// function bar() { return "bar"; } // Object, functions are objects.
// undefined // primitive
// { a: 1, b: 2 } // Object

// 7

let myProtoObj = {
  foo: 1,
  bar: 2,
};

let myObj = Object.create(myProtoObj);
myObj.qux = 3;
console.log(myObj);

let objKeys = Object.keys(myObj); // returns just the keys of the object itself and no the prototype keys.
objKeys.forEach(function(key) {
  console.log(key);
});

// logs: qux

for (let key in myObj) { // for..in loop iterates over both the objects keys and it's prototypes keys.
  console.log(key);
}

// logs: qux, foo, bar

// 8

function copyObj(obj, arr) {
  let resObj = {};

  if (arr) {
    for (let i = 0; i < arr.length; i += 1) {
      resObj[arr[i]] = obj[arr[i]];
    }

    return resObj;
  } else {
    return Object.assign(resObj, obj);
  }
}

// LS Solution

function copyObj(sourceObject, keys) {
  let destinationObject = {};

  if (keys) {
    keys.forEach(function(key) {
      destinationObject[key] = sourceObject[key];
    });

    return destinationObject;
  } else {
    return Object.assign(destinationObject, sourceObject);
  }
}

let objToCopy = {
  foo: 1,
  bar: 2,
  qux: 3,
};

let newObj = copyObj(objToCopy);
console.log(newObj);        // => { foo: 1, bar: 2, qux: 3 }

let newObj2 = copyObj(objToCopy, [ 'foo', 'qux' ]);
console.log(newObj2);       // => { foo: 1, qux: 3 }

let newObj3 = copyObj(objToCopy, [ 'bar' ]);
console.log(newObj3);       // => { bar: 2 }

// 9

let foo = {
  a: 'hello',
  b: 'world',
};

let qux = 'hello';

function bar(argument1, argument2) {
  argument1.a = 'hi';
  argument2 = 'hi';
}

bar(foo, qux);

console.log(foo.a); // 'hi'
console.log(qux); // 'hello'

// This program logs 'hi' and 'hello' to the console. This is because objects are mutable and primitives are immutable.

// When bar is invoked on line 13, argument1 is initialized to an object and argument2 is initialized to a string value.

// Line 9 reassigns an object property (argument1.a), which will mutate the object. Line 10 reassigns a variable, which completely replaces the value of the local argument2 variable.

// Thus, line 9 mutates foo by reassigning its a property to a new value ('hi'), and line 10's variable reassignment doesn't effect any variables outside of bar.

// Because foo was mutated, the access to foo.a on line 15 logs 'hi'. On the other hand, the variable reassignment on line 10 does not mutate qux's value, so line 16 logs hello - the original value of the qux variable.

// SD Note, variables as pointer! argument2 points to teh value that qux does, and therefor the reasignment changes the string value, and not the variable.

// 10


[1, 2, ["a", ["b", false]], null, {}]

// Primitives:
1, 2, 'a', 'b', false, null

// Objects:
[1, 2, ["a", ["b", false]], null, {}]
["a", ["b", false]]
["b", false]
{}

// 11

let obj = {
  foo: { a: "hello", b: "world" },
  bar: ["example", "mem", null, { xyz: 6 }, 88],
  qux: [4, 8, 12]
};

obj.bar[3].xyz = 606;

// 12

function foo(bar) {
  console.log(bar, bar, bar);
}

let bar = foo;

foo("hello"); // should print "hello hello hello"
bar("hi");    // should print "hi hi hi"

// 13

function foo(bar) {
  console.log(bar());
}

foo(function() { return 'Welcome'; });    // Should print 'Welcome'
foo(function() { return 3.1415; });    // Should print 3.1415
foo(function() {[1,2,3]; });    // Should print [1, 2, 3]

// 14

function hello(greeting, name) {
  return greeting + ' ' + name;
}

function xyzzy() {
  return { a: 1, b: 2, c: [3, 4, 5], d: {} };
}

const howdy = hello('Hi', 'Grace');
let foo = xyzzy();

// Variables
hello, greeting, name, xyzzy, howdy, foo

// Property names
a, b, c, d
// Array indexes are also property names, so 0, 1, 2.

// Primitive Values
' ', 1, 2, 3, 4, 5, a, b, c, d, 'hi', 'grace' // Array indexes are also property names, so 0, 1, 2

// Objects

function hello(greeting, name) {
  return greeting + ' ' + name;
}
function xyzzy() {
  return { a: 1, b: 2, c: [3, 4, 5], d: {} };
}

{ a: 1, b: 2, c: [3, 4, 5], d: {} }
[3, 4, 5]
{}

// 15

function bar(arg1, arg2) {
  let foo = 'Hello';
  const qux = {
    abc: [1, 2, 3, [4, 5, 6]],
    def: null,
    ghi: NaN,
    jkl: foo,
    mno: arg1,
    pqr: arg2,
  };

  return qux;
}

let result = bar('Victor', 'Antonina');

// Variables
bar, arg1, arg2, foo, qux, result

// Property names
abc, def, ghi, jkl, mno, pqr, 0, 1, 2, 3

// Primitive Values
'hello', 
1,2,3,4,5,6
abc, def, hgi, jkl, mno, pqr
null, NaN
0, 1, 2, 3
0, 1, 2
'victor', 'antonina'

// Objects
bar
const qux = {
  abc: [1, 2, 3, [4, 5, 6]],
  def: null,
  ghi: NaN,
  jkl: foo,
  mno: arg1,
  pqr: arg2,
};
[1, 2, 3, [4, 5, 6]]
[4, 5, 6]

// More Stuff - Exercises