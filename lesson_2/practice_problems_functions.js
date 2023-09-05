// Practice Problems: Functions

// 1

function average(a, b, c) {
  return (a + b + c) / 3;
}

console.log(average(1,2,3));

// 2

function sum(a, b, c) {
  return a + b + c;
}

console.log(sum(1,2,3));

function average(a,b,c,) {
  return sum(a, b, c) / 3;
}

console.log(average(1,2,3));

// 3

function average(values) {
  let total = 0;
  for (let index = 0; index < values.length; index += 1) {
    total += values[index];
  }
  return total / values.length;
}

console.log(average([1,2,3]));

// 4

function sum(values) {
  let total = 0;
  for (let index = 0; index < values.length; index += 1) {
    total += values[index];
  }

  return total;
}

function average(values) {
  return sum(values) / values.length;
}

console.log(average([1, 2, 3, 4, 5]));

// 5

let temperatures = [20, 25, 30, 50, 40];

console.log(average(temperatures));