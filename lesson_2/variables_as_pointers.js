// Variables as Pointers

// 1

let myWord = 'Hello';
let myOtherWord = myWord;

console.log(myWord); // 'Hello'
console.log(myOtherWord); // 'Hello'

// The myWord variable is initialized to the string 'Hello'. On line 2, we assign myOtherWord to myWord. At this point, both variables point to a string with the value of 'Hello'; it's important to note though, even though the strings have the same value they are different strings stored at different memory addresses.

// 2

let myWord = 'Hello';
let myOtherWord = myWord;
myWord = 'Goodbye';

console.log(myWord); // 'Goodbye'
console.log(myOtherWord); // 'Hello'

// The `myword` variabled is a initialzied to the string `Hello`, we then assign `myOtherWord` to `myWord`. We then reassign `myWord` to `Goodbye`, this changes the value for `myWord` but does not change the value in `myOtherWord` as it points to a different space in memory, and completely seperate copy of the string.

// This is very similar to Exercise 1 with one key difference: on line 3 we re-assign myWord to the string 'Goodbye'. As with Example 1, when we reach line 2 both variables are pointing to a string with the value of 'Hello', but these strings exist at different addresses in memory. By re-assigning the myWord variable on line 3, we are changing what is stored at the memory address myWord points to.

// 3

let myWords = ['Hello', 'Goodbye'];
let myOtherWords = myWords;
myWords[0] = 'Hi';

console.log(myWords); // ['Hi', 'Goodbye']
console.log(myOtherWords); // ['Hi', 'Goodbye']

// Here we assigned the array object to the `myWords` variable. We then assign the same object to `myOtherWords`. On line 30, the reasignment actually references the string at index 0 rather than the array itself, meaning that both `myWords` and `myOtherWords` point to the same array which now contains `['Hi', 'Goodbye']`.

// In some ways this looks similar to Exericse 2. There are a couple of key differences though:
//    The fact that myWords is initialized to an array, which is a reference type.
//    What we then do with myWords on line 3.

// With reference types, the value stored in memory that the variable points to is a reference to another location in memory. After line 2, both variables have as their value the memory address where the array is stored.

// On line 3, we're not re-assigning the myWords variable, instead we're changing the value of one of the array elements that the myWords variable references.

// Because we've changed, or mutated, the array, and because both variables reference the same array, when we log both variables we get the same output.

// 4 

let myWords = ['Hello', 'Goodbye'];
let myOtherWords = myWords;
myWords = ['Hi', 'Bye'];

console.log(myWords); // ['Hi', 'Bye']
console.log(myOtherWords); // ['Hello', 'Goodbye']

// Here are reasign the myWords variable to a new array containing Hi Bye, the `myOtherWords` variable still points to the original `Hello`, `Goodbye` array.

// As with Exercise 3, we're again dealing with a reference type. Again, after line 2, both variables have as their value the memory address where the array is stored. In this exercise though, line 3 re-assigns the myWords variable to a different value. In this case we're re-assigning it to another array, but we could equally have re-assigned it to a primitive value. The important point is that the variable now points to a different value and so the two variables no longer have the same value (the memory address where the ['Hello', 'Goodbye'] array is stored). When we log each variable, different values are therefore output.

// 5

let myWords = ['Hello', 'Goodbye'];
let myWord = myWords[0];
myWords[0] = 'Hi';

console.log(myWords); // ['Hi', 'Goodbye']
console.log(myWord); // 'Hello'

// On line 1 we declare and initialize the variable myWords to an array containing two elements, the strings 'Hello' and 'Goodbye'.
// On line 2 we declare and initialize another variable, myWord, to the element at index 0 of the array referenced by myWords, which is the string 'Hello'. Because that string is a primitive type, index 0 of the array and the myWord variable each reference different strings at different memory addresses, even though those strings have the same value.
// On line 3 we re-assign index 0 of the myWords array to a new value, the string 'Hi'. This changes the value stored at index 0 of the array, but has no effect on the value stored by the myWord variable.
// When we log the value of myWords and myWord on line 5 and 6, we can see that the myWords array has the string 'Hi' at index 0 and myWord has a value of 'Hello'.

// 6

let myWords = ['Hello', 'Goodbye'];
let myWord = 'Hi';
myWords[0] = myWord;
myWord = 'Hello';

console.log(myWords); // ['Hi', 'Goodbye']
console.log(myWord); // 'Hello'



