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

let arrayTest = [1,2,3,4,'a','b','c'];

let result = arrayTest.filter(el => el > 3 || el > 'b'); // [4, 'c']

let greeting = 'Hello';

while (true) {
  greeting = 'Hi';
  break;
}

console.log(greeting);

// This code outputs `Hi` rather than hello as the `greeting` variable first declared and assigned `Hello` on `line 1` is reassigned within the `while` block on `lines 3-6`. This reasignment takes place as the condition given to the `while` block evaluates to true (true === true), and the `greeting = 'hi'` variable reasignment occurs to outer scope `greeting` variable from `line 1` as it is in scope. After the reasignment on `line 4`, we then encounter a `break` statement which ends the exeuction of the `while` loop. We then use `console.log` to print the value of `greeting` to the console, which is now `Hi`.

let a = "Hello";

if (a) {
  console.log("Hello is truthy");
} else {
  console.log("Hello is falsy");
}

// On `line 1` we declare a variable `a` and assign it the value `Hello`. We then write an `if` statement on `lines 3-7`. On `line 3`, the condition for the `if` branch of the statement is `a`. As `a` represents the value `Hello`, which is a truthy value`, this branch is executed. We then call `console.log` passing in the string 'Hello is truthy' which gets ouptut to the console. The rest of the if..else statement does not execute and the program ends after `line 7`.

// a function definition starts with `function` a name for the function, a list of optional comma separated paramters within parentheses, and then the body of the function between `{...}`. When we define a function, we also declare a variable of the functions name.

function functionName(optionalparamter1, optionalparamter2, ...) {
  // function body
}

// A function invokation is when we call the funciton. We do so by appending `()` to the name of the function.

functioncall();

// Within the parentheses, we can pass in a value as an argument to be assigned to a function parameter as defined within the function definition. The passed in value will be assigned to the paramter name and used during method invocation.

// A function declaration starts with the `function` word and defineds a function with a name.

// A function expression uses the fact that in JavaScript functions are first class functions. This means that functions are just objects that can be passed around and assigned to variables just as anything else. A function expressions returns a function object, and is most often assigned to a variable.

let functionExpression = function () {
  // body of func...
}

(function () {
  // function body....
}) // is also a function expression.

// return function sayhello() {
  // function body.
} // also a function expression as we're returning it.

// Example of partial function application.

function prepender(greeting, text) {
  console.log(`${greeting} ${text}`);
}

function makePrepender(greeting) {
  return function(text) {
    return prepender(greeting, text);
  }
}

let prep = makePrepender('Sup!');

prep('my dude!');

//

let a = 'outer';

function testScope() {
  let a = 'inner';
  console.log(a);
}

console.log(a); // outer
testScope(); // inner
console.log(a); // outer

// The code ouputs `outer` on `line 8` as the `console.log(a)` call references the globally scoped variable `a` declared on `line 1`. The `let a` variable delcaration on `line 4` within the `testScope` function creates a new variable within the functions scope, which shadows the outer scope variable `a`. This results in the `console.log(a)` call within the `testScope` function to use this function scoped `a` variable, but the variable assignment has no affect on the outer scoped `a` variable from line 1. This means that the last `console.log(a)` call on `line 10`, after the `testScope()` function invocation 1 line previous, will also log `outer`.

//

let a = 'outer';

function testScope() {
  a = 'inner';
  console.log(a);
}

console.log(a);
testScope();
console.log(a);

// The first `console.log(a)` call on line 8 will return `outer`, as it references the variables `a`'s value declared and assigned on `line 1`. We then invoke the `testScope` function on `line 9`. Within this function definition, we re-assign the value `inner` to the varaible `a`. The variable `a` is in scope as all outer scoped variables are accessible in an inner scope. This results in the `console.log(a)` call on `line 5` to output `inner`. The last `console.log(a)` call on `line 10` references this new value for `a` and also outputs `inner`. 

// 

let basket = 'empty';

function goShopping() {
  function shop1() {
    basket = 'tv';
  }

  console.log(basket);

  let shop2 = function() {
    basket = 'computer';
  };

  const shop3 = () => {
    let basket = 'play station';
    console.log(basket);
  };

  shop1();
  shop2();
  shop3();

  console.log(basket);
}

