// JS210 JavaScript Language Fundamentals -> Arrays

// 1 Array Copy Part 1

let myArray = [1, 2, 3, 4];
const myOtherArray = myArray;

myArray.pop();
console.log(myArray); // [1,2,3]
console.log(myOtherArray); // [1,2,3]

myArray = [1, 2];
console.log(myArray); // [1,2]
console.log(myOtherArray); // [1,2,3]

// 2 Array Copy Part 2

const myArray = [1, 2, 3, 4];
const myOtherArray = [];

for (i = 0; i < myArray.length; i++) {
  myOtherArray.push(myArray[i]);
}

myArray.pop();
console.log(myArray);               // [1, 2, 3]
console.log(myOtherArray);          // [1, 2, 3, 4]

// 2nd optiopn

const myArray = [1, 2, 3, 4];
const myOtherArray = myArray.slice();

myArray.pop();
console.log(myArray);               // [1, 2, 3]
console.log(myOtherArray);          // [1, 2, 3, 4]

// 3 Array Concat Part 1

function concat(array1, secondArg) {
  let returnArray = [];

  for (let i = 0; i < array1.length; i++) {
    returnArray.push(array1[i]);
  }

  if (Array.isArray(secondArg)) {
    for (let i = 0; i < secondArg.length; i++) {
      returnArray.push(secondArg[i]);
    }
  } else {
    returnArray.push(secondArg);
  }

  return returnArray;
}

concat([1, 2, 3], [4, 5, 6]);          // [1, 2, 3, 4, 5, 6]
concat([1, 2], 3);                     // [1, 2, 3]
concat([2, 3], ['two', 'three']);      // [2, 3, "two", "three"]
concat([2, 3], 'four');                // [2, 3, "four"]

// 4 Array Concat Part 2

// Relies on the first argument being an array

function concat(array1, ...args) {
  let returnArray = [];

  for (let i = 0; i < array1.length; i++) {
    returnArray.push(array1[i]);
  }

  for (const arg of args) {
    if (Array.isArray(arg)) {
      for (let i = 0; i < arg.length; i++) {
        returnArray.push(arg[i]);
      }
    } else {
      returnArray.push(arg);
    }
  }
  return returnArray;
}

concat([1, 2, 3], [4, 5, 6], [7, 8, 9]);    // [1, 2, 3, 4, 5, 6, 7, 8, 9]
concat([1, 2], 'a', ['one', 'two']);        // [1, 2, "a", "one", "two"]
concat([1, 2], ['three'], 4);               // [1, 2, "three", 4]

// LS Solution

function concat(...args) {
  const newArray = [];

  for (let argIndex = 0; argIndex < args.length; argIndex += 1) {
    let currentArg = args[argIndex];
    if (Array.isArray(currentArg)) {
      let arraySize = currentArg.length;
      for (let arrayIndex = 0; arrayIndex < arraySize; arrayIndex += 1) {
        newArray[newArray.length] = currentArg[arrayIndex];
      }
    } else {
      newArray[newArray.length] = currentArg;
    }
  }

  return newArray;
}

// 5 Array Pop and Push

function pop(arr) {
  let val = arr[arr.length - 1];
  arr.splice(arr.length - 1);

  return val;
}

const array1 = [1, 2, 3];
pop(array1);                        // 3
console.log(array1);                // [1, 2]
pop([]);                           // undefined
pop([1, 2, ['a', 'b', 'c']]);      // ["a", "b", "c"]

function push(arr, ...args) {
  const length = args.length;

  for (let i = 0; i < length; i += 1) {
    arr[arr.length] = args[i];
  }

  return arr.length;
}

const array2 = [1, 2, 3];
push(array2, 4, 5, 6);              // 6
console.log(array2);                // [1, 2, 3, 4, 5, 6]
push([1, 2], ['a', 'b']);          // 3
push([], 1);                       // 1
push([]);                          // 0

// pop version not using splice

function pop(array) {
  const arrayCopy = [];

  for (let i = 0; i < array.length; i += 1) {
    arrayCopy[i] = array[i];
  }

  let poppedElement = array[array.length - 1];
  array.length = 0;
  for (let i = 0; i < arrayCopy.length - 1; i += 1) {
    array.push(arrayCopy[i]);
  }

  return poppedElement;
}

// 6 Array and String Reverse

function reverse(input) {
  let result;

  if (typeof(input) === 'string') {
    result = '';
    for (i = input.length - 1; i >= 0; i--) {
      result += input[i];
    }
  } else if (Array.isArray(input)) {
    result = [];
    for (i = input.length - 1; i >= 0; i--) {
      result.push(input[i]);
    }
  }
  return result;
}

reverse('Hello');           // "olleH"
reverse('a');               // "a"
reverse([1, 2, 3, 4]);      // [4, 3, 2, 1]
reverse([]);                // []

const array = [1, 2, 3];
reverse(array);             // [3, 2, 1]
array;                      // [1, 2, 3]

// LS Solution

function reverse(inputForReversal) {
  if (Array.isArray(inputForReversal)) {
    return reverseArray(inputForReversal);
  } else {
    return reverseString(inputForReversal);
  }
}

function reverseArray(inputForReversal) {
  const reversed = [];
  const length = inputForReversal.length;

  for (let i = 0; i < length; i += 1) {
    reversed[length - 1 - i] = inputForReversal[i];
  }

  return reversed;
}

function reverseString(inputForReversal) {
  const stringArray = inputForReversal.split('');
  return reverseArray(stringArray).join('');
}

