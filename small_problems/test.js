let readlineSync = require('readline-sync');

console.log('What is the bill?');
let bill = readlineSync.prompt();
bill = parseInt(bill);

console.log('What is the tip percentage?');
let percentage = readlineSync.prompt();
percentage = parseFloat(percentage)/100;
console.log(bill);
console.log(percentage);
let tip = (bill * percentage);
let total = (tip + bill);

console.log('The tip is $' + tip.toFixed(2));
console.log('The total is $' + total.toFixed(2));