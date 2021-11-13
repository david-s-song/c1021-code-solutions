/* exported dropRight */
function dropRight(array, count) {
  return array.slice(0, count);

}

dropRight(['foo', 'bar', 'baz', 'qux'], 2);
// -> ["foo", "bar"]

/*

*Pseduocode
1. create a storage container
2. put the items in the first position to the position given into the storage container
3. put the container as output


*/
