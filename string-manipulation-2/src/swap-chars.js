/* exported swapChars */
function swapChars(firstIndex, secondIndex, string) {
  return string.substring(0, firstIndex)
    + string[secondIndex] + string.substring(firstIndex + 1, secondIndex)
    + string[firstIndex] + string.substring(secondIndex + 1);
}



  // -> "FearningLuze"
/*

Pseudocode
1. create a storage container
2. starting from the beginning, go to the given first character position, and put all the characters in between into the storage container
3. go to the specific character of the second position, and put it into the container
4. go to the position right after the given first position, and put characters up to the given second position into the storage container
5. go to the given first position and put this specific character into the container
6. go to the position right after the given second position and put the rest of the characters into the storage container




Notes:
substring (start, indexEnd)
substr (start, length)
*/
