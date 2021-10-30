/* exported initial */
function initial(array) {
  var removingLastItem = [];
  for (var i = 0; i < array.length; i++) {
    if (i !== array.length - 1) {
      removingLastItem.push(array[i]);
    }
  }
  return removingLastItem;
}

/*
1. create a new container
2. Check each items in the container
3. if the item in last position in the container does not match the first item
4.  in the new container
5. put this container into the output
*/
