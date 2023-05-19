// PROBLEM
// Write a function that takes a string argument containing one
// or more words and returns a new string containing the words from
// the string argument with five-or-more letter words in reverse
// order. The string argument will consist of only letters and spaces.
// Words will be separated by a single space.
//
// EXAMPLES
// reverseWords('Professional');             // "lanoisseforP"
// reverseWords('Walk around the block');    // "Walk dnuora the kcolb"
// reverseWords('Launch School');            // "hcnuaL loohcS"
//
// DATA STRUCTURES
// Array
//
// ALGORITHM
// split strArg on whitespace; assign to words
// iterate over words
// if word.length > 5
//    reverse word and append to returnStr
// if word.length < 5
//    append word to returnStr
// return returnStr
//
// CODE
function reverseWords(strArg) {
  let returnWords = [];
  let words = strArg.split(' ');
  words.forEach(word => {
    if (word.length >= 5) {
      returnWords.push(reverseString(word));
    } else {
      returnWords.push(word);
    }
  });
  return returnWords.join(' ');
}

function reverseString(str) {
  let chars = str.split('');
  let reversedChars = chars.reverse();
  return reversedChars.join('');
}

// TESTS
console.log(reverseWords('Professional') === "lanoisseforP");
console.log(reverseWords('Walk around the block') === "Walk dnuora the kcolb");
console.log(reverseWords('Launch School') === "hcnuaL loohcS");
