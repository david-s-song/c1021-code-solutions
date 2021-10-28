/* exported isVowel */
function isVowel(character) {
  return ['a', 'e', 'i', 'o', 'u'].indexOf(character.toLowerCase()) !== -1;

}

// Pseudo-Code
// Steps
// 1. Create a storage with english vowel letters.
// 2. Go through each of the characters of the introduced word.
// 3. Create another storage to put the corresponding lowercase characters into it
// 4. Go through each of the characters and see if any of the vowel letters
//      perfectly match any of the characters in the 2nd storage.
// 5. If there is at least one match, put true as the output. If there isn't a
//      a match, put false as the output.
