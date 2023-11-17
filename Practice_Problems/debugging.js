// JS210 JavaScript Language Fundamentals -> Debugging

// 1 Hello1 Friends!

function randomGreeting() {
  const words = ['Hello', 'Howdy', 'Hi', 'Hey there', 'What\'s up',
               'Greetings', 'Salutations', 'Good to see you'];

  const idx = Math.floor(Math.random() * words.length);

  words[idx]; // need to add return before `words[idx]`
}

function greet(...args) {
  const names = Array.prototype.slice.call(args);

  for (let i = 0; i < names.length; i++) {
    const name = names[i];
    const greeting = randomGreeting(); // Needed to add `()` brackets to actually cal the function.

    console.log(`${greeting}, ${name}!`);
  }
}

greet('Hannah', 'Jose', 'Beatrix', 'Julie', 'Ian');

// 2 Includes False

// Caroline has written a very simple function, includesFalse, that searches a list of primitives for the boolean false. If false is found, the function immediately returns true. If no occurrence of false has been found after iterating through the entire array, the function returns false.

// Caroline's last method invocation of includesFalse (line 15) doesn't return what she expects. Why is that? Fix the code so that it behaves as intended.

function includesFalse(list) {
  for (let i = 0; i < list.length; i++) {
    let element = list[i];

    if (element === false) {
      return true;
    }
  }

  return false;
}
                                                                  // returns:
includesFalse([8, null, 'abc', true, 'launch', 11, false]);       // true
includesFalse(['programming', undefined, 37, 64, true, 'false']); // false
includesFalse([9422, 'lambda', true, 0, '54', null]);             // true

// Line 47 returns true as 0 evaluates to false using the `==` equality operator. Instead, we should use strict equality to ensure that the element is actually false, and not just  a falsy value.

// 3 Place A Bet

function placeABet(guess) {
  (function generateRandomInt() {
    return Math.floor(Math.random() * 25) + 1;
  });

  const winningNumber = generateRandomInt();

  if (guess < 1 || guess > 25) {
    return 'Invalid guess. Valid guesses are between 1 and 25.';
  }

  if (guess === winningNumber) {
    return "Congratulations, you win!";
  } else {
    return "Wrong-o! You lose.";
  }
}

const userGuess = parseInt(prompt('Input a guess between 1-25'), 10);
alert(placeABet(userGuess));

// The error is raise because the `generateRandomInt` function is wrapped in parenthesis. Once these are removed the function `placeABet` runs as it should.

// 4 Picky Museum Filter

function wantToVisit(museum, city) {
  return museum.includes('Computer')
      || museum.includes('Science')
      || (
        museum.includes('Modern')
        && museum.includes('Art')
        && (museum.includes('Andy Warhol')
        || city === 'Amsterdam'));
}

// Tests (should all print 'true')

console.log(wantToVisit('Computer Games Museum', 'Berlin') === true);
console.log(wantToVisit('National Museum of Nature and Science', 'Tokyo') === true);
console.log(wantToVisit('Museum of Modern Art', 'New York') === false);
console.log(wantToVisit('El Paso Museum of Archaeology', 'El Paso') === false);
console.log(wantToVisit('NEMO Science Museum', 'Amsterdam') === true);
console.log(wantToVisit('National Museum of Modern Art', 'Paris') === false);
console.log(wantToVisit('Andy Warhol Museum of Modern Art', 'Medzilaborce') === true);
console.log(wantToVisit('Moco: Modern Contemporary Art', 'Amsterdam') === true);
console.log(wantToVisit('Van Gogh Museum', 'Amsterdam') === false);
console.log(wantToVisit('Andy Warhol Museum', 'Melbourne') === false);

// Boolean logic broken down for 'easier' understanding.

function wantToVisit(museum, city) {
  function contains(string, substring) {
    return string.toLowerCase().match(substring.toLowerCase()) != null;
  }

  const aboutComputers = contains(museum, 'Computer');
  const aboutScience = contains(museum, 'Science');
  const aboutModernArt = contains(museum, 'Modern') && contains(museum, 'Art');
  const aboutAndyWarhol = contains(museum, 'Andy Warhol');
  const inAmsterdam = (city === 'Amsterdam');

  const mustGo =  aboutComputers || aboutScience;
  const worthAnException = aboutModernArt && (aboutAndyWarhol || inAmsterdam);
  return mustGo || worthAnException;
}

// 5 Shop Transactions

const transactionLog = [];

function processInput(input) {
  const numericalData = parseFloat(input);

  if (Number.isNaN(numericalData)) {
    throw (new Error('Data could not be converted to numerical amount.'));
  }

  return numericalData;
}

function logTransaction() {
  let data = prompt('Please enter the transaction amount: ');

  try {
    data = processInput(data);
    transactionLog.push(data);

    alert('Thank you. Data accepted.');
  } catch { // needs to be catch(error)
    alert(error.message);
  }
}

function transactionTotal() {
  let total = 0;

  for (let i = 0; i < transactionLog.length; i++) {
    total += transactionLog[i];
  }

  return total;
}

logTransaction();
logTransaction();
logTransaction();

console.log(transactionTotal());

