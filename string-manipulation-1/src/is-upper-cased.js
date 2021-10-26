/* exported isUpperCased */
function isUpperCased(word) {
  return word === word.toUpperCase();
}

// Pseudo-Code
// Steps
// 1. Create a new unadultered thread for output.
// 2. Look at each character of the word that is introduced in order, and
//      make its corresponding letters into lowercased letters and put it
//      in the thread.
// 3. Now compare each of the characters in the newly filled thread matches
//      the firstly introduced one.
// 4. If all characters match perfectly, put true as output. If at least one doesn't,
//      put false as output.
