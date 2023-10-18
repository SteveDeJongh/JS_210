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

// 5 Madlibs

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

// 6 Doubles Doubles

// A double number is an even-length number whose left-side digits are exactly the same as its right-side digits. For example, 44, 3333, 103103, and 7676 are all double numbers, whereas 444, 334433, and 107 are not.

// Write a function that returns the number provided as an argument multiplied by two, unless the argument is a double number; otherwise, return the double number as-is.

twice(37);          // 74
twice(44);          // 44
twice(334433);      // 668866
twice(444);         // 888
twice(107);         // 214
twice(103103);      // 103103
twice(3333);        // 3333
twice(7676);        // 7676