goShopping();

// empty
// play station
// computer

// We first declare a globally scoped variable `basket` and assign it the value `empty` on `line 1`. We then have the function defintion for `goShopping` on `lines 3 to 24`. On `line 26` we invoked the `goShopping` method.

// The `goShopping` method definition includes 3 other function defintions for `shop1`, `shop2`, and `shop3`, but the first thing that happens in runtime is that we call `console.log(basket)` on `line 8`. At this time, `basket` still references the original outer scoped value of `empty`, and is what's output.

// The next thing to happen is we invoke `shop1` on `line 19`. Within this function, we re-assign the `basket` variable to the string `tv`. We then move onto the next function call `shop2` on `line 20`. Within `shop2`s function defintion, we once again reassign the value of `basket`, this time to `computer`.

// We then reach teh `shop3` function call on `line 21`. Within this function definition, we decalre a new function scoped variable `basket` and assign it the value of `play station`. This assignment has no affect on the outer (global) scoped `basket`. We then continue `shop3` method execution where we `console.log(basket)` which outputs the `shop3` function scoped variable `basket`'s value of `play station.

// We then finally reach the last line within the method definiton calling `console.log(basket)` one more time, which references global scope variable `basket`'s value which is still the reassigned value of `computer` which occured after the `shop2` method invocation.

//

function hello() {
  a = 'hi';
}

hello();
console.log(a); // 'hi''

// As `a` is decalred without `let`, `var`, `const`, or `function`, the variable is declared as a global variable. As it's a global variable, it's accessible to the `console.log(a)` call on `line 6` AFTER the `hello()` function has been invoked. Thus `console.log(a)` outputs `hi`.

// 

function hello() {
  let a = 'hello';
}

hello();
console.log(a);

// This will raise a reference error, as `a` is defiend with the scope of `hello` and not accessible outside of the function.


// 

console.log(a);

var a = 1;

// This code will log `undefined` as hoisting only moves the function declaration to the top of the program, and not the assignment. By default, `var` variables after hoisting are initialized to `undefined`.

// 

console.log(a);

let a = 1;

// This will raise a reference error, as `let` variables are not accessible, even after hoisting and raises an error because the variable is `unset`. 

// 

console.log(a);

function hello() {
  a = 1;
}

// This will raise an error, as the `hello` function is never called, and therfor the `a` global variable is never declared.

//

function say() {
  if (false) {
    var a = 'hello from inside a block';
  }

  console.log(a);
}

say();

// This code will log `undefined`.

// This is because `var` variables are function scoped, and therefor even though the code in the `if` statement never runs, the varaible `a` is still hoisted to the top of the function and given a `undefiend` value.

//

function say() {
  if (false) {
    let a = 'hello from inside a block';
  }

  console.log(a);
}

say();

// This code will raise a reference error, as `let` variables are block scoped. This means that even if the `if` block did run (it doesn't currently), the variable `a` would still not be accessible to teh `console.log(a)` call in the `say()` function scope.

// 

function hello() {
  a = 'hello';
  console.log(a);

  if (false) {
    var a = 'hello again';
  }
}

hello();
console.log(a);

// This will output `hello`, and then raise an error.

// This is due to the `var a` declaration within the `if` statement being hoisted ot the top of the function `hello`. This results in the `line 2` `a = 'hello'` being reasignment, and not a new variable declaration creating a global variable, as a function scoped variable `a` has already been declared. This `a` variable is then accessible to the `console.log(a)` call on `line 3`, but not the `function.log(a)` call on `line 11` in the outer global scope.

//

function hello() {
  a = 'hello';
  console.log(a);

  if (false) {
    let a = 'hello again';
  }
}

hello();
console.log(a);

// This code will ouptut `hello` twice.

// As the `let a = 'hello again'` variable delcaration is only hoisted to the top of the block, and not the function, the `a = 'hello'` variable delcaration on `line 2` actually creates a global variable. This variable is accessible in the `hello` function for the `console.log(a)` call on `line 3`, and in the global scope `console.log(a)` call on `line 11`, as it occurs AFTER the `hello` function has been invoked.