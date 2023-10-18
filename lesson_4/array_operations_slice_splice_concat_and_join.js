// Lesson 4 Practice Problems: Array operations: slice, splice, concat, and join

// 1

// Write a function named slice that accepts three arguments: an Array, a start index, and an end index. The function should return a new Array that contains values from the original Array starting with the value at the starting index, and including all values up to but not including the end index. Do not modify the original Array.

function push(arr, el) {
  arr[arr.length] = el;
  return arr.length
}

function slice(arr, start, end) {
  let newArray = [];

  for (let i = start; i < end; i++) {
    newArray.push(arr[i]);
  }

  return newArray;
}

slice([1, 2, 3, 4, 5], 0, 2);                      // [ 1, 2 ]
slice(['a', 'b', 'c', 'd', 'e', 'f', 'g'], 1, 3);  // [ 'b', 'c' ]

// 2

// Write a function named splice that accepts three arguments: an Array, a start index, and the number of values to remove. The function should remove values from the original Array, starting with the start index and removing the specified number of values. The function should return the removed values in a new Array.

function splice(array, begin, number) {
  let removedValues = [];
  for (let index = begin; index < array.length; index += 1) {
    if (index < begin + number) {
      push(removedValues, array[index]);
    }

    array[index] = array[index + number];
  }

  array.length = array.length - removedValues.length;
  return removedValues;
}

let count = [1, 2, 3, 4, 5, 6, 7, 8];
splice(count, 2, 5);                   // [ 3, 4, 5, 6, 7 ]
count;                                 // [ 1, 2, 8 ]

// 3

// Write a function named concat that accepts two Array arguments. The function should return a new Array that contains the values from each of the original Arrays.

function concat(arr1, arr2) {
  let resultArray = [];

  for (let i = 0; i < arr1.length; i++) {
    push(resultArray, arr1[i]);
  }

  for (let i = 0; i < arr2.length; i++) {
    push(resultArray, arr2[i]);
  }

  return resultArray;
}

concat([1, 2, 3], [4, 5, 6]);       // [ 1, 2, 3, 4, 5, 6 ]

// 4

// Write a function named join that accepts two arguments: an Array and a String. The function should coerce each value in the Array to a String, and then join those values together using the second argument as a separator. You may assume that a separator will always be passed.

// You can call the String function on any JavaScript value to get its String representation.

function join(arr, seperator) {
  let resultString = '';

  for (let i = 0; i < arr.length; i++) {
    if (i !== arr.length - 1) {
      resultString += String(arr[i]);
      resultString += String(seperator);
    } else {
      resultString += String(arr[i]);
    }
  }
  return resultString;
}

join(['bri', 'tru', 'wha'], 'ck ');       // 'brick truck wha'
join([1, 2, 3], ' and ');                 // '1 and 2 and 3'

// LS Solution

function join(array, separator) {
  let result = '';

  for (let index = 0; index < array.length; index += 1) {
    result += String(array[index]);

    if (index < array.length - 1) {
      result += separator;
    }
  }

  return result;
}