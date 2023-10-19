// Lesson 4 Practice problem: Basic Array Uses

// 1 
function firstElementOf(arr) {
  return arr[0];
}

firstElementOf(['U', 'S', 'A']);  // returns "U"

// 2
function lastElementOf(arr) {
 return arr[arr.length - 1];
}

lastElementOf(['U', 'S', 'A']);  // returns "A"

// 3

function nthElementOf(arr, index) {
  return arr[index];
}

let digits = [4, 8, 15, 16, 23, 42];

nthElementOf(digits, 3);   // returns 16
nthElementOf(digits, 8);   // what does this return? undefined
nthElementOf(digits, -1);  // what does this return? undefined

// 4

// Yes, we can do this since all arrays are objects in JavaScript. You will learn more about this in the next lesson, but for now, try these statements on the digits array you used above and examine the return values.

digits[-1] = -42;
nthElementOf(digits, -1); // Returns -42
digits[-1]; // Returns -42
digits['-1'];   // Returns -42 // Note that we are using a string here

// 5
function firstNOf(arr, count) {
  let resArray = [];
  for (let i = 0; i < count; i++) {
    resArray.push(arr[i]);
  }
  return resArray;
}

let digits = [4, 8, 15, 16, 23, 42];
firstNOf(digits, 3);    // returns [4, 8, 15]

// LS Solution using slice

function firstNOf(arr, count) {
  return arr.slice(0, count);
}

let digits = [4, 8, 15, 16, 23, 42];
firstNOf(digits, 3);    // returns [4, 8, 15]

// 6

function lastNOf(arr, count) {
  let resArray = [];
  for (let i = (arr.length - 1); i > (arr.length - count - 1); i--) {
    resArray.unshift(arr[i]);
  }
  return resArray;
}

let digits = [4, 8, 15, 16, 23, 42];
lastNOf(digits, 3);    // returns [16, 23, 42]

// LS Solution, again using slice

function lastNOf(arr, count) {
  return arr.slice(arr.length - count);
}

let digits = [4, 8, 15, 16, 23, 42];
lastNOf(digits, 3);    // returns [16, 23, 42]

// 7

// Using the function from the previous problem, What happens if you pass a count greater than the length of the array? How can you fix the function so it returns a new instance of the entire array when count is greater than the array length?

// Algorithm
// When you pass a count greater than the array length, the arithmetic in the function becomes a negative value. slice interprets a negative value as a position relative to the end of the array. Thus, if we pass a count of 9 with our digits array, lastNOf calls slice with an argument of -3. slice thus returns the final three elements of digits.

// To change this behavior, we can calculate the starting position, then adjust it to 0 if it is negative. We can pass the resulting value to slice, which returns a new copy of the array when the value is 0.

function lastNOf(arr, count) {
  let start = arr.length - count;

  if (start < 0) {
    return arr.slice(0);
  } else {
    return arr.slice(arr.length - count);
  }
}

let digits = [4, 8, 15, 16, 23, 42];
lastNOf(digits, 3);    // returns [16, 23, 42]

// LS Solution

function lastNOf(arr, length) {
  let index = arr.length - length;

  if (index < 0) {
    index = 0;
  }

  return arr.slice(index);
}

let digits = [4, 8, 15, 16, 23, 42];
lastNOf(digits, 8);    // returns [4, 8, 15, 16, 23, 42]

// 8

function endsOf(beginningArr, endingArr) {
  return [beginningArr[0], endingArr[endingArr.length -1]]
}

endsOf([4, 8, 15], [16, 23, 42]);  // returns [4, 42]