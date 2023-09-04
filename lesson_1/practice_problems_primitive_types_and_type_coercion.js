// Practice PRoblems: Primitive Types and Type Coercion

// 1

let x = '13';
let y = 9;

console.log(parseInt(x, 10) + y);

// 2

// A Number, as the - * / % operators are only defined for numbers.

// Unlike the addition symbol, which both adds numbers and concatenates strings, the other mathematical symbols all try to convert any strings to numbers before performing the calculation. If any string cannot be converted to a number, the calculation will result in NaN.

// 3

let npa = 212;
let nxx = 555;
let num = 1212;

console.log(String(npa) + nxx + num);

// Or the not recommended way of concatenating with an empty String

npa = '' + npa;
nxx = nxx + '';
num += '';

console.log(npa + nxx + num);  // 2125551212

// Recall, that this approach to converting a number to a string is not the recommended since the intent is not clear. Take this as input for when you read code in the wild.

// 4

console.log(String(npa) + String(nxx) + String(num));

// 5

let bool = true;
let arr = [1, 2, 3];

console.log(bool.toString());  // "true"
console.log(arr.toString());   // "1,2,3"

console.log(bool.toString() + arr.toString()); // "true1,2,3"