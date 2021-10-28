/* exported tail */
function tail(array) {
  var tailEl = [];
  for (var i = 0; i < array.length; i++) {
    if (i !== 0) {
      tailEl.push(array[i]);
    }
  }
  return tailEl;
}

/*
1. Create a new container
2. Check each items in the container
3. If each item is not in the first position of the container in sequence,
4. add the next item(s) in the new container
5. Put this container as output
*/
