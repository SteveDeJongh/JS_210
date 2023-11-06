// JS210 JavaScript Language Fundamentals -> Objects

// 1 Literal

const myObject = {
  a: 'name',
  'b': 'test',
  123: 'c',
  1: 'd',
};

myObject[1];
myObject[a];
myObject.a;

// The expression myObject[a] raises a ReferenceError. The bracket notation 'myObject[a]' is looking for an 'a' variable to use as the lookup key, instead of searching for the 'a' key.

// 2 Literal Method

const person = {
  firstName() {
    return 'Victor';
  },
  lastName() {
    return 'Reyes';
  },
};

console.log(`${person.firstName} ${person.lastName}`);

// Just as functions, object literal methods must be called by appending parentheses in order to be executed, otherwise the function itself is returned.

person.firstName();
// 'Victor'
person.firstName;
// ƒ firstName() {
//     return 'Victor';
//   }

// 3 Mutation

const array1 = ['Moe', 'Larry', 'Curly', 'Shemp', 'Harpo', 'Chico', 'Groucho', 'Zeppo'];
const array2 = [];

for (let i = 0; i < array1.length; i += 1) {
  array2.push(array1[i]);
}

for (let i = 0; i < array1.length; i += 1) {
  if (array1[i].startsWith('C')) {
    array1[i] = array1[i].toUpperCase();
  }
}

console.log(array2); // ["Moe", "Larry", "Curly", "Shemp", "Harpo", "Chico", "Groucho", "Zeppo"]

// The elements are string primitives and thus immutable.

// FE If there's an object literal as part of the leemtnsh pushed to `array2`, then yes the changes to that object literla would be reflected in both arrays.

// 4 Dynamic

const myObject = {
  prop1: '123',
  prop2: '234',
  'prop 3': '345',
};

const prop2 = '456';
myObject['prop2'] = '456'; // changes 'prop2' to '456'
myObject[prop2] = '678'; // creates new '456' key with a value of '678'

console.log(myObject[prop2]); // 678 // essentially looks up myObject['456'];
console.log(myObject.prop2); // 456 // looks up myObject['prop2']

// 5 Array Object Part 1

const myArray = ['a', 'b', 'c'];

console.log(myArray[0]); // a
console.log(myArray[-1]); // undefined

myArray[-1] = 'd';
myArray['e'] = 5;
myArray[3] = 'f';

console.log(myArray[-1]); // d
console.log(myArray['e']); // 5
console.log(myArray); // ['a', 'b', 'c', 'f', -1: 'd', e: 5]

// Arrays are JavaScript Objects! If you think about it from that perspective, it makes sense that using -1 as an "index" (or key), on line 4, does not return the last value of the array but instead returns undefined, which is the expected result when trying to access an object's property that is not defined or does not exist. If you take a look at the array logged on line 89, you can see that for any of its values that have a key (property name) of anything besides a non-negative integer, the key is also displayed when the array is logged.

// 6 Array Object Part 2

const myArray = [5, 5];
myArray[-1] = 5;
myArray[-2] = 5;

function average(array) {
  let sum = 0;

  for (let i = -2; i < array.length; i += 1) {
    sum += array[i];
  }

  return sum / array.length;
}

average(myArray);

// This will log an average of 10. This is because, when the user adds the keys `-1` and `-2` to the `myArray` array, these are added as properties and not added to the length of the array. The `for` loop is still able to access the values at these keys as the `[-1]`, and `[-2]` notation gets converted into strings to references it's values, which then gets added to the local variable `sum`.

// An array property with a key of anything other than a non-negative integer is not counted as part of the array's length. Therefore in the code above, the length of the array is 2, instead of 4 like the user expected. So the expression in the return statement evaluates to 20 / 2 and the function returns 10.

// FE Refactor the `average` function so that it returns the reuslt that the user expected.

const myArray = [5, 5];
myArray[-1] = 5;
myArray[-2] = 5;

function average(array) {
  let sum = 0;
  let count = 0;

  for (let i = -2; i < array.length; i += 1) {
    sum += array[i];
    count++;
  }

  return sum / count;
}

average(myArray);

// 7 What's my Bonus

function calculateBonus() {
  return arguments[1] ? arguments[0] / 2 : 0;
}

