/* exported getLastChar */
function getLastChar(string) {
  return string.charAt(string.length - 1);
}

// Pseudo-Code
// Steps
// 1. Look at each character of the word in order that is introduced.
// 2. When there aren't any more characters, go back to the most recent examined character
// 3. Put the most recent examined character into the output
