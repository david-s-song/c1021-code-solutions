/* exported initial */
function initial(array) {
  var removingLastItem = [];
  for (var i = 0; i < array.length - 1; i++) {
    removingLastItem.push(array[i]);
  }
  return removingLastItem;
}

/*
1. create a new container
2. Check each items in the container until the second to the last position.
3. Place all items except the last item in the last position into the new container
5. Put this container into the output
*/
