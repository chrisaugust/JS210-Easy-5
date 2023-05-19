// PROBLEM
// Write a function that takes a string argument and returns
// a new string containing the words from the argument in reverse
// order.
//
// EXAMPLES
// reverseSentence('');                       // ""
// reverseSentence('Hello World');            // "World Hello"
// reverseSentence('Reverse these words');    // "words these Reverse"
//
// DATA STRUCTURES
// Array
//
// ALGORITHM
// split stringArgument on whitespace; assign array to words
// initialize reversed to empty array
// for loop:
//    initialize wordIndex to words.length - 1
//    ending condition is wordIndex >= 0
//    decrement wordIndex
//      push words[wordIndex] to reversed
// join reversed with whitespace as argument; assign to reversedString
// return reversedString
//
// CODE
function reverseSentence(strArg) {
  let words = strArg.split(' ');
  let reversedWords = [];
  for (let wordIndex = words.length - 1; wordIndex >= 0; wordIndex -= 1) {
    reversedWords.push(words[wordIndex]);
  }

  let reversedString = reversedWords.join(' ');
  return reversedString;
}

// TESTS
console.log(reverseSentence('') === "");
console.log(reverseSentence('Hello World') === "World Hello");
console.log(reverseSentence('Reverse these words') === "words these Reverse");
