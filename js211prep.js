// Practice

function generateArr(start, end) {
  let result = [];
  for (i = start; i <= end; i += 1) {
    result.push(i);
  }

  return result;
}

generateArr(3, 10);

function countOccurences(input) {
  let obj = {};

  for (i = 0; i < input.length; i += 1) {
    let char = input[i];
    if (!Object.keys(obj).includes(char)) {
      obj[char] = 1;
    } else {
      obj[char] += 1;
    }
  }

  return obj;
}

countOccurences('abbab'); // => {a:2, b: 3}

function sortAndPrintLetters(obj) {
  let arr = [];

  for (let key in obj) {
    let times = obj[key];

    for (i = 0; i < times; i += 1) {
      arr.push(key);
    }
  }

  arr = arr.sort().join('');

  return arr;
}

sortAndPrintLetters({a:1, k:3, g:2}) // => 'aggkkk'


function countWords(string) {
  let words = string.split(' ');

  return words.length;
}

countWords('hello world'); // => 2

function countIndividualWords(string) {
  let words = string.toLowerCase().split(/[^a-z]/);
  let answer = {};

  for (let i = 0; i < words.length; i += 1) {
    let word = words[i];
    if (word.length <= 0) {
      continue;
    }

    if (Object.keys(answer).includes(word)) {
      answer[word] += 1;
    } else {
      answer[word] = 1;
    }
  }

  return answer;
}

countIndividualWords('Hello, hello world'); // => {'hello' : 2, 'world' : 1};

function countSubstr(input, match) {
  let count = 0;

  for (let i = 0; i < input.length; i += 1) {
    if (input.indexOf(match, i) > 0) {
      count += 1;
      i = input.indexOf(match, i) + 1;
    }
  }
  return count;
}

countSubstr('Hello, Hello! How are you doing Mellody?', 'ello' );// => 3

function countEle(arr, match) {
  let count = 0;

  for (let i = 0; i < arr.length; i += 1) {
    if (arr[i] === match) {
      count += 1;
    }
  }

  return count;
}
countEle(['name', 'year', 'age', 'name'], 'name'); // => 2
countEle([1,2,3,4,5,1,2,3,4], 2); //=> 2

function sorting(arr) {
  return arr.sort((a,b) => b - a);
}

sorting([3,5,1,2,11,456]); //=> [456,11,5,3,2,1];


function isAlphabetical(string) {
  let chars = string.split('');
  
  for (let i = 0; i < chars.length - 1; i += 1) {
    if (chars[i] < chars[i + 1]) {
      console.log(`${chars[i]} vs ${chars[i + 1]}`)
      return false;
    }
  }
  return true
}
isAlphabetical('abcdefg'); //true
isAlphabetical('adegttksn'); //false

function extractStr(strings) {
  return strings.split(' ').filter((str) => str[0] === 'a');
}

extractStr('abcd bcd aa'); //[abcd, aa]

function extractSubStr(string, match) {
  let result = [];

  for (let i = 0; i < string.length; i += 1) {
    if (string.substring(i, i + match.length) === match) {
      result.push(match);
    }
  }
  return result;
}

extractSubStr('abcdefabcdefabcdef abcdefg', 'abc'); //['abc', 'abc', 'abc', 'abc'];

function removeEl(arr, el) {
  let index = arr.indexOf(el);

  arr.splice(index, 1);

  return arr;
}

let arr = [1,2,3];
let arr3 = removeEl(arr, 2); //[1, 3]
arr === arr3 //true

function reverseIt(string) {
  return string.split('').reverse().join('');
}

reverseIt('hello');

function transformIt(arr) {
  let result = [];

  arr.forEach(function(el) {
    for (let i = 0; i < el.length; i += 1) {
      result.push(el[i]);
    }
  });
  return result;
}

transformIt([[1], [2], [3]]); // [1,2,3]

function findIndex(string, match) {
  for (let i = 0; i < string.length; i += 1) {
    if (string[i] === match) {
      return i;
    }
  }
  return false;
}

findIndex('Aabcdefgh ab A', 'a'); //1
findIndex('bcdefgBA', 'a'); //false


/** Write a function which accomplishes what the string requests
 *   Your function should use the mechanism specifed (for, while, forEach, etc)
 *   Use the function name specified
 *   Log the result to the console
 */
const obj = { text: "Remove occurances of the letter e after the word 'letter' in this sentence" }
Object.freeze(obj);

function forSolution(text) {
  let endOfLetter = text.indexOf('letter') + 'letter'.length;

  let answer = text.slice(0, endOfLetter);

  for (let i = endOfLetter; i < text.length; i += 1) {
    if (text[i] !== 'e') {
      answer += text[i];
    }
  }

  return answer;
}

forSolution(obj.text);

/**
 * BONUS: 
 * A single function should satisfy the strings defined 'obj' and the bonus objects below
 * The function should only take a single argument of type object
 * The function should be able to accomidate any word between the single quotes
 */
const bonusObj1 = { text: "Remove occurances of the letter e after 'the' in this sentence" }
const bonusObj2 = { text: "The letter e should not appear after the word 'not' in this sentence" }
Object.freeze(bonusObj1);
Object.freeze(bonusObj2);

function forSolution(text) {
  let endOfLetter = text.lastIndexOf("'") + 1;

  let answer = text.slice(0, endOfLetter);

  for (let i = endOfLetter; i < text.length; i += 1) {
    if (text[i] !== 'e') {
      answer += text[i];
    }
  }

  return answer;
}

forSolution(bonusObj1.text);
forSolution(bonusObj2.text);