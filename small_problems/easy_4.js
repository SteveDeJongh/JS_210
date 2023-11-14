// JS 210 - Small Problems - Easy 4

// 1 Cute Angles

function dms(input) {
  let degrees = String(Math.floor(input)).padStart(2, '0');
  let minutes = String(Math.floor((input - degrees) * 60)).padStart(2, '0');
  let seconds = String(Math.floor((((input - degrees) * 60) - minutes) * 60)).padStart(2, '0');
  console.log(`${degrees}˚${minutes}'${seconds}"`);
}

dms(30);           // 30°00'00"
dms(76.73);        // 76°43'48"
dms(254.6);        // 254°35'59"
dms(93.034773);    // 93°02'05"
dms(0);            // 0°00'00"
dms(360);          // 360°00'00" or 0°00'00"

// LS Solution, removes magic numbers by assigning to constants, and moves string padding to a helper function.

const DEGREE = '\xB0';
const MINUTES_PER_DEGREE = 60;
const SECONDS_PER_MINUTE = 60;
const SECONDS_PER_DEGREE = MINUTES_PER_DEGREE * SECONDS_PER_MINUTE;

function dms(degreesFloat) {
  const degreesInt = Math.floor(degreesFloat);
  const minutes = Math.floor((degreesFloat - degreesInt) * MINUTES_PER_DEGREE);
  const seconds = Math.floor(
    (degreesFloat - degreesInt - (minutes / MINUTES_PER_DEGREE)) *
    SECONDS_PER_DEGREE
  );

  return `${String(degreesInt) + DEGREE + padZeroes(minutes)}'${padZeroes(seconds)}"`;
}

function padZeroes(number) {
  const numString = String(number);
  return numString.length < 2 ? (`0${numString}`) : numString;
}

// FE, handling negative input or input greather than 360.

// Original solution handles negative numbers and greater than 360.

// To fit solution into the approriate range.
function dms(input) {
  input %= 360;
  if (input < 0) input += 360;
  let degrees = String(Math.floor(input)).padStart(2, '0');
  let minutes = String(Math.floor((input - degrees) * 60)).padStart(2, '0');
  let seconds = String(Math.floor((((input - degrees) * 60) - minutes) * 60)).padStart(2, '0');
  console.log(`${degrees}˚${minutes}'${seconds}"`);
}

dms(400);
dms(-400);

// 2 Combining Arrrays

function union(ar1, ar2) {
  let result = [];

  for (i = 0; i < ar1.length; i++) {
    if (!result.includes(ar1[i])) {
      result.push(ar1[i]);
    }
  }

  for (i = 0; i < ar2.length; i++) {
    if (!result.includes(ar2[i])) {
      result.push(ar2[i]);
    }
  }

  return result;
}

union([1, 3, 5], [3, 6, 9]);    // [1, 3, 5, 6, 9]

// LS Solution 1

function copyNonDupsTo(resultArray, array) {
  array.forEach(value => {
    if (!resultArray.includes(value)) {
      resultArray.push(value);
    }
  });
}

function union(array1, array2) {
  const newArray = [];
  copyNonDupsTo(newArray, array1);
  copyNonDupsTo(newArray, array2);
  return newArray;
}

// LS Solution 2

function copyNonDupsTo(resultArray, array) {
  array.forEach(value => {
    if (!resultArray.includes(value)) {
      resultArray.push(value);
    }
  });
}

function union(...args) {
  const newArray = [];

  args.forEach(value => copyNonDupsTo(newArray, value));

  return newArray;
}

// 3 Halvies

// Not the correct implementation, array to be split front to back, not 1 by 1.
// function halvsies(input) {
//   let result = [[],[]];

//   input.forEach((value, index) => {
//     if (index % 2 === 0) {
//       result[0].push(value);
//     } else {
//       result[1].push(value);
//     }
//   })
//   return result;
// }

