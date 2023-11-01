// Lesson 5: Working with the Math Object

// 1

function radiansToDegrees(radian) {
  return (radian * 180)/Math.PI;
}

console.log(radiansToDegrees(1))

// LS Solutions

let radiansToDegrees = radians => radians / (Math.PI / 180);
// OR
let radiansToDegrees = radians => (radians * 180) / Math.PI;

// 2

let num = -180;

console.log(Math.abs(num))

// LS Solution

let degrees = -180;
console.log(Math.abs(degrees));

// 3

console.log(Math.sqrt(16777216));

// 4

console.log(Math.pow(16, 6));

// 5

let a = 50.72;
let b = 49.2;
let c = 49.86;

console.log(Math.floor(a));
console.log(Math.ceil(b));
console.log(Math.round(c));

// 6

function random(min, max) {
  if (min > max) {
    let temp = max;
    max = min;
    min = temp;
  }

  if (min == max) {
   return min;
  }

  return Math.floor(Math.random() * (max - min + 1) + min);
}

random(1, 10);

// LS Solution

const randomInt = function(min, max) {
  if (min === max) {
    return min;
  } else if (min > max) {
    let swap = min;
    min = max;
    max = swap;
  }

  let difference = max - min + 1;
  return Math.floor(Math.random() * difference) + min;
};

console.log(randomInt(1, 5));

// OR 

const randomInt = function(min, max) {
  if (min === max) {
    return min;
  } else if (min > max) {
    [min, max] = [max, min];
  }

  let difference = max - min + 1;
  return Math.floor(Math.random() * difference) + min;
};

console.log(randomInt(1, 5));