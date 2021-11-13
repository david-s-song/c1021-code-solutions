/* exported take */
function take(array, count) {
  return array.slice(0, count);

}

take(['foo', 'bar', 'baz', 'qux'], 2);
// -> ["foo", "bar"]

/*

Psuedocode
1. create a storage container
2. put the items into the storage until the limit of the given index position is reached
3, put the storage container as output

*/
