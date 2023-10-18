// JS 210 - Small Problems - Easy 2

// 1 Ddaaiillyy ddoouubbllee

// Write a function that takes a string argument and returns a new string that contains the value of the original string with all consecutive duplicate characters collapsed into a single character.

function crunch(inputString) {
  let result = '';

  for (i = 0; i < inputString.length; i++) {
    let idx = result.length - 1;
    if (result.charAt(idx) != inputString.charAt(i)) {
      result += inputString.charAt(i);
    }
  }

  return result;
}

crunch('ddaaiillyy ddoouubbllee');    // "daily double"
crunch('4444abcabccba');              // "4abcabcba"
crunch('ggggggggggggggg');            // "g"
crunch('a');                          // "a"
crunch('');                           // ""

// LS Solution (Works in reverse from my solution, checking the next character and not the previous)

function crunch(text) {
  let index = 0;
  let crunchText = '';

  while (index <= text.length - 1) {
    if (text[index] !== text[index + 1]) {
      crunchText += text[index];
    }

    index += 1;
  }

  return crunchText;
}

// 2 Bannerizer

// Write a function that will take a short line of text, and write it to the console log within a box.

function logInBox(input) {
  let length = input.length;

  console.log('+' + ('-'.repeat(length + 2)) + '+');
  console.log('|' + (' '.repeat(length + 2)) + '|');
  console.log('| ' + input + ' |');
  console.log('|' + (' '.repeat(length + 2)) + '|');
  console.log('+' + ('-'.repeat(length + 2)) + '+');
  
}

logInBox('To boldly go where no one has gone before.');

// +--------------------------------------------+
// |                                            |
// | To boldly go where no one has gone before. |
// |                                            |
// +--------------------------------------------+

logInBox('');
// +--+
// |  |
// |  |
// |  |
// +--+

// LS Solution, offers more useability.

function logInBox(message) {
  const horizontalRule = `+${repeatChar('-', message.length + 2)}+`;
  const emptyLine = `|${repeatChar(' ', message.length + 2)}|`;

  console.log(horizontalRule);
  console.log(emptyLine);
  console.log(`| ${message} |`);
  console.log(emptyLine);
  console.log(horizontalRule);
}

function repeatChar(char, times) {
  let repeated = '';
  while (repeated.length < times) {
    repeated += char;
  }

  return repeated;
}

// 3 Stringy Strings

// Write a function that takes one argument, a positive integer, and returns a string of alternating '1's and '0's, always starting with a '1'. The length of the string should match the given integer.

function stringy(num) {
  let res = '';

  for (i = 1; i <= num; i++) {
    res += (i % 2 === 0) ? '0' : '1';
  }

  return res;
}

stringy(6);    // "101010"
stringy(9);    // "101010101"
stringy(4);    // "1010"
stringy(7);    // "1010101"

// LS Solution

function stringy(size) {
  let result = '';

  for (let i = 0; i < size; i += 1) {
    if (i % 2 === 0) {
      result += '1';
    } else {
      result += '0';
    }
  }

  return result;
}

// 4 Fib number (osbolete) Skipped for now.

// 5 Right Triangles

function triangle(num) {
  for (i = 1; i <= num; i++) {
      console.log(' '.repeat(num - i) + '*'.repeat(i));
  }
}

triangle(5);

// LS Solution

function triangle(height) {
  let stars = 1;
  let spaces = height - 1;

  for (let i = 0; i < height; i += 1) {
    console.log(repeat(' ', spaces) + repeat('*', stars));
    stars += 1;
    spaces -= 1;
  }
}

function repeat(char, count) {
  let repeated = '';

  for (let i = 0; i < count; i += 1) {
    repeated += char;
  }

  return repeated;
}

// 6 Madlibs

// Madlibs is a simple game where you create a story template with "blanks" for words. You, or another player, then construct a list of words and place them into the story, creating an often silly or funny story as a result.

// Create a simple madlib program that prompts for a noun, a verb, an adverb, and an adjective, and injects them into a story that you create.

function madlibs() {
  let noun = prompt('Enter a noun:');
  let verb = prompt('Enter a verb:');
  let adjective = prompt('Enter a adjective:');
  let adverb = prompt('Enter a adverb:');

  console.log(`Do you ${verb} your ${adjective} ${noun} ${adverb}? That's hilarious!`);
}

// LS Solution

const noun = prompt('Enter a noun:');
const verb = prompt('Enter a verb:');
const adjective = prompt('Enter an adjective:');
const adverb = prompt('Enter an adverb:');

const sentence1 = `Do you ${verb} your ${adjective} ${noun} ${adverb}? That's hilarious!`;
const sentence2 = `The ${adjective} ${noun} ${verb}s ${adverb} over the lazy dog.`;
const sentence3 = `The ${noun} ${adverb} ${verb}s up ${adjective} Joe's turtle.`;

console.log(sentence1);
console.log(sentence2);
console.log(sentence3);

// 7 Doubles Doubles

// A double number is an even-length number whose left-side digits are exactly the same as its right-side digits. For example, 44, 3333, 103103, and 7676 are all double numbers, whereas 444, 334433, and 107 are not.

// Write a function that returns the number provided as an argument multiplied by two, unless the argument is a double number; otherwise, return the double number as-is.

function twice(number) {
  if (isDoubleNumber(number)) {
    return number;
  } else {
    return number * 2;
  }
}

