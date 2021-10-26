/* exported reverseWord */
function reverseWord(word) {
  var reverse = '';
  for (var i = word.length - 1; i >= 0; i--) {
    reverse += word[i];
  }
  return reverse;
}

// Pseudo-Code
// Steps
// 1. Create a storage place for output.
// 2. Create another storage place
// 3. Examine each of the characters of the introduced word starting from the
//        last character of the introduced word.
// 4. Put the last character of the word into the storage place.
// 5. Go onto the next character from the end, and repeat the same until there is no more.
// 6. Put the storage place as output with its characters in its order.
