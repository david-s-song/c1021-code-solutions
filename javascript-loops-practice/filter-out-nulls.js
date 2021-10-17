/* exported filterOutNulls */
function filterOutNulls(values) {
  var minusNulls = [];
  for (var i = 0; i < values.length; i++) {
    if (values[i] !== null) {
      minusNulls.push(values[i]);
    }
  }
  return minusNulls;
}