function isDoubleNumber(number) {
  const stringNumber = String(number);
  const center = stringNumber.length/2 ;
  const leftNumber = stringNumber.substring(0, center);
  const rightNumber = stringNumber.substring(center);

  return leftNumber === rightNumber;
}

twice(37);          // 74
twice(44);          // 44
twice(334433);      // 668866
twice(444);         // 888
twice(107);         // 214
twice(103103);      // 103103
twice(3333);        // 3333
twice(7676);        // 7676

// 8 Grade Book

// Write a function that determines the mean (average) of the three scores passed to it, and returns the letter associated with that grade.

// Numerical score letter grade list:

// 90 <= score <= 100: 'A'
// 80 <= score < 90: 'B'
// 70 <= score < 80: 'C'
// 60 <= score < 70: 'D'
// 0 <= score < 60: 'F'
// Tested values are all between 0 and 100. There is no need to check for negative values or values greater than 100.

function getGrade(g1, g2, g3) {
  let avg = calculateAvg(g1,g2,g3);

  if (avg >= 90) {
    console.log('A');
  } else if (avg >= 80) {
    console.log('B');
  } else if (avg >= 70) {
    console.log('C');
  } else if (avg >= 60) {
    console.log('D');
  } else {
    console.log('F')
  }
}

function calculateAvg(g1, g2, g3) {
  let sum = g1 + g2 + g3;
  return sum / 3;
}

getGrade(95, 90, 93);    // "A"
getGrade(50, 50, 95);    // "D"

// LS Solution

function getGrade(grade1, grade2, grade3) {
  const average = (grade1 + grade2 + grade3) / 3;

  if (average >= 90 && average <= 100) {
    return 'A';
  } else if (average >= 80 && average < 90) {
    return 'B';
  } else if (average >= 70 && average < 80) {
    return 'C';
  } else if (average >= 60 && average < 70) {
    return 'D';
  } else {
    return 'F';
  }
}

// 9 Clean Up the Words

// Given a string that consists of some words and an assortment of non-alphabetic characters, write a function that returns that string with all of the non-alphabetic characters replaced by spaces. If one or more non-alphabetic characters occur in a row, you should only have one space in the result (i.e., the result string should never have consecutive spaces).


const upperStart = 65;
const upperEnd = 90;
const lowerStart = 97;
const lowerEnd = 122;

function cleanUp(string) {
  let resultString = '';

  for (i = 0; i < string.length; i++) {
    let code = string.charCodeAt(i);
    let currentChar = string[i];

    if ((code >= upperStart && code <= upperEnd) || (code >= lowerStart && code <= lowerEnd)) {
      resultString += currentChar;
    } else if (resultString.charAt(resultString.length - 1) != ' ') {
      resultString += ' '
    }
  }
  return resultString
}

cleanUp("---what's my +*& line?");    // " what s my line "

// LS Solution

function cleanUp(text) {
  let cleanText = '';

  for (let idx = 0; idx < text.length; idx += 1) {
    if (isLowerCaseLetter(text[idx]) || isUpperCaseLetter(text[idx])) {
      cleanText += text[idx];
    } else if (idx === 0 || lastChar(cleanText) !== ' ') {
      cleanText += ' ';
    }
  }

  return cleanText;
}

const lastChar = (text) => text[text.length - 1];

const isLowerCaseLetter = (char) => char >= 'a' && char <= 'z';

const isUpperCaseLetter = (char) => char >= 'A' && char <= 'Z';

// 10 What Century is That

// Write a function that takes a year as input and returns the century. The return value should be a string that begins with the century number, and ends with 'st', 'nd', 'rd', or 'th' as appropriate for that number.

// New centuries begin in years that end with 01. So, the years 1901 - 2000 comprise the 20th century.

function century(year) {
  let century = Math.floor(year / 100) + 1;
  if (year % 100 === 0) {
    century -= 1
  }
  return String(century) + cent_ending(century);
}

function cent_ending(cent) {
  let val = '';

  if ([11, 12, 13].includes(cent % 100)) {
    val = 'th';
    return val;
  }

  let cent_last = cent % 10;
  if (cent_last === 0) {
    val = 'th';
  } else if (cent_last === 1) {
    val = 'st';
  } else if (cent_last === 2) {
    val = 'nd';
  } else if (cent_last === 3) {
    val = 'rd';
  } else {
    val = 'th';
  }

  return val;
}

century(2000);        // "20th"
century(2001);        // "21st"
century(1965);        // "20th"
century(256);         // "3rd"
century(5);           // "1st"
century(10103);       // "102nd"
century(1052);        // "11th"
century(1127);        // "12th"
century(11201);       // "113th"

// LS Solution

function century(year) {
  let centuryNumber = Math.floor(year / 100) + 1;

  if (year % 100 === 0) {
    centuryNumber -= 1;
  }

  return String(centuryNumber) + centurySuffix(centuryNumber);
}

function centurySuffix(centuryNumber) {
  if (catchWithTh(centuryNumber % 100)) {
    return 'th';
  }

  let lastDigit = centuryNumber % 10;
  switch (lastDigit) {
    case 1: return 'st';
    case 2: return 'nd';
    case 3: return 'rd';
    default: return 'th';
  }
}

function catchWithTh(lastTwo) {
  return lastTwo === 11 || lastTwo === 12 || lastTwo === 13;
}