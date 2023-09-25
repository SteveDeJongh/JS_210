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

