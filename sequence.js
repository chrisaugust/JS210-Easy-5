// PROBLEM
// Create a punction that takes two integers as arguments, the first
// being a count, and the second the starting number of the sequence
// that the function creates. The function returns an array containing
// the number of elements specified by the count argument. The value of
// each element should be a multiple of the starting number.
//
// Assume that the count argument will always be an integer greater than
// or equal to zero. The starting number can be any integer. If the count
// argument is 0, the function should return an empty array.
//
// EXAMPLES
// sequence(5, 1);          // [1, 2, 3, 4, 5]
// sequence(4, -7);         // [-7, -14, -21, -28]
// sequence(3, 0);          // [0, 0, 0]
// sequence(0, 1000000);    // []
//
// DATA STRUCTURES
// Array
//
// ALGORITHM
// initialize empty array (returnArray)
//
// for loop with multiplier initialized to 1, stopping when
// multiplier <= count, incrementing by 1 each iteration
//   for each iteration, push startingInt * multiplier to returnArray
//
// return returnArray
//
// CODE
function sequence(count, startingInt) {
  let returnArray = [];
  if (count === 0) {
    return returnArray;
  } else {
    for (let multiplier = 1; multiplier <= count; multiplier += 1) {
      returnArray.push(multiplier * startingInt);
    }
  }

  return returnArray;
}
// TESTS
console.log(sequence(5, 1));          // [1, 2, 3, 4, 5]
console.log(sequence(4, -7));         // [-7, -14, -21, -28]
console.log(sequence(3, 0));          // [0, 0, 0]
console.log(sequence(0, 1000000));    // []
