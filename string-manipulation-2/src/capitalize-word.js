/* exported capitalizeWord */
function capitalizeWord(word) {
  var x = word[0].toUpperCase() + word.slice(1).toLowerCase();
  if (x === 'Javascript') {
    return 'JavaScript';
  } else {
    return x;
  }
}

/*

pseudocode
1. create a storage container
2. make the first character capitalized and put it in the container
3. separate the rest of the characters from the second character
4. make the rest of characters lowercased and add them to the container
5. if the storage container matches specifically to word "Javascript"
6. change that specific word to "JavaScript" (with capital S)
7. if not, put the storage container as output

*/
