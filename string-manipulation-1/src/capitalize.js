/* exported capitalize */
function capitalize(word) {
  var lowerCase = word.toLowerCase(word);
  return word.charAt(0).toUpperCase() + lowerCase.slice(1);
}

// Pseudo-Code
// Steps
// 1. Create an empty storage space in order to fill in with values
// 2. Go through each of the characters of the introduced word, and
// if character is lowercased, transfer the lowered cased letter into the empty storage.
// 3. If the character is uppercased, replace uppercased letter with its corresponding
//        lowercased letter. Then transfer the lowercased letter into the storage.
// 4. Look at each character of the word that is in the storage which are all lowercased.
// 5. Identify, separate, and takeaway the first character from the rest of the characters in the storage,
//        and create another storage space and put the uppercased letter of the 1st
//        character into the 2nd storage.
// 6. Lastly, put the 2nd storage and the 1st storage together as output.
