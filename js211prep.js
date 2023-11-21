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

