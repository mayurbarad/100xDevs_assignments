/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {
  if (str1.length !== str2.length) {
    return false;
  }

  const clean = (str) => {
    return str.split(" ").join("").toLowerCase();
  };
  str1 = clean(str1);
  str2 = clean(str2);

  const mp = {};
  for (let i = 0; i < str1.length; i++) {
    if (mp[str1[i]]) {
      mp[str1[i]] += 1;
    } else {
      mp[str1[i]] = 1;
    }
  }
  for (let i = 0; i < str2.length; i++) {
    if (!mp[str2[i]]) {
      return false;
    } else {
      mp[str2[i]] -= 1;
    }
  }
  return true;
}

module.exports = isAnagram;
