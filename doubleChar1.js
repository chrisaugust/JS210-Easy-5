// PROBLEM
// Write a function that takes a string, doubles every character
// in the string, and returns a new string.
//
// EXAMPLES
// repeater('Hello');        // "HHeelllloo"
// repeater('Good job!');    // "GGoooodd  jjoobb!!"
// repeater('');             // ""
// 
// DATA STRUCTURES
// String -> Array -> String
//
// ALGORITHM
// - split into array of single characters
// - use #map to double the characters for each element of array
// - join the array elements into a single string and return it
//
// CODE

function repeater(str) {
  let chars = str.split('');
  let doubled = chars.map((char) => `${char}${char}`);
  return doubled.join('');
}

// TESTS
console.log(repeater('Hello') === "HHeelllloo");
console.log(repeater('Good job!') === "GGoooodd  jjoobb!!");
console.log(repeater('') === "");