// The try/catch/finally block needs for the catch brand to be handed a `error` object in order to properly return the error message.

// Instead of using a try/catch block, the code could be refactored to use the fact that `NaN` returns falsy.

const transactionLog = [];

function processInput(input) {
  return parseFloat(input);
}

function logTransaction() {
  let data = prompt('Please enter the transaction amount: ');

  data = processInput(data);

  if (data) {
    transactionLog.push(data);
    alert('Thank you. Data accepted.');
  } else {
    alert('Data could not be converted to numerical amount.')
  }
}

// 6 Full Moon

const species = ['wolf', 'human', 'wasp', 'squirrel', 'weasel', 'dinosaur'];
const isMidnight = true;
const isFullmoon = true;

function isTransformable(species) {
  return species[0] === 'w';
}

function transform(species) {
  return `were${species}`;
}

for (let index = 0; index < species.length; index++) {
  const thisSpecies = species[index];
  var newSpecies; // This should be turned into a block scoped variable so that it is reset on every iteration of the block. This is necessary to reassign it `undefined` on each iteration, and therefor occasionally returning a falsey value to the second if block.

  // Another option would be to reassign `newSpecies` to `undefined` on each iteration of the block before the check is made on if the species is transformable.

  if (isMidnight && isFullmoon && isTransformable(thisSpecies)) {
    newSpecies = transform(thisSpecies);
  }

  if (newSpecies) {
    console.log(`Beware of the ${newSpecies}!`);
  }
}

// 7 Space Design

// Roles (salary still to be determined)

const ceo = {
  tasks: ['company strategy', 'resource allocation', 'performance monitoring'],
  salary: 0,
};

const developer = {
  tasks: ['turn product vision into code'],
  salary: 0,
};

const scrumMaster = {
  tasks: ['organize scrum process', 'manage scrum teams'],
  salary: 0,
};

// Team -- we're hiring!

const team = {};

team[ceo] = 'Kim'; // Need to be quoted, or use dot notation. ie: `team['ceo']` or `team.ceo`
team[scrumMaster] = 'Alice'; // Need to be quoted, or use dot notation. ie: `team['ceo']` or `team.ceo`
team[developer] = undefined; // Need to be quoted, or use dot notation. ie: `team['ceo']` or `team.ceo`

const company = {
  name: 'Space Design',
  team,
  projectedRevenue: 500000,
};

console.log(`----{ ${company.name} }----`);
console.log(`CEO: ${company.team[ceo]}`); // Need to be quoted, or use dot notation. ie: `team['ceo']` or `team.ceo`
console.log(`Scrum master: ${company.team[scrumMaster]}`); // Need to be quoted, or use dot notation. ie: `team['ceo']` or `team.ceo`
console.log(`Projected revenue: $${company.projectedRevenue}`);

// ----{ Space Design }----
// CEO: undefined
// Scrum master: undefined
// Projected revenue: $500000

// 8 Expensive Study Preparation

// The shopping cart is a list of items, where each item
// is an object { name: <string>, amount: <number> }.
let shoppingCart = [];

// Currently available products with prices.
const prices = {
  'notebook': 9.99,
  'pencil': 1.70,
  'coffee': 3.00,
  'smoothie': 2.10,
};

function price({name}) {
  return prices[name];
}

// Adding an item to the shopping cart.
// The amount is optional and defaults to 1.
// If the item is already in the cart, its amount is updated.
function updateCart(name, amount) { // amount = 1
  amount = amount || 1; // if the value passed in is 0, it will be reasigned to 1. This makes removing items impossible. Instead, the paramter should have a default value of 1 instead.

  let alreadyInCart = false;

  for (let i = 0; i < shoppingCart.length; i += 1) {
    let item = shoppingCart[i];

    if (item.name === name) {
      item.amount = amount;
      alreadyInCart = true;
      break;
    }
  }

  if (!alreadyInCart) {
    shoppingCart.push({ name, amount });
  }
}

// Calculating the price for the whole shopping cart.
function total() {
  let total = 0;

  for (let i = 0; i < shoppingCart.length; i += 1) {
    let item = shoppingCart[i];

    total += (item.amount * price(item));
  }

  return total.toFixed(2);
}

function pay() {
  // omitted

  console.log(`You have been charged $${total()}.`);
}

function checkout() {
  pay();
  shoppingCart = [];
}

// Example purchase.

updateCart('notebook');
updateCart('pencil', 2);
updateCart('coffee', 1);

// Oh wait, I don't need pencils
updateCart('pencil', 0);

checkout();
// You have been charged $14.69.

// 9 Stuck on Page 18

const totalPages = 364;
let energy = 100;

function read() {
  let currentPage = 1;

  while (energy > 0 && currentPage < totalPages) {
    currentPage += 1;
    energy -= (5 + currentPage * 0.1);
  }

  console.log(`Made it to page ${String(currentPage)}.`);

  // Drink a cup of coffee.
  energy = 100;

  // Continue reading.
  if (currentPage < totalPages) {
    read();
  } else {
    console.log('Done!');
  }
}

read();

// We reassign our curren tpage to 1 on every iteration of the function `read`. This means that we never move past page 18. Moving the `currentpage` variable outside of the function would solve this.