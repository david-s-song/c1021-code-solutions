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
