// Lesson 5: Working with Dates

// 1

let today = new Date();

console.log(today);

// 2

let dayOfWeek = today.getDay();

console.log(`Today's day is ${dayOfWeek}`);

// LS Solution

console.log("Today's day is " + String(today.getDay()));

// 3

let daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

console.log("Today's day is " + daysOfWeek[today.getDay()]);

// 4

console.log("Today's date is " + daysOfWeek[today.getDay()] + ", the " + today.getDate()) + "st";

// 5

function dateSuffix(date) {
  let dateString = String(date);

  let digit;
  if (dateString.length === 1 ) {
    digit = dateString[0];
  } else if (dateString[0] !== '1') {
    digit = dateString[1];
  }

  let suffix = 'th';
  if (digit === '1') {
    suffix = 'st';
  } else if (digit === '2') {
    suffix = 'nd';
  } else if (digit === '3') {
    suffix = 'rd';
  }

  return String(date) + suffix;
}

console.log("Today's date is " + daysOfWeek[today.getDay()] + ', the ' + dateSuffix(today.getDate()));

// 6

console.log("Today's date is " + daysOfWeek[today.getDay()] + ", " + String(today.getMonth()) + " " + dateSuffix(today.getDate()));

// 7

let months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

console.log("Today's date is " + daysOfWeek[today.getDay()] + ", " + String(months[today.getMonth()]) + " " + dateSuffix(today.getDate()));

// 8

// function formattedMonth(date) {
//   return months[date.getMonth()];
// }

// function formattedDay(date) {
//   return daysOfWeek[date.getDay()];
// }

// function formattedDate(date) {
//   console.log("Today's date is " + formattedDay(date) + ", " + formattedMonth(date) + " " + dateSuffix(today.getDate()));
// }

// LS Solution

function formattedDate(date) {
  let day = formattedDay(date);
  let month = formattedMonth(date);

  console.log("Today's date is " + day + ', ' + month + ' ' + dateSuffix(date.getDate()));
}

function formattedMonth(date) {
  let months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

  return months[date.getMonth()];
}

function formattedDay(date) {
  let daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

  return daysOfWeek[date.getDay()];
}

formattedDate(today);

// 9

console.log(today.getFullYear()); // 2023
console.log(today.getYear()); // 123

// 10

console.log(today.getTime());

// 11

let tomorrow = new Date(today.getTime());
formattedDate(tomorrow);
tomorrow.setDate(today.getDate() + 1);
formattedDate(tomorrow);

// 12

let nextWeek = new Date(today.getTime());

console.log(today === nextWeek); // Returns false as they are not the same date object.

// 13

console.log(today.toDateString() === nextWeek.toDateString()); // true

nextWeek.setDate(today.getDate() + 7);

console.log(today.toDateString() === nextWeek.toDateString()); // False

// 14

function formatTime(date) {
  return String(date.getHours()) + ":" + String(date.getMinutes());
}

console.log(formatTime(today));

// Accounting for adding 0's if single digit for hours or minutes.

function formatTime(date) {
  return addZero(date.getHours()) + ':' + addZero(date.getMinutes());
}

function addZero(value) {
  let timeComponent = String(value);
  return timeComponent.length < 2 ? '0' + timeComponent : timeComponent;
}

// Date value passed: 2013-03-01T01:10:00
console.log(formatTime(new Date(2013, 2, 1, 1, 10)));