calculateBonus(2800, true);               // 1400
calculateBonus(1000, false);              // 0
calculateBonus(50000, true);              // 25000

// This takes advantage of the `arguments` object that allows a function to accept any number of arguments, and reference them in a similar fashion to an array.

// 8 The end is near but Not here

function penultimate(string) {
  return string.split(' ')[string.split(' ').length - 2];
}

// OR

function penultimate(string) {
  return string.split(' ').slice(-2, -1)[0];
}

penultimate('last word');                    // expected: "last"
penultimate('Launch School is great!');      // expected: "is"

// 9 After Midnight Part 1

const MINUTES_PER_HOUR = 60;
const HOURS_PER_DAY = 24;
const MINUTES_PER_DAY = HOURS_PER_DAY * MINUTES_PER_HOUR;

function timeOfDay(deltaMinutes) {
  deltaMinutes = deltaMinutes % MINUTES_PER_DAY;
  if (deltaMinutes < 0) {
    deltaMinutes = MINUTES_PER_DAY + deltaMinutes;
  }

  let hours = Math.floor(deltaMinutes / MINUTES_PER_HOUR);
  let minutes = deltaMinutes % MINUTES_PER_HOUR;

  return `${padWithZeroes(hours, 2)}:${padWithZeroes(minutes, 2)}`;
}

function padWithZeroes(number, length) {
  let numberString = String(number);

  while (numberString.length < length) {
    numberString = `0${numberString}`;
  }

  return numberString;
}

// Re implemented using JS Date Object

const MILLISECONDS_PER_MINUTE = 60000;

function timeOfDay(deltaMinutes) {
  const midnight = new Date('1/1/2000 00:00');
  const afterMidnight = new Date(midnight.getTime() + deltaMinutes * MILLISECONDS_PER_MINUTE);
  const hours = padWithZeroes(afterMidnight.getHours(), 2);
  const minutes = padWithZeroes(afterMidnight.getMinutes(), 2);

  return `${hours}:${minutes}`;
}

function padWithZeroes(number, length) {
  let numberString = String(number);

  while (numberString.length < length) {
    numberString = `0${numberString}`;
  }

  return numberString;
}

timeOfDay(0);          // "00:00"
timeOfDay(-3);         // "23:57"
timeOfDay(35);         // "00:35"
timeOfDay(-1437);      // "00:03"
timeOfDay(3000);       // "02:00"
timeOfDay(800);        // "13:20"
timeOfDay(-4231);      // "01:29"

// 10 After Midnight Part 2

// const MINUTES_PER_HOUR = 60;
// const HOURS_PER_DAY = 24;
// const MINUTES_PER_DAY = HOURS_PER_DAY * MINUTES_PER_HOUR;

// function afterMidnight(timeStr) {
//   const timeComponents = timeStr.split(':');
//   const hours = parseInt(timeComponents[0], 10);
//   const minutes = parseInt(timeComponents[1], 10);

//   return hours * MINUTES_PER_HOUR + minutes;
// }

// function beforeMidnight(timeStr) {
//   let deltaMinutes = MINUTES_PER_DAY - afterMidnight(timeStr);
//   if (deltaMinutes === MINUTES_PER_DAY) {
//     deltaMinutes = 0;
//   }

//   return deltaMinutes;
// }

// Refactored using Date object

const MILLISECONDS_PER_MINUTE = 60000;
const MINUTES_PER_HOUR = 60;
const HOURS_PER_DAY = 24;
const MINUTES_PER_DAY = HOURS_PER_DAY * MINUTES_PER_HOUR;
const DATE_PART = '1/1/2000';

function afterMidnight(timeStr) {
  const midnight = new Date(`${DATE_PART} 00:00`);
  const currentDateTime = new Date(`${DATE_PART} ${timeStr}`);

  return (currentDateTime.getTime() - midnight.getTime()) / MILLISECONDS_PER_MINUTE;
}

function beforeMidnight(timeStr) {
  let deltaMinutes = MINUTES_PER_DAY - afterMidnight(timeStr);
  if (deltaMinutes === MINUTES_PER_DAY) {
    deltaMinutes = 0;
  }

  return deltaMinutes;
}

afterMidnight('00:00');       // 0
beforeMidnight('00:00');      // 0
afterMidnight('12:34');       // 754
beforeMidnight('12:34');      // 686