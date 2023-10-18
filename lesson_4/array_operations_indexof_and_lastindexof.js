// Lesson 4 Practice Problems: Array operations: indexOf and lastIndexOf

// 1

// Write a function indexOf that accepts two arguments: an array and a value. The function returns the first index at which the value can be found, or -1 if the value is not present.

function indexOf(arr, match) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === match) {
      return i;
    }
  }
  return -1;
}

indexOf([1, 2, 3, 3], 3);         // 2
indexOf([1, 2, 3], 4);            // -1

// 2

// Write a function lastIndexOf that accepts two arguments: an array and a value. The function returns the last index at which the value can be found in the array, or -1 if the value is not present.

function lastIndexOf(arr, match) {
  for (let i = arr.length - 1; i >= 0; i--) {
    if (arr[i] === match) {
      return i;
    }
    return -1;
  }
}

lastIndexOf([1, 2, 3, 3], 3);     // 3
lastIndexOf([1, 2, 3], 4);        // -1