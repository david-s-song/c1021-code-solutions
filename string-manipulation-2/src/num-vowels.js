/* exported numVowels */

function numVowels(string) {
  var count = 0;
  var vowels = 'aeiouAEIOU';
  var lowerCased = string.toLowerCase();
  for (var i = 0; i < lowerCased.length; i++) {
    if (vowels.indexOf(string[i]) !== -1) {
      count = count + 1;
    }
  } return count;
}


/*

pseudocode
1. create a storage to input numbers
2. create a storage with all vowel characters
3. create a storage and input lowercased characters
4. run through the storage with lowercased characters
5. check if the storage matches any of the vowel characters
6. if vowel characters match, add a count to the storage of numbers for each match.
7. place the storage with counts as output

*/
