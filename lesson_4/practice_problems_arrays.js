// Practice Problems: Arrays

// 1

function lastInArray(arr) {
  return arr[arr.length - 1];
}

// LS Solution

let lastInArray = arr => arr[arr.length - 1];

console.log(lastInArray([1,2,3,4]));

// 2

function rollCall(arr) {
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }
}

const NAMES = ['Steve', 'Martha', 'Pat'];
rollCall(NAMES);

// 3

function reversed(arr) {
  let reversedArray = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    reversedArray.push(arr[i])
  }

  return reversedArray
}

const NUMBERS = [1, 2, 3, 4, 5];

reversed(NUMBERS);

// 4

function toString(arr) {
  let resString = '';

  for (let i = 0; i < arr.length; i++) {
    resString += String(arr[i]);
  }

  return resString;
}

toString([1, 'a', 4]);