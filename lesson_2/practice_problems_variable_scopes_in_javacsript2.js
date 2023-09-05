// Practice Problems: Variable Scopes in JavaScript (2)

// 1

function say() {
  if (false) {
    var a = 'hello from inside a block';
  }

  console.log(a);
}

say();

// undefined, the scope of variables declared with `var` is function-level, not block level.

// 2

function say() {
  if (false) {
    let a = 'hello from inside a block';
  }

  console.log(a);
}

say();

// Reference error: a is not defined.

// The scope of variables declared with let is block-level, not function-level. Therefore, the variable a is only available inside the if clause on line 3.

// 3

function hello() {
  a = 'hello';
  console.log(a);

  if (false) {
    var a = 'hello again';
  }
}

hello();
console.log(a);

// hello
// Uncaught reference error.

// After hoisting, the `var a` declaration from `line 40`, is hoisted to the top of the function, and therefor the assignment on `line 36` is actually re-asignment to that variable, scoped at the function levle and not global.

// 4

function hello() {
  a = 'hello';
  console.log(a);

  if (false) {
    let a = 'hello again';
  }
}

hello();
console.log(a);

// hello
// hello

// Inside the if statement, `a`'s scope is confiend to like 59, and not hoisted to the funciton scope. Therefor the `a = 'hello'` on `line 55` is treated as a global variable, making it accesssible to both the console.log call within the function and on `line 64`.

// 5

var a = 'hello';

for (var index = 0; index < 5; index += 1) {
  var a = index;
}

console.log(a);
// 4

// 6

let a = 'hello';

for (let index = 0; index < 5; index += 1) {
  let a = index;
}

console.log(a);

// 'hello'

// In this code, we have two different a variables: one in the outer scope, and one in the inner scope. The declaration on line 87 creates and initializes the inner-scoped variable. On line 90, we output the value of the a variable declared on line 1. That variable still has the value 'hello', so line 90 outputs hello.

// 7

let a = 1;

function foo() {
  a = 2;
  let bar = function() {
    a = 3;
    return 4;
  };

  return bar();
}

console.log(foo());
console.log(a);

// 4
// 3

// 8

var a = 'global';

function checkScope() {
  var a = 'local';
  const nested = function() {
    var a = 'nested';
    let superNested = () => {
      a = 'superNested';
      return a;
    };

    return superNested();
  };

  return nested();
}

console.log(checkScope());
console.log(a);

// superNested
// global

// 9

let a = 'outer';
let b = 'outer';

console.log(a);
console.log(b);
setScope(a);
console.log(a);
console.log(b);

function setScope(foo) {
  foo = 'inner';
  b = 'inner';
}

// outer
// outer
// outer
// inner

// 10

let total = 50;
let increment = 15;

function incrementBy(increment) {
  total += increment;
}

console.log(total);
incrementBy(10);
console.log(total);
console.log(increment);

// 50
// 60
// 15

// 11

let a = 'outer';

console.log(a);
setScope();
console.log(a);

var setScope = function () {
  a = 'inner';
};

// outer
// Uncaught TypeError: setScope is not a function(...)

// With hoisting, the above code is equivalent to:

var setScope;

let a = 'outer';

console.log(a);
setScope();
console.log(a);

setScope = function () { // Only the `var setScope` declaration is hoisted.
  a = 'inner';
};