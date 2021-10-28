/* exported getWords */
function getWords(string) {
  if (string === '') {
    return [];
  } else {
    return string.split(' ');
  }
}

// Pseudo-Code
// Steps
// 1. Create a new storage place.
// 2. Compare the introduced word to an empty thread
// 3. If the introduced word and the empty thread are a match, put empty storage as output.
// 4. Create another storage place.
// 5. If introduced words are not a match to the empty thread, go through the
//      of the introduced word until there is a character of space.
// 6. Upon coming across a character called space, group the previously examined characters
//      and put it into its own thread within the storage.
// 7. Upon grouping the thread, go on to the next set of characters until you reach another space
// 8. Group the set of characters and put it into its own thread in the storage
//      next to the previous group.
// 9. Give the group of threads as the output.
