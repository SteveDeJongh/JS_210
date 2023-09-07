// Review: Objects and Primitive Values

// 1

let myWord = 'Hello';
myWord.concat(' there.');

console.log(myWord); // 'Hello'

// The myWord variable is assigned to a string, which as a primitive is immutable. Calling concat on the string returns a new string with the string there. appended to it. This doesn't affect the original string, and we don't do anything with the return value.

// 2

let myWord = 'Hello';
myWord.repeat(3);
console.log(myWord); // 'Hello'
myWord.replace('H', 'J');
console.log(myWord); // 'Hello'
myWord.split(' ');
console.log(myWord); // 'Hello'

// Each of the console.log() invocations logs the string 'Hello'. This is the same string in each case, and it isn't affected by any of the intervening method invocations (repeat, replace, and split), each of which return a new string but don't have any effect on the original string, which is immutable. It doesn't matter which String methods we call on the string, or in which order. Strings, being primitive values, are immutable.

// 3

let myWords = ['Hello'];
myWords.push('Goodbye');

console.log(myWords); // ['Hello', 'Goodbye']

// In this case, `myWords` is an array object and is mutable, and the array.prototype.push() functions appends the passed in argument to the array object.

// This logs [ 'Hello', 'Goodbye' ] to the console. The value assigned to the myWords variable is an array. Arrays are reference types and therefore mutable. The Array.push method mutates the array by adding an element to it, so that when we log myWords we get the mutated array.

// 4

let myWords = ['Hello'];
myWords.concat(['Goodbye']);

console.log(myWords); // ['Hello']

// The array.concat method does not mutate the array, but instead returns a new array of the two arrays merged into one.

// This logs [ 'Hello' ] to the console. Although myWords is assigned to an array, which is a reference type and therefore mutable, the Array.concat method doesn't mutate the array it is called on; it instead returns a new array. Just because reference types are mutable, we shouldn't assume that all methods called on those types will mutate them.

// 5

let myWords = ['Hello'];
myWords[0].toUpperCase();

console.log(myWords); // ['Hello']

//This logs [ 'Hello' ] to the console. Although myWords is assigned to an array, which is a reference type and therefore mutable, we're actually calling the toUpperCase() method on the string at index 0 of the array. Being primitive types, strings are immutable, so the method has no effect on the string (it instead returns a new string), and we're not mutating the array or changing the value at index 0.

// 6

let myWords = ['Hello'];
myWords[0] = myWords[0].toUpperCase();

console.log(myWords); // ['HELLO']

// Although we are still calling the `tpUpperCase()` method on the imutable string at index 0, we are also re-assigning the array value at index 0 to the return value of the method call, which is the new string `HELLO`.

// This logs [ 'HELLO' ] to the console. Unlike the previous example, here we are mutating the array by changing the value at index 0. It's important to note that we aren't mutating the original string, but instead setting the value at index 0 to a new string returned by calling String.prototype.toUpperCase on the original string.