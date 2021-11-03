/* exported tail */
function tail(array) {
  var tailEl = [];
  for (var i = 1; i < array.length; i++) {
    tailEl.push(array[i]);
  }
  return tailEl;
}

/*
1. Create a new container
2. Check each items in the container starting from the second position
3. add the item(s) into the new container
4. Put this container as output
*/
