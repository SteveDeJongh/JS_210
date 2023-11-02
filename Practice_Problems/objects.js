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

// 5