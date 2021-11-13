/* exported includes */
function includes(array, value) {
  for (var i = 0; i < array.length; i++) {
    if (array[i] === value) {
      return true;
    }
  } return false;
}

includes([1, 2, 3, 4, 5], 2);

/*

Psuedocode
1. look through the given container with items
2. and if any of the items match the given items return it to be true
3. and if any of the items do not match the given items, return it to be false

*/
