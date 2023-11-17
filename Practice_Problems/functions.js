// JS210 JavaScript Language Fundamentals -> Functions

// 1
// What will the following code log to the console and why? Don't run the code until after you have tried to answer.

var myVar = 'This is global';

function someFunction() {
  var myVar = 'This is local';
}

someFunction();
console.log(myVar);

// This code will log 'This is global'

// This is because JavaScript uses lexical scope. This program declares two separate `myVar` variables, one in the global scope on line 5, and one in the scope of the function `someFuncton` on line 8. Functions in JavaScript create a new scope, "local" to the function.

// 2 
// What will the following code log to the console and why? Don't run the code until after you have tried to answer.

var myVar = 'This is global';

function someFunction() {
  var myVar = 'This is local';
  console.log(myVar);
}

someFunction();

// This code will log 'This is local' due to the fact that the `console.log`call was made within the scope of the `somefunction` function, and passed in the local variable `myVar` and not the global variable.

// JavaScript will first search for a variable with a matching name within it's current working scope, before searching through each of the next outer scopes until the global scope. This type of behavior with having two variables in different scopes is a form of variable shadowing, as the outer `myVar` variable is not accessible within the function scope due to their being another `myVar` varaible declared.

// 3
// What will the following code log to the console and why? Don't run the code until after you have tried to answer.

var myVar = 'This is global';

function someFunction() {
  myVar = 'This is local';
}

someFunction();
console.log(myVar);

// This code will log `This is local`.

// As the code only delcares one `myVar` variable on `line 38`, the code within the function `someFunction` changes the value of that `myVar` variable. As the method is called before the call to console.log, the `myVar` variable now points to the changed string 'This is local'.

// The `someFunction` function is able to alter the value of the `myVar` variable as variables in the global scope are accessible to the inner scopes of functions.

// 4

var myVar = 'This is global';

function someFunction() {
  console.log(myVar);
}

someFunction();

// This code will output 'This is global'

// When console.log tries to log the value of myVar, JavaScript first attempts to find a variable with that name in the current scope (i.e., the local scope of someFunction). Since myVar does not exist in this scope, JavaScript then starts looking for myVar in the next outer scope, which happens to be the global scope in this case. Here, JavaScript finds the global myVar and logs its value, "This is global".

// 5
function someFunction() {
  myVar = 'This is global';
}

someFunction();
console.log(myVar);

// This code will output `This is global`.

// Notice that on line 2 there is no variable declaration for myVar (i.e., there is no var keyword before myVar). As a result of this, JavaScript looks in the outer scope for the declaration. Since it doesn't exist, JavaScript binds myVar to be a "property" of the global object. This is "almost" the same as if myVar was globally declared. We will discuss more about why this is "almost"—but not "exactly"—the same in a later course when we cover the global / window object.

// 6

let a = 7;

function myValue(b) {
  b += 10;
}

myValue(a);
console.log(a);

// The code logs 7 to the console. The value assigned to variable `a` is 7 and it is a primitive value. Primitive values in JavaScript are immutable. Therefore, passing the variable `a` that is assigned a primitive value as an argument to a function, and consequently using it on any operation in the body of the function does not have any effect on the value assigned to `a`.

// 7

let a = 7;

function myValue(a) {
  a += 10;
}

myValue(a);
console.log(a);

// This will log 7

// This code is very similar to the example above, and although the functions parameter is also given the name `a`, this does not change the outcome. In this example now, the concept shown is variable shadowing. 

//The main difference is that this code demonstrates the concept of variable shadowing. In JavaScript, when an argument is passed to a function, a local variable with the same name as the corresponding parameter is created within the inner scope of the function. Therefore, there are two variables named a that exist in this program: one in the global scope and the other in the function's local scope. Therefore, the reassignment of the local variable a within the function has no effect on the global variable a.


// 8 Arguments Part 3

// What will the following code log to the console and why?

let a = [1, 2, 3];

function myValue(b) {
  b[2] += 7;
}

myValue(a);
console.log(a); // [1, 2, 10]

// The code logs [1, 2, 10] to the console. This is because arrays and objects, in JavaScript, are mutable. When the value assigned to a, an array, is passed to the function on line 7, a local variable b is initialized (on line 3) to the same array that a is assigned. Therefore, when the program executes the statement b[2] += 7 on line 4, it is actually being executed on the array assigned to a. Consequently, when the value of a is logged on line 8, we can see the result of this mutation: [1, 2, 10].

// 9

console.log(a);

var a = 1;

// This will log `undefined`.

// This is an example of `hoisting`. On `line 113` the program initializes `a` to the value of 1. Breaking this down further, first the variable `a` is declared, then it is assigned the value of 1.

// The JavaScript interpreter doesn't immediately execute all of a programs code line by line, instead it first goes over the code to find and associate variable delcaratiomns with their appropriate scope. Visually, this is as if Javascript moves each variable declaration to the top of tits scope, but the assignment operation is not hoisted.

// This result in the code looking like:

var a;
console.log(a);

a = 1;

// As such, the variable `a` is declared at the time it's passed to `console.log`, however it's value is undefined.

// 10

logValue();

function logValue() {
  console.log('Hello, world!');
}

// This code will output `Hello, word!` as a result of hoisting.

// With function declarations, everything is hoisted including the name and body. This code is equivalent to:

function logValue() {
  console.log('Hello, world!');
}

logValue();

// FE:

var logValue = 'foo';

function logValue() {
  console.log('Hello, world!');
}

console.log(typeof logValue);

// After hoisting is equivalent to:

function logValue() {
  console.log('Hello, world!');
}

logValue = 'foo';

console.log(typeof logValue);