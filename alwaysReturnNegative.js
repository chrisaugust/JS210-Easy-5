// PROBLEM
// Write a function that takes a number as an argument. If the
// argument is a positive number, return the negative of that number.
// If the argument is a negative number, return it as-is.
//
// EXAMPLES
// negative(5);     // -5
// negative(-3);    // -3
// negative(0);     // -0
//
// DATA STRUCTURES
//
// ALGORITHM
// check if argument is positive/negative by comparing with 0
// if positive, return argument multiplied by -1
// if negative, return argument without modification
//
// CODE

function negative(num) {
  if (num > 0) {
    return (num * -1);
  } else {
    return num;
  }
}

// TESTS
console.log(negative(5) === -5);
console.log(negative(-3) === -3);
console.log(negative(0) === -0);
