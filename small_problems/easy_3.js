// JS 210 - Small Problems - Easy 3

// 1 How Old is Teddy?

function teddysAge() {
  let age = Math.floor(Math.random() * (200 - 20 + 1) + 20);
  console.log(`Teddy is ${age} years old!`);
}

teddysAge();

// LS Solution

function randomBetween(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const age = randomBetween(20, 200);
console.log(`Teddy is ${age} years old!`);

// FE

// Yes, the function would return different results with the `Math.round()` function being used as instead of always return the closest whole integer without rounding up.

// To make the function more robust, we can ensure that the values are in the correct min/max order by checking the values against each other, and ensuring they're in the correct order. If they are not, we can either use a temporary variable to reasign the values to the correct argument, or use array destructing to swap the variables in case the values are reversed.

// 2 Searching 101

function checkNums() {
  var numbers = [];
  for (i = 0; i < 6; i++) {
    numbers[i] = prompt(`Enter the ${i + 1} number:`);
  }

  let phrase = '';
  let firstFive = numbers.slice(0,5);
  let finalNumber = numbers[5];

  if (firstFive.includes(finalNumber)) {
    phrase = 'appears';
  } else {
    phrase = 'does not appear';
  }

  console.log(`The number ${finalNumber} ${phrase} in ${firstFive}.`)
}

checkNums();

// LS Solution, easier way of implementing correct language. ('th', 'rd', etc...)

const numbers = [];

numbers.push(prompt('Enter the 1st number:'));
numbers.push(prompt('Enter the 2nd number:'));
numbers.push(prompt('Enter the 3rd number:'));
numbers.push(prompt('Enter the 4th number:'));
numbers.push(prompt('Enter the 5th number:'));

let lastNumber = prompt('Enter the last number:');

if (numbers.includes(lastNumber)) {
  console.log(`The number ${lastNumber} appears in [${numbers.join(', ')}].`);
} else {
  console.log(`The number ${lastNumber} does not appear in [${numbers.join(', ')}].`);
}

// FE, using Array.prototype.some

function checkNums() {
  var numbers = [];
  for (i = 0; i < 6; i++) {
    numbers[i] = prompt(`Enter the ${i + 1} number:`);
  }

  let phrase = '';
  let firstFive = numbers.slice(0,5);
  let finalNumber = numbers[5];

  function isIncluded(arr) {
    return arr === finalNumber;
  }

  if (firstFive.some(isIncluded)) {
    phrase = 'appears';
  } else {
    phrase = 'does not appear';
  }

  console.log(`The number ${finalNumber} ${phrase} in ${firstFive}.`)
}

checkNums();

// 3 When Will I Retire

let age = Number(prompt('What is your age?'));
let retireAge = Number(prompt('At what age would you like to retire?'));

let yearsToGo = retireAge - age;
let currentYear = new Date().getFullYear();

console.log(`It's ${currentYear}. You will retire in ${currentYear + yearsToGo}.`);
console.log(`You have only ${yearsToGo} years of work to go!`);

// LS Solution, using parseInt

const age = parseInt(prompt('What is your age?'), 10);
const retirementAge = parseInt(prompt('At what age would you like to retire?'), 10);

const today = new Date();

const currentYear = today.getFullYear();
const workYearsToGo = retirementAge - age;
const retirementYear = currentYear + workYearsToGo;

console.log(`It's ${currentYear}. You will retire in ${retirementYear}.`);
console.log(`You have only ${workYearsToGo} years of work to go!`);

// 4 Palindromic Strings Part 1

function isPalindrome(input) {
  for (i = 0; i < input.length; i++) {
    if (input[i] !== input[input.length - 1 - i]) {
      return false;
    }
  }

  return true;
}

isPalindrome('madam');               // true
isPalindrome('Madam');               // false (case matters)
isPalindrome("madam i'm adam");      // false (all characters matter)
isPalindrome('356653');              // true

// LS Solution, musch easier to just compare the entire string, not character by character.

function isPalindrome(string) {
  return string === string.split('').reverse().join('');
}

// 5 Palindromic String Part 2

function isPalindrome(input) {
  for (i = 0; i < input.length; i++) {
    if (input[i] !== input[input.length - 1 - i]) {
      return false;
    }
  }

  return true;
}

function isRealPalindrome(input) {
  input = removeNonLetterNumbers(input.toLowerCase());
  return isPalindrome(input);
}

function removeNonLetterNumbers(string) {
  let result = '';

  for (i = 0; i < string.length; i++) {
    let curr = string[i];
    if (isLetter(curr) || isNumber(curr)) {
      result += curr;
    }
  }
  return result;
}

function isLetter(char) {
  return char >= 'a' && char <= 'z';
}

function isNumber(num) {
  return num >= '0' && num <= '9';
}

isRealPalindrome('madam');               // true
isRealPalindrome('Madam');               // true (case does not matter)
isRealPalindrome("Madam, I'm Adam");     // true (only alphanumerics matter)
isRealPalindrome('356653');              // true
isRealPalindrome('356a653');             // true
isRealPalindrome('123ab321');            // false

// 6 Palindromic Number

function isPalindromicNumber(num) {
  let stringNum = String(num);
  return isRealPalindrome(stringNum);
}

isPalindromicNumber(34543);        // true
isPalindromicNumber(123210);       // false
isPalindromicNumber(22);           // true
isPalindromicNumber(5);            // true

// 7 Running Totals

function runningTotal(arr) {
  let resArr = [];

  for (i = 0; i < arr.length; i++) {
    if (i === 0) {
      resArr[i] = arr[i];
    } else {
      resArr[i] = arr[i] + resArr[i - 1];
    }
  }

  return resArr;
}

runningTotal([2, 5, 13]);             // [2, 7, 20]
runningTotal([14, 11, 7, 15, 20]);    // [14, 25, 32, 47, 67]
runningTotal([3]);                    // [3]
runningTotal([]);                     // []

// LS Solution, uses a sum variable instead of referencing the latest value in the new result array.

function runningTotal(array) {
  const resultArray = [];
  let sum = 0;

  for (let i = 0; i < array.length; i += 1) {
    sum += array[i];
    resultArray.push(sum);
  }

  return resultArray;
}

// FE, using `Array.prototype.map()`

function runningTotal(arr) {
  let sum = 0;

  return arr.map(num => sum += num);
}

// 8 Letter Swap

function swap(input) {
  let words = input.split(' ');
  let result = [];
  
  for (i = 0; i < words.length; i++) {
    let characters = words[i].split('');
    let temp = characters[characters.length - 1];
    characters[characters.length - 1] = characters[0];
    characters[0] = temp;
    result.push(characters.join(''));
  }

  return result.join(' ');
}

// Using Destructing Assignment

function swap(input) {
  let words = input.split(' ');
  let result = [];
  
  for (i = 0; i < words.length; i++) {
    let characters = words[i].split('');
    [characters[0], characters[characters.length - 1]] = [characters[characters.length - 1],  characters[0]];
    result.push(characters.join(''));
  }

  return result.join(' ');
}

swap('Oh what a wonderful day it is');  // "hO thaw a londerfuw yad ti si"
swap('Abcde');                          // "ebcdA"
swap('a');                              // "a"

// LS Solution

function swap(words) {
  const wordsArray = words.split(' ');

  for (let i = 0; i < wordsArray.length; i += 1) {
    wordsArray[i] = swapFirstLastCharacters(wordsArray[i]);
  }

  return wordsArray.join(' ');
}

function swapFirstLastCharacters(word) {
  if (word.length === 1) {
    return word;
  }

  return word[word.length - 1] + word.slice(1, -1) + word[0];
}

// FE, using map

function swap(words) {
  const wordsArray = words.split(' ');

  return wordsArray.map(swapFirstLastCharacters).join(' ');
}

function swapFirstLastCharacters(word) {
  if (word.length === 1) {
    return word;
  }

  return word[word.length - 1] + word.slice(1, -1) + word[0];
}

// 9 Letter Counter Part 1

function wordSizes(input) {
  if (input === '') {
    return {};
  }

  let words = input.split(' ');
  let result = {};

  for (i = 0; i < words.length; i++) {
    let length = words[i].length;
    let key = String(length);

    if (Object.keys(result).includes(key)) {
      result[key]++
    } else {
      result[key] = 1;
    }
  }

  return result;
}

wordSizes('Four score and seven.');                       // { "3": 1, "4": 1, "5": 1, "6": 1 }
wordSizes('Hey diddle diddle, the cat and the fiddle!');  // { "3": 5, "6": 1, "7": 2 }
wordSizes("What's up doc?");                              // { "2": 1, "4": 1, "6": 1 }
wordSizes('');                                            // {}

// LS Solution

function wordSizes(words) {
  const wordsArray = words.split(' ');
  const count = {};

  for (let i = 0; i < wordsArray.length; i += 1) {
    let wordSize = wordsArray[i].length;
    if (wordSize === 0) {
      continue;
    }

    count[wordSize] = count[wordSize] || 0;
    count[wordSize] += 1;
  }

  return count;
}

// 10 Letter Counter Part 2

function wordSizes(words) {
  const wordsArray = words.split(' ');
  const count = {};

  for (let i = 0; i < wordsArray.length; i += 1) {
    let wordSize = getWordSize(wordsArray[i]);
    if (wordSize === 0) {
      continue;
    }

    count[wordSize] = count[wordSize] || 0;
    count[wordSize] += 1;
  }

  return count;
}

function getWordSize(word) {
  let count = 0;
  let chars = word.split('');

  for (i = 0; i < chars.length; i++) {
    let char = chars[i];
    if ((char >= 'a' && char <= 'z') || (char >= 'A' && char <= 'Z')) {
      count += 1;
    }
  }

  return count;
}
wordSizes('Four score and seven.');                       // { "3": 1, "4": 1, "5": 2 }
wordSizes('Hey diddle diddle, the cat and the fiddle!');  // { "3": 5, "6": 3 }
wordSizes("What's up doc?");                              // { "5": 1, "2": 1, "3": 1 }
wordSizes('');                                            // {}

// LS Solution

function wordSizes(words) {
  const wordsArray = words.split(' ');
  const count = {};

  for (let i = 0; i < wordsArray.length; i += 1) {
    let cleanWordSize = removeNonLetters(wordsArray[i].toLowerCase()).length;
    if (cleanWordSize === 0) {
      continue;
    }

    count[cleanWordSize] = count[cleanWordSize] || 0;
    count[cleanWordSize] += 1;
  }

  return count;
}

function removeNonLetters(string)  {
  let result = '';

  for (let i = 0; i < string.length; i += 1) {
    if (isLetter(string[i])) {
      result += string[i];
    }
  }

  return result;
}

function isLetter(char) { return char >= 'a' && char <= 'z' }