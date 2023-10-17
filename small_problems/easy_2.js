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

