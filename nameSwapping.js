// PROBLEM
// Write a function that takes a string argument consisting of
// a first name, a space, and a last name, and returns a new string
// consisting of the last name, a comma, a space, and the first name.
//
// EXAMPLES
// swapName('Joe Roberts');    // "Roberts, Joe"
//
// DATA STRUCTURES
// Array
//
// ALGORITHM
// split string on space
// assign first and last name variables with array destructuring
// return new string formatted per specification
//
// CODE

function swapName(firstAndLastName) {
  let firstName, lastName;
  [firstName, lastName] = firstAndLastName.split(' ');
  return `${lastName}, ${firstName}`;
}

// TESTS
console.log(swapName('Joe Roberts'));    // "Roberts, Joe"
console.log(swapName('Chris Danielson')); // "Danielson, Chris"
