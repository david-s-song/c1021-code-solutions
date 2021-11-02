/* exported toObject */

function toObject(keyValuePair) {
  var newObject = {};
  var property;
  var value;
  property = keyValuePair[0];
  value = keyValuePair[1];
  newObject[property] = value;
  return newObject;
}
/*
1. Create a storage that can hold entities
2. Create a storage that can hold traits
3. Create a storage that can hold descriptions
4. Place the first artifact into the storage that can hold traits
5. Place the second artifact into the storage that can hold descriptions
6. Correlate storage containing descriptions to the storage for traits
7. Place the correlation of storage containing traits and descriptions into the storage that can hold entities
8. Give the storage for entities as output
*/