// 7 Array Shift and Unshift

function shift(array) {
  if (array.length === 0) {
    return undefined;
  }

  let val = array[0];

  for (let i = 0; i < array.length - 1; i++) {
    array[i] = array[i + 1];
  }

  array.length = array.length - 1;

  return val;
}

// LS Solutions

// shift
function shift(array) {
  let result;

  if (array.length !== 0) {
    result = array.splice(0, 1).pop();
  }

  return result;
}

// unshift
function unshift(array, ...args) {
  for (let i = 0; i < args.length; i += 1) {
    array.splice(i , 0, args[i]);
  }

  return array.length;
}

shift([1, 2, 3]);                // 1
shift([]);                       // undefined
shift([[1, 2, 3], 4, 5]);        // [1, 2, 3]

unshift([1, 2, 3], 5, 6);        // 5
unshift([1, 2, 3]);              // 3
unshift([4, 5], [1, 2, 3]);      // 3

const testArray = [1, 2, 3];
shift(testArray);                // 1
testArray;                       // [2, 3]
unshift(testArray, 5);           // 3
testArray;                       // [5, 2, 3]

// 8 Array Slice and Splice

// Slice

function slice(array, begin, end) {
  let resArray = [];

  for (i = begin; i < end && i < array.length; i++) {
    resArray.push(array[i]);
  }

  return resArray;
}

slice([1, 2, 3], 1, 2);               // [2]
slice([1, 2, 3], 2, 0);               // []
slice([1, 2, 3], 5, 1);               // []
slice([1, 2, 3], 0, 5);               // [1, 2, 3]

const arr1 = [1, 2, 3];
slice(arr1, 1, 3);                     // [2, 3]
arr1;                                  // [1, 2, 3]

// Splice

function splice(array, start, deleteCount, ...args) {
  //..
}

splice([1, 2, 3], 1, 2);              // [2, 3]
splice([1, 2, 3], 1, 3);              // [2, 3]
splice([1, 2, 3], 1, 0);              // []
splice([1, 2, 3], 0, 1);              // [1]
splice([1, 2, 3], 1, 0, 'a');         // []

const arr2 = [1, 2, 3];
splice(arr2, 1, 1, 'two');             // [2]
arr2;                                  // [1, "two", 3]

const arr3 = [1, 2, 3];
splice(arr3, 1, 2, 'two', 'three');    // [2, 3]
arr3;                                  // [1, "two", "three"]

const arr4 = [1, 2, 3];
splice(arr4, 1, 0);                    // []
splice(arr4, 1, 0, 'a');               // []
arr4;                                  // [1, "a", 2, 3]

const arr5 = [1, 2, 3];
splice(arr5, 0, 0, 'a');               // []
arr5;                                  // ["a", 1, 2, 3]

// LS Solution

function slice(array, begin, end) {
  const result = [];

  begin = begin > array.length ? array.length : begin;
  end = end > array.length ? array.length : end;

  for (let i = begin; i < end; i += 1) {
    result.push(array[i]);
  }

  return result;
}

function splice(array, start, deleteCount, ...args) {
  start = start > array.length ? array.length : start;
  deleteCount = deleteCount > (array.length - start) ? array.length - start : deleteCount;

  const arrayCopy = slice(array, 0, array.length);
  const elementCount = args.length;
  const newLength = array.length + elementCount - deleteCount;
  array.length = newLength;

  for (let i = 0; i < elementCount; i += 1) {
    array[start + i] = args[i];
  }

  let copyBackCount = arrayCopy.length - (start + deleteCount);
  for (let i = 0; i < copyBackCount; i += 1) {
    array[start + elementCount + i] = arrayCopy[start + deleteCount + i];
  }

  return slice(arrayCopy, start, start + deleteCount);
}

// 9 Oddities

// This return false as teh arrays are no the same array objects, but contain the same values.

// 10 Array Comparison
// The array comparison function that we implemented in the Arrays lesson (Alternate link if the previous link doesn't work) implicitly assumed that when comparing two arrays, any matching values must also have matching index positions. The objective of this exercise is to reimplement the function so that two arrays containing the same values—but in a different order—are considered equal. For example, [1, 2, 3] === [3, 2, 1] should return true.

function areArraysEqual(array1, array2) {
  if (array1.length !== array2.length) {
    return false 
  }

  let array2Copy = array2.slice(); // Needed in order to not mutate the passed in array2 for comparison.

  for (i = 0; i < array1.length; i++) {
    let index = array2Copy.indexOf(array1[i]);

    if (index < 0) {
      return false;
    } else {
      array2Copy.splice(index, 1);
    }
  }

  return true;
}

areArraysEqual([1, 2, 3], [1, 2, 3]);                  // true
areArraysEqual([1, 2, 3], [3, 2, 1]);                  // true
areArraysEqual(['a', 'b', 'c'], ['b', 'c', 'a']);      // true
areArraysEqual(['1', 2, 3], [1, 2, 3]);                // false
areArraysEqual([1, 1, 2, 3], [3, 1, 2, 1]);            // true
areArraysEqual([1, 2, 3, 4], [1, 1, 2, 3]);            // false
areArraysEqual([1, 1, 2, 2], [4, 2, 3, 1]);            // false
areArraysEqual([1, 1, 2], [1, 2, 2]);                  // false
areArraysEqual([1, 1, 1], [1, 1]);                     // false
areArraysEqual([1, 1], [1, 1]);                        // true
areArraysEqual([1, '1'], ['1', 1]);                    // true