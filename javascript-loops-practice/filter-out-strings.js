/* exported filterOutStrings */
function filterOutStrings(values) {
  var noStrings = [];
  for (var i = 0; i < values.length; i++) {
    if (values[i] !== '') {
      noStrings.push(values[i]);
    }
  }
  return noStrings;
}
