/* exported compact */
function compact(array) {
  var notOmitted = [];
  for (var i = 0; i < array.length; i++) {
    if ([false, {}, null, -0, 0, undefined, '', NaN].includes(array[i]) === false) {
      notOmitted.push(array[i]);
    }
  }
  return notOmitted;
}

/*
1. Create a new storage container
2. Place specific items to be omitted from given entity in a storage container
3. Look through each of the items within the given entity
3. If the items within the storage container matches the items in the given entity,
  go to the next item.
4. If the items in the entity do not match the items in the storage container, put those
  unmatched items into the new storage container
5. Put the new storage container as output.
*/
