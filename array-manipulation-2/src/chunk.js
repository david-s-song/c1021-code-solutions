/* exported chunk */
function chunk(array, size) {
  var outcome = []
  for (var i = 0; i < array.length; i += size) {
    var chunks = array.slice(i, i + size)
    outcome.push(chunks)
  }
  return outcome;
}

chunk(['foo', 'bar', 'baz', 'qux'], 2);
// -> [["foo", "bar"], ["baz", "qux"]]

/*

Psuedocode
1. create a storage container
2. run through the items in a given container starting from the first one
to the count of the given size
3. create another storage container
4. put the items from the beginning to the counted number into the new
storage container
5. repeat until there aren't any items left in the given container
6. put the second storage container as output

-slice method syntax slice(start, end)
-Do not mutate means not to use splice method
-Splice method changes the original array
*/
