/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
  str = str.toLowerCase();
  let i = 0;
  let j = str.length - 1;
  while (i < j) {
    while (i < j && (str[i] === " " || !("a" <= str[i] && str[i] <= "z"))) {
      i++;
    }
    while (i < j && (str[j] === " " || !("a" <= str[j] && str[j] <= "z"))) {
      j--;
    }
    if (str[i] !== str[j]) {
      return false;
    }
    i++;
    j--;
  }
  return true;
}

module.exports = isPalindrome;
