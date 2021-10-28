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
