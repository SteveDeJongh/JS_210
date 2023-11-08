// JS210 JavaScript Language Fundamentals -> Medium 1

// 1 Logical Operation

(false && undefined); // false
(false || undefined); // undefined
((false && undefined) || (false || undefined)); // undefined
((false || undefined) || (false && undefined)); // false
((false && undefined) && (false || undefined)); // false
((false || undefined) && (false && undefined)); // undefined
('a' || (false && undefined) || ''); // "a"
((false && undefined) || 'a' || ''); // "a"
('a' && (false || undefined) && ''); // undefined
((false || undefined) && 'a' && ''); // undefined

// The logical AND (&&) and logical OR (||) operators do not always return a boolean value. They return the value of one of their operands (i.e., the expressions being compared), which may be a non-boolean value such as shown above.

// ex:

((false && undefined) || 'a' || '');
(false || 'a' || '');
('a' || '');
('a');

// ------

('a' && (false || undefined) && '');
('a' && undefined && '');
(undefined && '');
(undefined);

// ------

((false || undefined) || (false && undefined));
(undefined || false);
(false);

// 2 Conditional Loop

let i = 0;
while (i < 10) {
  if (i % 3 === 0) {
    console.log(i);
  } else {
    i += 1;
  }
}

// This will result in an infinite loop as the iterator `i` starts with 0 and will return true to the if condition (i % 3 === 0). To fix this, we need to increment the iterator on both conditions of the loop, or more simply, move the incrementation of `i` to outside of the conditional statement.

// 3 Multiplication Table

function padLeft(number) {
  const stringNumber = String(number);
  switch (stringNumber.length) {
    case 1:  return `  ${stringNumber}`;
    case 2:  return ` ${stringNumber}`;
    default: return stringNumber;
  }
}

for (let i = 1; i < 10; i += 1) {
  let row = '';
  for (let j = 1; j <= 10; j += 1) {
    row += `${padLeft(i * j)} `;
  }

  console.log(row);
}

// The code will only run from 1 to 9, as the condition for to keep the loop running it i < 10, and therefor does not execute when i IS 10.

// 4 Selected Columns

function getSelectedColumns(numbers, cols) {
  var result = [];

  for (var i = 0, length = numbers.length; i < length; i += 1) {
    for (var j = 0, length = cols.length; j < length; j += 1) {
      if (!result[j]) {
        result[j] = [];
      }

      result[j][i] = numbers[i][cols[j]];
    }
  }

  return result;
}

// given the following arrays of number arrays
const array1 = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
const array2 = [[1, 2, 3], [1, 2, 3], [1, 2, 3]];

// `array1` in row/column format
// [[1, 2, 3],
//  [4, 5, 6],
//  [7, 8, 9]]

getSelectedColumns(array1, [0]);     // [[1]];            expected: [[1, 4, 7]]
getSelectedColumns(array1, [0, 2]);  // [[1, 4], [3, 6]]; expected: [[1, 4, 7], [3, 6, 9]]
getSelectedColumns(array2, [1, 2]);  // [[2, 2], [3, 3]]; expected: [[2, 2, 2], [3, 3, 3]]