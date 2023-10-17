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