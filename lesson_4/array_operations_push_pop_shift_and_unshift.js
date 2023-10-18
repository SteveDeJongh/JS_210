// Lesson 4 Practice Problems: Array operations: push, pop, shift, and unshift.

// 1

function push(arr, el) {
  arr[arr.length] = el;
  return arr.length
}

let count = [0, 1, 2];
push(count, 3);         // 4
count;                  // [ 0, 1, 2, 3 ]

// 2

function pop(arr) {
  let val = arr[arr.length - 1];
  arr.length = (arr.length - 1);
  return val;
}

let count = [1, 2, 3];
pop(count);             // 3
count;                  // [ 1, 2 ]

// LS Solution

const pop = array => {
  if (array.length === 0) {
    return undefined;
  }

  let newLength = array.length - 1;
  let value = array[newLength];
  array.length = newLength;
  return value;
};

// 3

let unshift = function(array, value) {
  for (let index = array.length; index > 0; index -= 1) {
    array[index] = array[index - 1];
  }

  array[0] = value;
  return array.length;
};

let count = [1, 2, 3];
unshift(count, 0);      // 4
count;                  // [ 0, 1, 2, 3 ]

// 4

function shift(arr) {
  let val = arr[0];
  
  for (let i = 0; i < arr.length; i++) {
    arr[i] = arr[i+1];
  }

  arr.length = arr.length - 1;
  return val;
}

let count = [1, 2, 3];
shift(count);           // 1
count;                  // [ 2, 3 ]

// LS Solution

let shift = function(array) {
  let first = array[0];

  if (array.length === 0) {
    return undefined;
  }

  for (let index = 0; index < array.length - 1; index += 1) {
    array[index] = array[index + 1];
  }

  array.length = array.length - 1;
  return first;
}