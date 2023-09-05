// Practice Problems: Variable Scopes in JavaScript (1)

// 1

let a = 'outer';

function testScope() {
  let a = 'inner';
  console.log(a);
}

console.log(a);
testScope();
console.log(a);

// outer (global variable)
// inner (local functionv variable)
// outer (globla variable)

// 2

let a = 'outer';

function testScope() {
  a = 'inner';
  console.log(a);
}

console.log(a);
testScope();
console.log(a);

// outer
// inner (outer variable has been reassigned to inner)
// inner (outer variable has been reassigned to inner)

// On line 25, a is the global variable from line 22. The assignment assigns inner to the variable. Thus, line 31 logs inner instead of outer.

// 3

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

// The first log operation occurs on line 48; here, basket still has its original value, empty. The function call on line 59 changes basket to tv, and the call on line 60 changes it to computer. The function call on line 61 does not alter the value of the basket global, but defines and sets a local variable with the same name. It then logs play station. Upon returning from shop3, the local variable goes away, so line 63 logs the value of the global basket: computer.

// 4

function hello() {
  a = 'hi';
}

hello();
console.log(a);

// hi

// Here, we call the hello function, so we assign a value of hi to the variable. The variable is a global variable since we don't declare it with let, const, var, or function. Thus, line 81 logs hi.

// 5

function hello() {
  let a = 'hello';
}

hello();
console.log(a);

// This raises a 'uncaught referencerror: a is not defined', as `a` is defined within the function scope and not available in the global scope for the log call on line 94.

// Since we don't define a global variable a, line 6 does not find any variables named a; thus, it raises a ReferenceError.

// 6

console.log(a);

var a = 1;

// undefined

// As just the variable declaration is hoisted above the `console.log` call, `a` is left undefined for the log call.

// 7

console.log(a);

let a = 1;

// ReferenceError: Cannot access 'a' before initialization

// After hoisting, JavaScript can tell that there is an `a` variable, but that variable lives in the Temporal Dead Zone; it is unset and cannot be accessed.

// 8
console.log(a);

function hello() {
  a = 1;
}

// Uncaught ReferenceError: a is not defined

// After hoisting, this program is equivalent to:

function hello() {
  a = 1;
}

console.log(a);
// We define hello, but never call it, so we never assign a value to a. Since we also don't declare a anywhere, line 5 produces a ReferenceError.