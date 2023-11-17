// LS JavaScript Book - Exercises

// Preparations - Exercises

// 1 

mkdir my_folder
cd my_folder
touch one.js
touch two.js

node one.js
node two.js

// 2

cd ..

rm -R my_folder

// 3

mkdir preparations_exercises
cd preparations_exercises
touch foo.js

// 4
// A
node foo.js // outputs "bar"

// B 
> let foo = 'bar'
= undefined

> console.log(foo);
bar
= undefined

> foo
= 'bar'

// C
> let foo = 'bar';
  console.log(foo);
  foo
bar
= "bar" // Ultimate return value from the last line of code.

// 5

substring // String, instance
create // Object, static method 
fromCharCode // String, static
slice // String, Array, instance
toString // String, Object, Array, Number, instance

// 6 Acceptable variable names: (excluding constants)

index  // Yes
CatName // No, not camelCase
snake_case // No, not camelCase
lazyDog // Yes
quick_Fox // No, not camelCase
1stCharacter // No, start with a number.
operand2 // Yes
BIG_NUMBER // No, not camelCase

// 7 Acceptable function names:

index // Yes
CatName // Yes, but only if function is a constructor.
snake_case // No not camelCase
lazyDog // Yes
quick_Fox // No, not camelCase
1stCharacter // No, starts with a number
operand2 // Yes
BIG_NUMBER // No.

// 8 Acceptable names for constants representing magic numbers

index // No
CatName // No
snake_case // No
lazyDog // No
quick_Fox // No
1stCharacter // No
operand2 // No
BIG_NUMBER // Yes, magic number constants always use SCREAMING_SNAKE_CASE

// 9 Which of the following names don't satisfy the style guidelines for naming variables, functions, or constants?

index
CatName
snake_case // No
lazyDog
quick_Fox // No
1stCharacter // No
operand2
BIG_NUMBER

// JS Book - The basics Exercises

// 1

'Steve' + 'De Jongh';

// 2 

> let number = 4936
> let ones = number % 10
> ones
= 6

> number = (number - ones) / 10
= 493

> let tens = number % 10
> tens
= 3

> number = (number - tens) / 10
= 49

> let hundreds = number % 10
> hundreds
= 9

> let thousands = (number - hundreds) / 10
> thousands
= 4

// 3 

'true' // String
false // Boolean
1.5 // Number
2 // Number
undefined // undefined
{ foo: 'bar' } // Object

// 4

console.log('5' + 10); // logs '510' instead of 15 as implciit type coercion converts the 10 into a string, and then concatenates the two strings.

// 5

console.log(Number('5') + 10);

// Or

console.log(parseInt('5', 10) + 10);

// 6

console.log(`The value of 5 + 10 is ${Number('5') + 10}.`)

// 7

let foo = ['a', 'b', 'c'];
console.log(foo.length);  // => 3
console.log(foo[3]);      // will this result in an error? No, it returns undefined.

// 8 

let names = ['asta', 'butterscoth', 'pudding', 'neptune', 'darwin'];

// 9

let pets = {
  asta: 'dog',
  butterscoth: 'cat',
  pudding: 'cat',
  neptune: 'fish',
  darwin: 'lizard',
}

// 10

'foo' === 'Foo' // false, case matters.

// 11

parseInt('3.1415') // 3

// 12

'12' < '9' // true, since the operands are string, they are evaluated character by character.

// Varaibles - Exercises

// 1

greeter.js
let name = "Victor";
console.log(`Good Morning, ${name}.`)
console.log(`Good Afternoon, ${name}.`)
console.log(`Good Evening, ${name}.`)

// 2

age.js
let age = 20;
console.log(`In 10 years, you will be ${age + 10} years old.`)
console.log(`In 20 years, you will be ${age + 20} years old.`)
console.log(`In 30 years, you will be ${age + 30} years old.`)
console.log(`In 40 years, you will be ${age + 40} years old.`)

// 3

{
  let foo = 'bar';
}

console.log(foo);

// Raises an error, as foo is out of scope as it's declared within a block.

// 4

const NAME = 'Victor';
console.log('Good Morning, ' + NAME); // Outputs with 'Victor'
console.log('Good Afternoon, ' + NAME); // Outputs with 'Victor'
console.log('Good Evening, ' + NAME); // Outputs with 'Victor'

NAME = 'Joe'; // Error! You can't change the value of a constant.
console.log('Good Morning, ' + NAME);
console.log('Good Afternoon, ' + NAME);
console.log('Good Evening, ' + NAME);

// 5 

let foo = 'bar';
{
  let foo = 'qux';
}

console.log(foo); // logs 'bar'

// This is because instead of changing the value of foo on line 234, we're delcaring a new blocked scoped variable `foo`.

// Line 1 initializes a variable named foo with the value'bar'. Line 2 starts a block, which creates a new scope for let variables. The variable on line 1 is still visible at this point, but line 3 declares a new variable named foo that shadows (hides) the variable from line 1. This second variable gets initialized to 'qux', but it goes out of scope on line 4 when the block ends. That brings foo from line 1 back into scope, so line 6 logs its value: bar.

// 6

const FOO = 'bar';
{
  const FOO = 'qux';
}

console.log(FOO);

// For much the same reason as the previous exercise, this program doesn't raise an error, and it logs bar on line 6. One key difference, though, is that we are using const instead of let, which may have led you to believe an error would occur on line 3. However, since the two const variables are separate entities -- that is, the declaration on line 3 declares a completely new constant -- no error occurs.