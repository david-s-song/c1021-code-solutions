/* exported addSuffixToAll */
function addSuffixToAll(words, suffix) {
  var suffixToAll = '';
  for (var i = 0; i < words.length; i++) {
    suffix.push(words[i] + 'ity');
  } return suffixToAll;

}
