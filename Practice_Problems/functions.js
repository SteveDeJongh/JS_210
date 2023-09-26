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
