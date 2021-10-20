/* exported capitalize */
function capitalize(word) {
  var lowerCase = word.toLowerCase(word);
  return word.charAt(0).toUpperCase() + lowerCase.slice(1);
}
