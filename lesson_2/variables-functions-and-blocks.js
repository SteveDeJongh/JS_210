// Exercises: Variables, Functions, and Blocks

// 1

let color = 'yellow';
let colors = ['red', 'green', 'blue'];

function updateColors(colors) {
  colors.push(color);
}

updateColors(colors)
console.log(colors);

// This code will log an array ['red', 'green', 'blue, 'yellow']

// 2

let color = 'yellow';
let colors = ['red', 'green', 'blue'];

function updateColors(colors, color) {
  colors.push(color);
}

updateColors(colors)
console.log(colors);

// This code will log an array ['red', 'green', 'blue, undefined]

// This code example is very near to the example above, however instead of accessing the `color` variable in the outer scope, the `updatecolors` function defines an additional parameter `color`. This second parameter shadows the outer scope variable `color` and as the parameter is not defined within the method defintion and at function invocation nothing is passed in for the 2nd argument, it's value is undefined. This undefined is then what is pushed to the `colors` array, and logged.

// 3
let color1 = 'purple';
let color2 = 'pink';
let colors = ['red', 'green', 'blue'];

function updateColors(colors, color) {
  colors.push(color);
}

updateColors(colors, color1);
updateColors(colors, color2);
console.log(colors);

// This will log an array containing ['red', 'green', 'blue', 'purple', 'pink']

// We first initialize 3 global variables; color1, color2, and the array colors. We then define the `updateColors` funciton with two parameter `colors` and `color`. Within the definition we push the `color` parameter into the `colors` parameter.

// We then invoke the `updateColors` function twice, both times passing in teh `colors` array as the first argument, and `color1` and `color2` once each as the second argument.

// Each time the function is called, the `colors` array represents the same array object. Therefor, on both method invocations, we push the passed in `color (1 or 2)` argument to the tail end of the array, mutating the object. This mutatated `colors` array object is then logged on line 44.

// 4

let color1 = 'purple';
let color2 = 'pink';
let colors = ['red', 'green', 'blue'];

function updateColors(colors, color) {
  colors.push(color);
  return colors;
}

let newColors = updateColors(colors, color1);
updateColors(newColors, color2);
console.log(colors);

// This code will log the array ['red', 'green', 'blue', 'purple', 'pink']

// On lines 56 to 58 we initalize several global variables; `color1`, `color2`, `colors`. We then define the `updateColors` function with two parameters, `colors` and `color`. Within this method definitona we call `push` on the `colors` parameter and pass in the `color` parameter. We then also return the `colors` parameter from the method.

// On `line 65` we initialize the global variable `newColors` and assign it to the return value of `updateColors` called with `colors` and `color1` passed in as arguments. As the return value of the method is the mutated `colors` array, this is what's assigned to the `newColors` global variable.

// On `line 66` we then call the `udpateColors` method again, this time with the `newColors` array and the `color2` variable passed in. The method mutates the array by appending it with the value from `color2` and returns this array.

// As all along the `colors` global variable array, the `colors` method parameter, and the returned by the `updateColors` method array have all been pointing to the same array, this mutated array is what's logged on line 67.

// 5

let color = 'purple';
let colors = ['red', 'green', 'blue'];

function addColor(colors, color) {
  colors.push(color);
  return colors;
}

function removeColor(colors) {
  color = colors.pop();
  return colors;
}

let newColors = removeColor(colors);
addColor(colors, color);
console.log(newColors);

// This logs the array ['red', 'green', 'blue'].

// In some ways this is similar to Exercise 4 except that here we have two functions, both of which mutate the array passed in.

// We declare and initialize the global variable color to the string 'purple' on line 81. On line 82, we declare and initialize the global variable colors to an array containing three strings, 'red', 'green', and 'blue'.

// We declare two functions:

// addColor which defines two parameters colors and color. It calls push on colors passing in color as an argument and then returns colors.
// removeColor which defines one parameter colors. It calls pop on colors and then returns colors.
// On line 94 we invoke removeColor, passing in the global colors variable as an argument. At this point the colors parameter within the scope of the function and the global colors variable both point to the same array ['red', 'green', 'blue']. We then mutate that array by calling the Array method pop on it. This removes the last element of the array, so the array which the colors parameter and the global colors variable both reference now has a value of ['red', 'green']. The function returns a refence to this array, and it is this reference to which newColors is assigned.

// A key aspect of this function though, is what happens on line 90. Here we assign color to the return value of colors.pop(). The pop method returns the element that it removes, so in this case that return value is the string 'blue'. What is color though? Since we haven't defined a color parameter, nor declared a new variable of that name within the scope of the function, we need to look outside of the function scope. The color referenced on line 90 is the global color variable that we declared on line 81. Line 90 is therefore a re-assignment of this variable.

// At this point, once we've invoked removeColor, the global color variable has a value of 'blue' and the global colors and newColors variables both point to the same array which has a value of ['red', 'green'].

// We then invoke addColor, passing in the colors and color global variables. Within the scope of the function the colors parameter points to the same array as the global colors variable and the color parameter has the value of 'blue'. We then append the value of color to the array and return a reference to the colors array (though we don't do anything with the return value).

// At this point the array to which the global colors and newColors variables both point has a value of ['red', 'green', 'blue'], and so this is what is output when newColors is logged on line 96.

// 6

function capitalize() {
  return word[0].toUpperCase() + word.slice(1);
}

function exclaim() {
  return word += '!!!';
}

let word = 'hello';
let capitalizedWord = capitalize(word);
let exclaimedWord = exclaim(capitalizedWord);

console.log(word); // hello!!!
console.log(capitalizedWord); // Hello
console.log(exclaimedWord); // hello!!!

// This is because although we pass in a string value in both method invocations, neither the `capitalize` or `exclaim` methods use the passed in argument. All references to `word` in the methods are references to the global variable `word` and not a parameter.

// The reason `line 132` logs `hello!!!` is due to the reassignment of the `word` global variable when the `exclaim` method is invoked. As well as reassigning the `word` global variable, we also assign the return value of the method to the `exclaimedWord` global variable.

// 7

function capitalize(word) {
  return word[0].toUpperCase() + word.slice(1);
}

function exclaim(word) {
  return word += '!!!';
}

let word = 'hello';
let capitalizedWord = capitalize(word);
let exclaimedWord = exclaim(capitalizedWord);

console.log(word); // hello
console.log(capitalizedWord); // Hello
console.log(exclaimedWord); // Hello!!

// This is very similar to example6 above, however instead of working with the global variable `word` in the methods, we're passing it in as an argument, also represented by `word` as a parameter.