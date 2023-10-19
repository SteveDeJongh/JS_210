// Lesson 4 Practice problem: Find missing numbers

// 1

function missing(arr) {
  let start = arr[0] + 1;
  let end = arr[arr.length - 1];
  let result = [];

  for (i = start; i < end; i++) {
    if (!arr.includes(i)) {
      result.push(i);
    }
  }
  return result;
}

missing([-3, -2, 1, 5]);                  // [-1, 0, 2, 3, 4]
missing([1, 2, 3, 4]);                    // []
missing([1, 5]);                          // [2, 3, 4]
missing([6]);                             // []