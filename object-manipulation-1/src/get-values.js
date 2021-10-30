/* exported getValues */
function getValues(object) {
  var propOfArray = [];
  for (var property in object) {
    propOfArray.push(object[property]);
  }
  return propOfArray;
}

/*
1. Create a storage container with spaces in numeral order
2. Look at each entity and define its traits
3. Correlate each description to its trait
4. Place each description into the storage container
4. Give the storage container as output
*/
