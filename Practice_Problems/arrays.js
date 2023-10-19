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

function shift(array) {
  let result;

  if (array.length !== 0) {
    result = array.splice(0, 1).pop();
  }

  return result;
}

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