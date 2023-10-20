// Lesson 5 Practice problem: Working with object properties

// 1

let pets = {
  cat: 'Simon',
  dog: 'Dwarf',
  mice: null,
};

function objectHasProperty(obj, property) {
  if (Object.keys(obj).indexOf(property) >= 0) {
    return true;
  }
  return false;
}

objectHasProperty(pets, 'dog');       // true
objectHasProperty(pets, 'lizard');    // false
objectHasProperty(pets, 'mice');      // true

// LS Solution

function objectHasProperty(object, propertyName) {
  let keys = Object.keys(object);
  return keys.indexOf(propertyName) !== -1;
}

// 2

let wins = {
  steve: 3,
  susie: 4,
};

function incrementProperty(object, string) {
  let keys = Object.keys(object);

  if (keys.indexOf(string) >= 0) {
    object[string] += 1;
  } else {
    object[string] = 1;
  }

  return object[string];
}

incrementProperty(wins, 'susie');   // 5
wins;                               // { steve: 3, susie: 5 }
incrementProperty(wins, 'lucy');    // 1
wins;                               // { steve: 3, susie: 5, lucy: 1 }

// LS Solution, more elegant way of finding out if property exists.

function incrementProperty(object, propertyName) {
  if (object[propertyName]) {
    object[propertyName] += 1;
  } else {
    object[propertyName] = 1;
  }

  return object[propertyName];
}

// 3

let hal = {
  model: 9000,
  enabled: true,
};

function copyProperties(obj1, obj2) {
  let keys = Object.keys(obj1);

  for (i = 0; i < keys.length; i++) {
    obj2[keys[i]] = obj1[keys[i]];
  }

  return keys.length;
}

let sal = {};
copyProperties(hal, sal);  // 2
sal;                       // { model: 9000, enabled: true }

// LS Solution

function copyProperties(source, destination) {
  let count = 0;
  for (let property in source) {
    destination[property] = source[property];
    count += 1;
  }

  return count;
}

// 4

function wordCount(string) {
  let words = string.split(' ');
  let object = {};
  console.log(words);

  for (let id = 0; id < words.length; id++) {
    let count = 0;
    console.log(words[id]);
    for (let i = 0; i < words.length; i++) {
      if (words[id] === words[i]) {
        count += 1;
      }
    }
    object[words[id]] = count;
  }

  return object;
}

wordCount('box car cat bag box');  // { box: 2, car: 1, cat: 1, bag: 1 }

// LS Solution

function wordCount(text) {
  let count = {};
  let words = text.split(' ');

  for (let index = 0; index < words.length; index += 1) {
    let word = words[index];
    if (!count[word]) {
      count[word] = 0;
    }

    count[word] += 1;
  }

  return count;
}