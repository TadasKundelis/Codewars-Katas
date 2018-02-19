/* 

Longest alphabetical substring

link : https://www.codewars.com/kata/longest-alphabetical-substring/train/javascript

Problem : 

Find the longest substring in alphabetical order.

Eg: the longest alphabetical substring in asdfaaaabbbbcttavvfffffdf is aaaabbbbctt.

There are tests with strings up to 10000 characters long so your code will need to be efficient.

*/

// Solution

function longest(str) {
  let longestString = "";
  let currentString = "";
  let previousChar = 'a';
  for (let char of str) {
    if (char >= previousChar) {
      currentString += char;
    } else {
      longestString = currentString.length > longestString.length ? currentString : longestString;
      currentString = char;
    }
    previousChar = char;
  }
  longestString = currentString.length > longestString.length ? currentString : longestString;
  return longestString;
}

