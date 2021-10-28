/* exported reverse */
function reverse(array) {
  var reArray = [];
  for (var i = array.length - 1; i >= 0; i--) {
    reArray.push(array[i]);
  }
  return reArray;
}

/*
1. create a new container
2. check through each item, starting from the last position of the item to the first position
3. place the items from the last position into the new container
4. put this container as output
*/
