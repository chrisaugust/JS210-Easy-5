// PROBLEM
// Write a function that takes a positive integer and returns that
// number with its digits reversed.
//
// EXAMPLES
// reverseNumber(12345);    // 54321
// reverseNumber(12213);    // 31221
// reverseNumber(456);      // 654
// reverseNumber(12000);    // 21 -- Note that zeros get dropped!
// reverseNumber(1);        // 1
//
// DATA STRUCTURES
// Array
//
// ALGORITHM
// convert to string
// reverse array
// join elements into string
// convert string to number
//
// CODE
//
////using Array.prototype.reverse()
//function reverseNumber(num) {
//  let numberAsString = num.toString();
//  let digits = numberAsString.split('');
//  return parseInt(digits.reverse().join(''));
//}

// reverse array using forEach() and unshift()
function reverseNumber(num) {
  let numberAsString = num.toString();
  let digits = numberAsString.split('');
  let reversed = [];
  digits.forEach(digit => reversed.unshift(digit));
  return parseInt(reversed.join(''), 10);
}

// TESTS
console.log(reverseNumber(12345));    // 54321
console.log(reverseNumber(12213));    // 31221
console.log(reverseNumber(456));      // 654
console.log(reverseNumber(12000));    // 21 -- Note that zeros get dropped!
console.log(reverseNumber(1));        // 1

console.log(reverseNumber(12345) === 54321);
console.log(reverseNumber(12213) === 31221);
console.log(reverseNumber(456) === 654);
console.log(reverseNumber(12000) === 21);
console.log(reverseNumber(1) === 1);
