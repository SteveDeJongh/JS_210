// Lesson 5: Welcome Stranger

greetings(['John', 'Q', 'Doe'], { title: 'Master', occupation: 'Plumber' });

// console output
// Hello, John Q Doe! Nice to have a Master Plumber around.

function greetings(name, greeting) {
  let fullname = name.join(" ");
  let tittle = greeting.title;
  let occupation = greeting.occupation;

  console.log(`Hello, ${fullname}! Nice to have a ${tittle} ${occupation} around.`);
}

greetings(['John', 'Q', 'Doe'], { title: 'Master', occupation: 'Plumber' });

// LS Solution

function greetings(name, status) {
  let nameGreet = 'Hello, ' + name.join(' ') + '!';
  let statusGreet = 'Nice to have a ' + status.title + ' ' + status.occupation + ' around.';

  console.log(nameGreet + ' ' + statusGreet);
}