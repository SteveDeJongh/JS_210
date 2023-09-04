// Practice Problems: Operator and Conditionals

// 1

let apples = 3;
let bananas = 5;

if (bananas == apples) {
  console.log('Equal!');
}

// 2

bananas = '3';

if (bananas == apples) {
  console.log('Equal!');
}

// Non strict equality, converts '3' to 3 before equality check.

// 3

if (bannas === apples) {
  console.log('Strict Equal!');
}

// This does not output 'Strict Equal!' as with 3 equals no conversion occurs since a string a string is different from a number they are not strictly equal.

// 4

if (bananas === apples) {
  console.log('Strict Equal!');
} else {
  console.log('Not strict equal :(');
}

// 5

if (bananas === apples) {
  console.log('Strict Eqaul!');
} else if (bananas == apples) {
  console.log('Same value, but different types');
} else {
  console.log('Not equal at all');
}

// 6

if (bananas === apples) {
  console.log('Strict Eqaul!');
} else {
  if (bananas == apples) {
    console.log('Same value, but different types');
  } else {
  console.log('Not equal at all');
  }
}

// 7

apples = 3;
bananas = 3;
let areEqual = bananas === apples;

console.log(areEqual);

// 8

apples = 3;
bananas = undefined;
let eitherOr = apples || bananas;

console.log(eitherOr);

// 9

apples = 3;
bananas = 1;
eitherOr = apples || bananas;

console.log(eitherOr); // 3

apples = 3;
bananas = 1;
eitherOr = bananas || apples;

console.log(eitherOr); // 1

// assigns the first truthy value to `eitherOr`.

// 10

let lastName = 'De Jongh';
let familyMessage;

familyMessage = lastName === 'De Jongh' ? "You're part of the family!" : "You're not family.";

console.log(familyMessage);