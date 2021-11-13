/* exported truncate */
function truncate(length, string) {
  var x = string.substring(0, length);
  return x + "...";
}


/*

pseudocode
1. create a storage container
2. count the number of characters in a given sentence
3. stop the count at the number of characters wanted
4. place the counted characters into the storage container
5. place an ellipsis into the storage container after placing characters.
6. give the storage container as output

*/
