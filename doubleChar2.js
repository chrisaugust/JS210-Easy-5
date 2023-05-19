// PROBLEM
// Write a function that takes a string, doubles every consonant
// character, and returns the result as a new string. Do not double
// vowels, digits, punctuation, or whitespace.
//
// EXAMPLES
// doubleConsonants('String');          // "SSttrrinngg"
// doubleConsonants('Hello-World!');    // "HHellllo-WWorrlldd!"
// doubleConsonants('July 4th');        // "JJullyy 4tthh"
// doubleConsonants('');                // ""
//
// DATA STRUCTURES
// Array
//
// ALGORITHM
// split input string into an array of characters
// initialize 'consonants' variable to array of consonants
// map over the characters, returning doubled consonants or
//    single non-consonants characters based on whether char
//    is included in the 'consonants' array
// join the results of map into a string, and return it
//
// CODE
function doubleConsonants(str) {
  let charArray = str.split('');
  const consonants = ['B', 'b', 'C', 'c', 'D', 'd',
    'F', 'f', 'G', 'g', 'H', 'h', 'J', 'j', 'K', 'k',
    'L', 'l', 'M', 'm', 'N', 'n', 'P', 'p', 'Q', 'q',
    'R', 'r', 'S', 's', 'T', 't', 'V', 'v', 'W', 'w',
    'X', 'x', 'Y', 'y', 'Z', 'z'];
  let result;
  result = charArray.map( char => {
    if (consonants.includes(char)) {
      return char + char;
    } else {
      return char;
    }
  });
  return result.join('');
}
// TESTS
console.log(doubleConsonants('String') === "SSttrrinngg");
console.log(doubleConsonants('Hello-World!') === "HHellllo-WWorrlldd!");
console.log(doubleConsonants('July 4th') === "JJullyy 4tthh");
console.log(doubleConsonants('') === "");
