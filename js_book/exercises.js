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