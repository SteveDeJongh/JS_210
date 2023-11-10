// JS210 JavaScript Language Fundamentals -> Medium 2

// 1 Defaults
function processOrder(price, quantity, discount, serviceCharge, tax) {
  if (!quantity) {
    quantity = 1;
  }

  if (!discount) {
    discount = 0;
  }

  if (!serviceCharge) {
    serviceCharge = 0.1;
  }

  if (!tax) {
    tax = 0.15;
  }

  return (price * quantity) * (1 - discount) * (1 + serviceCharge) * (1 + tax);
}

processOrder(100);      // 126.5

//

function processOrder(price, quantity, discount, serviceCharge, tax) {
  quantity = quantity || 1;
  discount = discount || 0;
  serviceCharge = serviceCharge || 0.1;
  tax = tax || 0.15;

  return (price * quantity) * (1 - discount) * (1 + serviceCharge) * (1 + tax);
}

// The limitation of these solutions is that when one of the optional arguments has a value of 0, the function incorrectly treats that argument as if it has been omitted. For example:

processOrder(100, 2, 0.1, 0, 0);      // 227.7 -- incorrect result!

// This happens because 0 is a falsy value in JavaScript, so any arguments with a value of 0 get reassigned a default value. One way to prevent this from happening is to explicitly test whether the input arguments have a value of undefined, instead of relying on them being falsy — e.g., (quantity === undefined). (Note that when the value passed for discount is 0, the function works as expected because the default value of discount is also 0.)

// 2 Equal

// Does not return expected result:

const person = { name: 'Victor' };
const otherPerson = { name: 'Victor' };

console.log(person === otherPerson);    // false -- expected: true

// This returns false as `person` and `otherPerson` are the not the same object. This can be fixed by ensuring that both variables point to the same object.

// Refactored

const person = { name: 'Victor' };
const otherPerson = person;

console.log(person === otherPerson);    // true

// 3 Amount Payable

let startingBalance = 1;
const chicken = 5;
const chickenQuantity = 7;

function totalPayable(item, quantity) {
  return startingBalance + (item * quantity);
}

startingBalance = 5;
console.log(totalPayable(chicken, chickenQuantity)); // 40

startingBalance = 10;
console.log(totalPayable(chicken, chickenQuantity)); // 45

// 4 Caller

// function doubler(number, caller) {
//   console.log(`This function was called by ${caller}.`);
//   return number + number;
// }

// doubler(5, 'Victor');                   // returns 10
// logs:
// This function was called by Victor.

function makeDoubler(name) {
  return function doubler(num) { 
    // This could be done as an arrow function as well 'return num => { ...`
    console.log(`This function was called by ${name}.`)
    return num + num;
  }
}

const doubler = makeDoubler('Victor');
doubler(5);                             // returns 10
// logs:
// This function was called by Victor.

// 5 What's My Value?

const array = ['Apples', 'Peaches', 'Grapes'];

array[3.4] = 'Oranges';
console.log(array.length); // logs 3
console.log(Object.keys(array).length); // logs 4

array[-2] = 'Watermelon';
console.log(array.length); // logs 3
console.log(Object.keys(array).length); // logs 5

// The result is this way as [3.4] and [-2] add the strings as values for new object keys, instead of inserting the strings at element indices in the array, which can only be whole positive integers.

const array = ['Apples', 'Peaches', 'Grapes'];
array[3.4] = 'Oranges';
array[-2] = 'Watermelon';

console.log(array);  // ["Apples", "Peaches", "Grapes", 3.4: "Oranges", -2: "Watermelon"]

console.log(Object.keys(array));      // ["0", "1", "2", "3.4", "-2"]

// "0", "1", "2" are the indices/keys/property names for "Apples", "Peaches", "Grapes"
console.log(array[0]);                // Apples
console.log(array[1]);                // Peaches
console.log(array[2]);                // Grapes
console.log(array['2']);              // Grapes

// "3.4" and "-2" are keys/property names that exist in the 'Array Object'
console.log(array[3.4]);              // Oranges
console.log(array[-2]);               // Watermelon
console.log(array['-2']);             // Watermelon

// 6 Length

const languages = ['JavaScript', 'Ruby', 'Python'];
console.log(languages); // ['JavaScript', 'Ruby', 'Python']
console.log(languages.length); // 3

languages.length = 4;
console.log(languages); // ['JavaScript', 'Ruby', 'Python', empty]
console.log(languages.length); // 4

languages.length = 1; 
console.log(languages); // ['JavaScript']
console.log(languages.length); // 1

languages.length = 3;
console.log(languages); // ['JavaScript', empty, empty]
console.log(languages.length); // 3

languages.length = 1;
languages[2] = 'Python';
console.log(languages); // ['JavaScript', empty, 'Python']
console.log(languages[1]); // undefined
console.log(languages.length); // 3

// The key takeaway for this exercise is that the length property can be explicitly set (recall that arrays are zero-indexed). Setting the length to a value that is less than the current length truncates the array; re-setting the length to a higher value does not bring back the truncated elements. Setting the length to a value greater than the current length creates 'empty slots' in the array, but the number of actual elements does not increase. Furthermore, since the value of the length is always equal to the last index plus 1, adding an element to index 2 of a one-element array changes the array's length to 3, even though the array only has two actual elements (at indices 0 and 2).

// 7 The Red Pill

function one() {
  function log(result) {
    console.log(result);
  }

  function anotherOne(...args) {
    let result = '';
    for (let i = 0; i < args.length; i += 1) {
      result += String.fromCharCode(args[i]);
    }

    log(result);
  }

  function anotherAnotherOne() {
    console.log(String.fromCharCode(87, 101, 108, 99, 111, 109, 101));
    anotherOne(116, 111);
  }

  anotherAnotherOne();
  anotherOne(116, 104, 101);
  return anotherOne;
}

one()(77, 97, 116, 114, 105, 120, 33);

// Welcome
// to
// the
// Matrix!

// The trick to solving this problem is to follow the sequence of function calls. The call to the one function may look confusing, but it is actually just two successive function calls (because the one function returns the anotherOne function). Notice that when the anotherOne function is returned, it still has access to the log function that is declared in its enclosing scope (closure) inside the one function.

// 1: one();
// 2: anotherAnotherOne();                         // Welcome
// 3: anotherOne(116, 111);
// 4: log(result);                                 // to
// 5: anotherOne(116, 104, 101);
// 6: log(result);                                 // the
// 7: anotherOne(77, 97, 116, 114, 105, 120, 33);
// 8: log(result);                                 // Matrix!