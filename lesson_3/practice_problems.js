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

function multiplesOfThreeAndFive() {
  for (let curr = 1; curr < 100; curr += 1) {
    if (curr % 3 === 0 && curr % 5 === 0) {
      console.log(String(curr) + '!');
    } else if (curr % 3 == 0 || curr % 5 === 0) {
      console.log(String(curr));
    }
  }
}

multiplesOfThreeAndFive();

// Print Multiples

function logMultiples(num) {
  for (let start = 100; start >= num; start -= 1) {
    if (start % num === 0 && start % 2 != 0) console.log(start);
  }
}

logMultiples(17);

// FizzBuzz

