/* exported pick */
function pick(source, keys) {
  var outcome = {};
  for (properties in source) {
    if (keys.includes(properties)) {
      outcome[properties] = source[properties];
    }
  }
  return outcome;
}

pick({ foo: 1, bar: 2, baz: 3 }, ['foo', 'baz']); // -> { foo: 1, baz: 3 }

/*

PseudoCode
1. Create a storage container to hold entities
2. Look through the all traits of the given entity
3. if the traits of the entity matches the entities in the storage container holding them
4. put its traits and descriptions into the storage container
5. put the storage container as output


https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...in
  */
