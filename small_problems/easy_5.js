// JS 210 - Small Problems - Easy 4

// 1 Double Char Part 1

function repeater(word) {
  return word.split('').map((let) => let + let).join('')
}

repeater('Hello');        // "HHeelllloo"
repeater('Good job!');    // "GGoooodd  jjoobb!!"
repeater('');             // ""

// LS Solution

function repeater(string) {
  const stringArray = [];

  for (let i = 0; i < string.length; i += 1) {
    stringArray.push(string[i], string[i]);
  }

  return stringArray.join('');
}

// 2 Double Char Part 2

const CONSONANTS = ['b', 'c', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'm',
                  'n', 'p', 'q', 'r', 's', 't', 'v', 'w', 'x', 'y', 'z'];

function doubleConsonants(string) {
  const stringArray = [];

  for (let i = 0; i < string.length; i += 1) {
    stringArray.push(string[i]);
    if (CONSONANTS.includes(string[i].toLowerCase())) {
      stringArray.push(string[i]);
    }
  }

  return stringArray.join('');
}

doubleConsonants('String');          // "SSttrrinngg"
doubleConsonants('Hello-World!');    // "HHellllo-WWorrlldd!"
doubleConsonants('July 4th');        // "JJullyy 4tthh"
doubleConsonants('');                // ""

// 3 Reverse Number

function reverseNumber(input) {
  return Number(String(input).split('').reverse().join(''));
}

reverseNumber(12345);    // 54321
reverseNumber(12213);    // 31221
reverseNumber(12213);      // 654
reverseNumber(12000);    // 21 -- Note that zeros get dropped!
reverseNumber(1);        // 1

// 4 Get the Middle Character

function centerOf(input) {
  let length = input.length;
  let middle = length / 2;

  if (length % 2 === 0) {
    return `${input[middle - 1]}${input[middle]}`
  } else {
    return `${input[Math.floor(middle)]}`
  }
}

centerOf('I Love JavaScript'); // "a"
centerOf('Launch School');     // " "
centerOf('Launch');            // "un"
centerOf('Launchschool');      // "hs"
centerOf('x');                 // "x"

// LS Solution

function centerOf(string) {
  if (string.length % 2 === 1) {
    let centerIndex = (string.length - 1) / 2;
    return string[centerIndex];
  } else {
    let leftIndex = string.length / 2 - 1;
    return string.substring(leftIndex, leftIndex + 2);
  }
}

// 5 Always Return Negative

function negative(num) {
  return Math.abs(number) * -1;
}

negative(5);     // -5
negative(-3);    // -3
negative(0);     // -0

// FE

function negative(num) {
  return num >= 0 ? -num : num;
}

// 6 Counting Up

function sequence(end) {
  let result = [];
  for (i = 1; i <= end; i++) {
    result.push(i);
  }
  return result;
}

sequence(5);    // [1, 2, 3, 4, 5]
sequence(3);    // [1, 2, 3]
sequence(1);    // [1]

// 7 Name Swapping

function swapName(name) {
  let names = name.split(' ');
  return `${names[1]}, ${names[0]}`;
}

// LS Solution, more eloquent

function swapName(name) {
  return name.split(' ').reverse().join(', ');
}

swapName('Joe Roberts');    // "Roberts, Joe"

// FE

function swapLongerName(name) {
  let names = name.split(' ');
  return `${names[names.length - 1]}, ${names.slice(0, names.length - 1).join(' ')}`
}

swapLongerName('Joe Green Roberts'); // "Roberts, Joe Green"

// 8 Sequence Count

function sequence(count, step) {
  let result = [];
  let curr = 0;

  for (i = 0; i < count; i++) {
    result.push(curr += step);
  }

  return result;
}

sequence(5, 1);          // [1, 2, 3, 4, 5]
sequence(4, -7);         // [-7, -14, -21, -28]
sequence(3, 0);          // [0, 0, 0]
sequence(0, 1000000);    // []

// 9 Reverse It Part 1

function reverseSentence(input) {
  return input.split(' ').reverse().join(' ');
}

reverseSentence('');                       // ""
reverseSentence('Hello World');            // "World Hello"
reverseSentence('Reverse these words');    // "words these Reverse"

// 10 Reverse It Part 2

function reverseWords(input) {
  let words = input.split(' ');
  let result = [];

  for (i = 0; i < words.length; i++) {
    let word = words[i];
    if (word.length >= 5) {
      result.push(reverseWord(word));
    } else {
      result.push(word);
    }
  }

  return result.join(' ');
}

function reverseWord(word) {
  return word.split('').reverse().join('');
}

reverseWords('Professional');             // "lanoisseforP"
reverseWords('Walk around the block');    // "Walk dnuora the kcolb"
reverseWords('Launch School');            // "hcnuaL loohcS"