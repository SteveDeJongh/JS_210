// Lesson 4 Practice problem: Intermediate Array Uses

// 1

// Write a function that creates and returns a new array from its array argument. The new array should contain all values from the argument array whose positions have an odd index.

function oddElementsOf(arr) {
  let resArray = [];

  for (i = 1; i < arr.length; i += 2) {
    resArray.push(arr[i]);
  }

  return resArray;
}

let digits = [4, 8, 15, 16, 23, 42];

oddElementsOf(digits);    // returns [8, 16, 42]

// LS Solution

function oddElementsOf(arr) {
  let oddElements = [];
  let length = arr.length;

  for (let index = 1; index < length; index += 2) {
    oddElements.push(arr[index]);
  }

  return oddElements;
}

let digits = [4, 8, 15, 16, 23, 42];

oddElementsOf(digits);    // returns [8, 16, 42]

// 2

// Write a function that takes an array argument and returns a new array that contains all the argument's elements in their original order followed by all the argument's elements in reverse order.

function mirroredArray(arr) {
  let resArr = arr.slice(0);
  return resArr.concat(arr.reverse());
}

let digits = [4, 8, 15, 16, 23, 42];

mirroredArray(digits);

// LS Solution

function mirroredArray(arr) {
  return arr.concat(arr.slice().reverse());
}

let digits = [4, 8, 15, 16, 23, 42];
mirroredArray(digits);  // returns [4, 8, 15, 16, 23, 42, 42, 23, 16, 15, 8, 4]

// 3

// Use the array sort method to create a function that takes an array of numbers and returns a new array of the numbers sorted in descending order. Do not alter the original array.

function sortDescending(arr) {
  let arrCopy = arr.slice();
  return arrCopy.sort((a, b) => b - a);
}

let array = [23, 4, 16, 42, 8, 15];
let result = sortDescending(array);
console.log(result);                 // logs    [42, 23, 16, 15, 8, 4]
console.log(array);                  // logs    [23, 4, 16, 42, 8, 15]

// 4

// Write a function that takes an array of arrays as an argument, and returns a new array that contains the sums of each of the sub-arrays.

function matrixSums(arr) {
  let result = [];

  arr.forEach((element) => result.push(element.reduce((acc, curr) => acc + curr)));

  return result;
}

matrixSums([[2, 8, 5], [12, 48, 0], [12]]);  // returns [15, 60, 12]

// LS Solution

function matrixSums(arr) {
  let sums = [];
  let outerLen = arr.length;

  for (let mainIndex = 0; mainIndex < outerLen; mainIndex += 1) {
    let currentSum = 0;
    let innerLen = arr[mainIndex].length;
    for (let subIndex = 0; subIndex < innerLen; subIndex += 1) {
      currentSum += arr[mainIndex][subIndex];
    }

    sums.push(currentSum);
  }

  return sums;
}

matrixSums([[2, 8, 5], [12, 48, 0], [12]]);  // returns [15, 60, 12]

// 5

// Write a function that takes an array, and returns a new array with duplicate elements removed.

function uniqueElements(arr) {
  let resArray = [];

  for (i = 0; i < arr.length; i++) {
    if (!resArray.includes(arr[i])) {
      resArray.push(arr[i]);
    }
  }
  return resArray;
}

uniqueElements([1, 2, 4, 3, 4, 1, 5, 4]);  // returns [1, 2, 4, 3, 5]

// LS Solution

function uniqueElements(arr) {
  let uniques = [];
  let len = arr.length;

  for (let index = 0; index < len; index += 1) {
    if (uniques.indexOf(arr[index]) === -1) {
      uniques.push(arr[index]);
    }
  }

  return uniques;
}

uniqueElements([1, 2, 4, 3, 4, 1, 5, 4]);  // returns [1, 2, 4, 3, 5]
