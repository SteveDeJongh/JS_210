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

function fizzBuzz() {
  for (let num = 1; num <= 100; num += 1) {
    if (num % 3 === 0 && num % 5 === 0) {
      console.log('FizzBuzz');
    } else if (num % 3 === 0) {
      console.log('Fizz');
    } else if (num % 5 === 0) {
      console.log('Buzz');
    } else {
      console.log(num);
    }
  }
}

fizzBuzz();

// Another option using an arrow function and a single call to console.log with a varialbe for the message.

let fizzbuzz = () => {
  for (let index = 1; index <= 100; index += 1) {
    let message = index;

    if (index % 3 === 0 && index % 5 === 0) {
      message = 'FizzBuzz';
    } else if (index % 3 === 0) {
      message = 'Fizz';
    } else if (index % 5 === 0) {
      message = 'Buzz';
    }

    console.log(message);
  }
};

// Another option

let fizzbuzz = () => {
  for (let index = 1; index <= 100; index += 1) {
    let message = '';

    if (index % 3 === 0) {
      message += 'Fizz';
    }

    if (index % 5 === 0) {
      message += 'Buzz';
    }

    console.log(message || index);
  }
};

// Prime Check

function isPrime(num) {
  let status = false
  if (num > 1) status = true
  counter = 2
  while (status && counter < (num -1)) {
    if (num % counter === 0) status = false 
    counter += 1
  }
  return status
}

isPrime(5);

// Or

function isPrime(number) {
  if (number <= 1) {
    return false;
  }

  for (let currentNumber = 2; currentNumber < number; currentNumber += 1) {
    if (number % currentNumber === 0) {
      return false;
    }
  }

  return true;
}

// If we use the fact that even numbers greater than 2 can't be prime (they're all divisible by 2), we can add this to the guard clause as well, and return immediately for even numbers greater than 2. This also means that we only need to test odd divisors; odd numbers are never divisible by even numbers.

function isPrime(number) {
  if (number <= 1 || (number > 2 && number % 2 === 0)) {
    return false;
  }

  let divisor = 3;

  while (divisor < number) {
    if (number % divisor === 0) {
      return false;
    }

    divisor += 2;
  }

  return true;
}

// XOR

function isXor(arg1, arg2) {
  let arr1 = []
  arr1[0] = (arg1) ? true : false
  arr1[1] = (arg2) ? true : false

  let counter = 0;
  for (test of arr1) {
    if (test == true) {
          counter++;
      }
  };

  return (counter === 1) ? true : false
}

// Or... much simpler.

function isXor(value1, value2) {
  if (value1 && !value2) {
    return true;
  }

  if (!value1 && value2) {
    return true;
  }

  return false;
}

// More concise, forcing the return of a boolean

function isXor(value1, value2) {
  return !!((value1 && !value2) || (value2 && !value1));
}

// Guess the password

let password = 'password'

function guessThePassword() {
  let count = 0
  while (count < 3) {
    let guess = prompt('Please enter your password')
    count++;
    if (password === guess) {
      count = 0
      console.log('Log in successful')
      break;
    }
  }
  if (count === 3) {
    console.log('Log in failed, access denied.')
  }
}

guessThePassword();

// Cleaner, only counting failed attempts

const PASSWORD = 'password';
let failedAttempts = 0;

while (true) {
  let guess = prompt('What is the password:');

  if (guess === PASSWORD) {
    console.log('You have successfully logged in.');
    break;
  }

  failedAttempts += 1;

  if (failedAttempts === 3) {
    console.log('You have been denied access.');
    break;
  }
}

// Student Grade

// 90 + = A
// 70-89 = B
// 50-69 = C
// 49... = Fail

function determineGrade() {
  let grades = []
  for (let count = 1; count < 4; count += 1) {
    grades.push(parseInt(prompt('Enter score ' + String(count) + ':')))
  }

  let sum = 0

  for (grade in grades) {
    sum += grades[grade]
  }

  let avg = sum / 3

  if (avg >= 90) {
    console.log('Based on the average of your 3 scores your letter grade is A.');
  } else if (avg >= 70) {
    console.log('Based on the average of your 3 scores your letter grade is B.');
  } else if (avg >= 50) {
    console.log('Based on the average of your 3 scores your letter grade is C.');
  } else {
    console.log('Based on the average of your 3 scores your letter grade is a Fail.');
  }
}

determineGrade();

// Example solution:

let score1 = Number(prompt('Enter score 1:'));
let score2 = Number(prompt('Enter score 2:'));
let score3 = Number(prompt('Enter score 3:'));
let total = score1 + score2 + score3;
let average = total / 3;

let grade;
if (average >= 90) {
  grade = 'A';
} else if (average >= 70 && average < 90) {
  grade = 'B';
} else if (average >= 50 && average < 70) {
  grade = 'C';
} else {
  grade = 'F';
}

console.log('Based on the average of your 3 scores your letter grade is "' +
            grade + '".');

// FE, accept any number of scores.

function returnAverage(scores) {
  let sum = 0
  let count = 0

  for (score in scores) {
    sum += scores[score]
    count++;
  }

  return sum / count
}

// Greatest Common Divisor

function gcd(n1, n2) {
  let divisor;

  for (let idx = n2; divisor === undefined; idx--) {
    if (n1 % idx === 0 && n2 % idx === 0) {
      divisor = idx
    }
  }
  return divisor
}

gcd(12, 4);

// More efficient

function gcd(num1, num2) {
  var temp;

  while (num2 !== 0) {
    temp = num2;
    num2 = num1 % num2;
    num1 = temp;
  }

  return num1;
}

// Goldbach Numbers

function isPrime(number) {
  if (number <= 1) {
    return false;
  }

  for (let currentNumber = 2; currentNumber < number; currentNumber += 1) {
    if (number % currentNumber === 0) {
      return false;
    }
  }

  return true;
}

function checkGoldback(expectedSum) {
  if (expectedSum % 2 != 0 || expectedSum < 4) {
    console.log(null)
    return
  }
  else {
    for (let firstNumber = 2; firstNumber <= expectedSum / 2; firstNumber += 1) {
      let secondNumber = expectedSum - firstNumber
      if (isPrime(firstNumber) && isPrime(secondNumber)) {
        console.log(firstNumber + ' ' + secondNumber)
      }
    }
  }
}

checkGoldback(4);

// Alternatively

let isPrime = function(number) {
  if (number < 2) {
    return false;
  }

  for (let firstNumber = 2; firstNumber < number; firstNumber += 1) {
    if (number % firstNumber === 0) {
      return false;
    }
  }

  return true;
};

let checkGoldbach = function(expectedSum) {
  if (expectedSum < 4 || expectedSum % 2 === 1) {
    console.log(null);
    return;
  }

  let num1 = 1;
  let num2;

  do {
    num1 += 1;
    num2 = expectedSum - num1;
    if (isPrime(num1) && isPrime(num2)) {
      console.log(num1, num2);
    }

  } while (num1 !== num2);
};

