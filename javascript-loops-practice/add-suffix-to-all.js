/* exported addSuffixToAll */

function addSuffixToAll(words, suffix) {
  var arrayWithSuffix = [];
  for (var i = 0; i < words.length; i++) {
    arrayWithSuffix.push(words[i] + suffix);
  }
  return arrayWithSuffix;
}
