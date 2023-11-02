// Lesson 5: Repeated Characters

function repeatedCharacters(string) {
  let result = {};
  let lowerCaseString = string.toLowerCase();

  for (let index = 0; index < lowerCaseString.length; index += 1) {
    if (result[lowerCaseString[index]] !== undefined) {
      result[lowerCaseString[index]] += 1;
    } else {
      result[lowerCaseString[index]] = 1;
    }
  }

  for (let key in result) {
    if (result[key] === 1) {
      delete result[key];
    }
  }

  return result;
}

repeatedCharacters('Programming');    // { r: 2, g: 2, m: 2 }
repeatedCharacters('Combination');    // { o: 2, i: 2, n: 2 }
repeatedCharacters('Pet');            // {}
repeatedCharacters('Paper');          // { p: 2 }
repeatedCharacters('Baseless');       // { s: 3, e: 2 }