let readlineSync = require('readline-sync');

console.log('Please enter an integer great than 0:')
let end = readlineSync.prompt();
console.log("Enter 's' to compute the sum, or 'p' to compute the product.");
let calc = readlineSync.prompt();

let result = 1;

if (calc === 's') {
  for (let i = 2; i <= end; i++) {
    result += i;
  }
} else if (calc === 'p') {
  for (let i = 1; i <= end; i++) {
    result *= i;
  }
}
console.log(result);