// Odd Numbers

function logOddNumbers(num) {
  let counter = 1;
  while (counter <= num) {
    if (counter % 2 != 0) {
      console.log(counter);
    }
    counter += 1;
  }
};

logOddNumbers(19);

// Or with a for loop. Cleaner.

function logOddNumbers(num) {
  for(let currentNum = 1; currentNum <= num; currentNum +=1) {
    if (currentNum % 2 != 0) {
      console.log(currentNum);
    }
  }
}

logOddNumbers(19);

// FE

// increment by 2 to stay on the odd number.

function logOddNumbers(num) {
  for(let currentNum = 1; currentNum <= num; currentNum +=2) {
      console.log(currentNum);
  }
}

logOddNumbers(19);

// Multiples of 3 and 5

