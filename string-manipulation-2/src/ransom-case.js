/* exported ransomCase */
function ransomCase(string) {
  var everyOther = string.toUpperCase().split('');
  for (var i = 0; i < everyOther.length; i += 2) {
    everyOther[i] = everyOther[i].toLowerCase();
  }
  return everyOther.join('');
}


/*

pseudocode
1. create a storage container
2. make each of the character capitalized
3. separate them into items and store them in the container
4. jump to every other item in the container
5. change every other item to be lowercased
6. merge the items together into a word.
7. put the result as output

*/