function halvsies(input) {
  let result = [[],[]];
  let half = Math.ceil(input.length / 2);

  for (i = 0; i < input.length; i++) {
    if (i < half) {
      result[0].push(input[i]);
    } else {
      result[1].push(input[i]);
    }
  }
  return result;
}

halvsies([1, 2, 3, 4]);       // [[1, 2], [3, 4]]
halvsies([1, 5, 2, 4, 3]);    // [[1, 5, 2], [4, 3]]
halvsies([5]);                // [[5], []]
halvsies([]);                 // [[], []]

// LS Solution

function halvsies(array) {
  const half = Math.ceil(array.length / 2);
  const firstHalf = array.slice(0, half);
  const secondHalf = array.slice(half);

  return [firstHalf, secondHalf];
}

// 4 Find the Duplicate

function findDup(arr) {
  for (i = 0; i < arr.length; i++) {
    let count = 0;
    let num = arr[i];

    for (j = 0; j < arr.length; j++) {
      if (arr[j] === num) {
        count++;
      }
    }

    if (count >= 2) {
      return num;
    }
  }
}

findDup([1, 5, 3, 1]);                                // 1
findDup([18,  9, 36, 96, 31, 19, 54, 75, 42, 15,
         38, 25, 97, 92, 46, 69, 91, 59, 53, 27,
         14, 61, 90, 81,  8, 63, 95, 99, 30, 65,
         78, 76, 48, 16, 93, 77, 52, 49, 37, 29,
         89, 10, 84,  1, 47, 68, 12, 33, 86, 60,
         41, 44, 83, 35, 94, 73, 98,  3, 64, 82,
         55, 79, 80, 21, 39, 72, 13, 50,  6, 70,
         85, 87, 51, 17, 66, 20, 28, 26,  2, 22,
         40, 23, 71, 62, 73, 32, 43, 24,  4, 56,
          7, 34, 57, 74, 45, 11, 88, 67,  5, 58]);    // 73

// LS Solution, using an object to change a numbers "seen" status to true, and returning if that key value already exists.

function findDup(array) {
  const seen = {};

  for (let i = 0; i < array.length; i += 1) {
    if (seen[array[i]]) {
      return array[i];
    } else {
      seen[array[i]] = true;
    }
  }
}

// 5 Combine Two Lists

function interleave(arr1, arr2) {
  let resultArr = [];
  
  for (i = 0; i < arr1.length; i++) {
    resultArr.push(arr1[i], arr2[i]);
  }

  return resultArr;
}

interleave([1, 2, 3], ['a', 'b', 'c']);    // [1, "a", 2, "b", 3, "c"]

// 6 Multiplicative Average

function showMultiplicativeAverage(numbers) {
  let total = 1;

  for (i = 0; i < numbers.length; i++) {
    total *= numbers[i];
  }

  return (total / numbers.length).toFixed(3);
}

showMultiplicativeAverage([3, 5]);                   // "7.500"
showMultiplicativeAverage([2, 5, 7, 11, 13, 17]);    // "28361.667"

// 7 Multiply Lists

function multiplyList(l1, l2) {
  let resultArr = [];

  for (i = 0; i < l1.length; i++) {
    resultArr.push(l1[i] * l2[i]);
  }

  return resultArr;
}

multiplyList([3, 5, 7], [9, 10, 11]);    // [27, 50, 77]

// 8 Digits List

function digitList(number) {
  let resArray = String(number).split('');

  return resArray.map((num) => Number(num))

  // Cleaned up version of the callback function:
  // return resArray.map(function (num) {
  //   return Number(num);
  // })
}

digitList(12345);       // [1, 2, 3, 4, 5]
digitList(7);           // [7]
digitList(375290);      // [3, 7, 5, 2, 9, 0]
digitList(444);         // [4, 4, 4]

// LS Solution

function digitList(number) {
  const numberStringArray = String(number).split('');
  const numberArray = [];

  for (let i = 0; i < numberStringArray.length; i += 1) {
    numberArray.push(parseInt(numberStringArray[i], 10));
  }

  return numberArray;
}