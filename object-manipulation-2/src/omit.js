/* exported omit */
function omit(source, keys) {
  var x = {};
  for (properties in source) {
    if (keys.includes(properties) === false) {
      x[properties] = source[properties];
    }
  }
  return x;
}

omit({ foo: 1, bar: 2, baz: 3 }, ['foo', 'baz']); // -> { bar: 2 }


/*

Pseudocode
1. Create a storage container to hold entities
2. Look through the all traits of the given entity
3. if the traits of the entity do not match the entities in the storage container holding them
4. put its unmatching traits and descriptions into the storage container
5. put the storage container as output

The includes() method determines whether an array includes a certain value among its entries, returning true or false as appropriate.
  */
