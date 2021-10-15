/* exported filterOutNulls */
function filterOutNulls(values) {
  var nulls = [];
  for (var i = 0; i < values.length; i++) {
    values.filter(null);
  }
  return nulls;
}

// use the .filter method?
