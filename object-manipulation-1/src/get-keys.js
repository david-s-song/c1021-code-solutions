/* exported getKeys */
function getKeys(object) {
  var objectIntoArray = [];
  for (var properties in object) {
    objectIntoArray.push(properties);
  }
  return objectIntoArray;
}

/*
1. Create a storage container with spaces in numeral order
2. Look at each entity and define its traits
3. Place the traits into the storage container
4. Give the storage container as output
*/
