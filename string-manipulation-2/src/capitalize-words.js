/* exported capitalizeWords */
function capitalizeWords(string) {
  var x = string.toLowerCase().split(' ');
  for (var i = 0; i < x.length; i++) {
    x[i] = x[i].charAt(0).toUpperCase() + x[i].slice(1);
  }
  return x.join(' ');
}


/*

pseudocode
1. create a storage container
2. run through each character in the sentence and lowercase all
3. upon encountering 'space' characters, stop, and group past characters together as an item, and put the item into the storage
4. repeat this process until the end of the sentence
5. separate the first character in the item from the rest of the characters and capitalize the first character
6. place the separated characters within the item together in the storage
7. put the storage container as output.

*/
