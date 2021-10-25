/* exported capitalize */

function capitalize(word) {
  var capital = word.toCharAt[0];
  return capital;
}

/*
Pseudo-Code
1. create storage space for output (empty string)
2. check each character if it is uppercased or lowercased, starting
from the first character of the word
  3. if the first character is lowercased, change it to uppercase character and store
  it in the storage space.
  4. if the first character is uppercased, take the uppercase character and move it
  into the storage space.
  5. if the second character is lowercased, take the lowercase character
  and move it into the storage space.
  6. if the second character is uppercased, change it to lowercase character
  and store it into the storage space.
  7. repeat the steps for every new word.
  8. finally give back the output
*/
