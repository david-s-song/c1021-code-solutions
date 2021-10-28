/* exported reverse */
function reverse(array) {
  var reArray = [];
  for (var i = array.length - 1; i >= 0; i--) {
    reArray.push(array[i]);
  }
  return reArray;
}
