/* exported pick */
function pick(source, keys) {
  var x = {};
  for (properties of keys) {
    var y = source[properties];
    if (y !== undefined)
      x[properties] = y;
  }
  return x;
}



// pick({ qux: 4, corge: 5 }, ['bar', 'grault'])    // -> {}

/*

PseudoCode
1. Create a storage container to hold entities (x)
2. Look through the given items in the storage container (for of for arrays)
4. put the items as traits of the given entity (source), and put this into a new container
5. if the new container (y) does not match undefined
6. put the traits in the given entity into the storage container (x) to hold entities
that match traits in the new container (y)
7. put the storage container as output

  */
