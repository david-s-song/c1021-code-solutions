/* exported toObject */

function toObject(keyValuePair) {
  var newObject = {};
  var property;
  var value;
  for (var i = 0; i < keyValuePair.length; i++) {
    property = keyValuePair[0];
    value = keyValuePair[1];
    newObject[property] = value;
  } return newObject;
}

/*
1. Create a storage that can hold entities
2. Create a storage that can hold traits
3. Create a storage that can hold descriptions
4. Look at each traits and descriptions of a given entity in order
5. Place the first artifact into the storage that can hold traits
6. Place the second artifact into the storage that can hold descriptions
7. Correlate storage containing descriptions to the storage for traits
8. Place the correlation of storage containing traits and descriptions into the storage that can hold entities
9. Give the storage for entities as output
*/
