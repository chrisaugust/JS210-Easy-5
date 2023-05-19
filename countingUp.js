// PROBLEM
// Write a function that takes an integer argument and returns an
// array containing all integers between 1 and the argument (inclusive),
// in ascending order.
//
// EXAMPLES
// sequence(5);    // [1, 2, 3, 4, 5]
// sequence(3);    // [1, 2, 3]
// sequence(1);    // [1]
//
// DATA STRUCTURES
// Array
//
// ALGORITHM
// initialize empty array
// use a for loop, initialize i to 1, loop runs until i <= argument,
//   i is incremented each loop;
//
//   in each iteration of loop, push i to array
// return array
//
// CODE

function sequence(num) {
  let sequenceArray = [];
  for (let count = 1; count <= num; count++) {
    sequenceArray.push(count);
  }
  return sequenceArray;
}

// TESTS
console.log(sequence(5));    // [1, 2, 3, 4, 5]
console.log(sequence(3));    // [1, 2, 3]
console.log(sequence(1));    // [1]
