// PROBLEM
// Write a function that takes a non-empty string arg
// and returns the middle character or characters. If
// the string has an odd length, return exactly one
// character and if the string has an even length, return
// two characters.
//
// EXAMPLES
// centerOf('I Love JavaScript'); // "a"
// centerOf('Launch School');     // " "
// centerOf('Launch');            // "un"
// centerOf('Launchschool');      // "hs"
// centerOf('x');                 // "x"
//
// DATA STRUCTURES
// Array
//
// ALGORITHM
// check if string arg has an odd or even length
// return char at index stringArg.length / 2
//
// CODE

function centerOf(str) {
  // string argument has odd length;
  if (str.length % 2 !== 0) {
    return str[(str.length - 1) / 2];
  } else {
    let centerIdx = (str.length / 2) - 1;
    return str.slice(centerIdx, centerIdx + 2);
  }
}

// TESTS
console.log(centerOf('aba')); // b

console.log(centerOf('I Love JavaScript') === "a");
console.log(centerOf('Launch School') === " ");
console.log(centerOf('Launch') === "un");
console.log(centerOf('Launchschool') === "hs");
console.log(centerOf('x') === "x");
