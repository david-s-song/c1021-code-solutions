/* exported invert */
function invert(source) {
  var x = {};
  for (properties in source) {
    x[source[properties]] = properties;
  }
  return x;
}



invert({ age: NaN, occupation: 'programmer', language: 'JavaScript' });
// -> { NaN: 'age', programmer: 'occupation', JavaScript: 'language'

/*
Psuedocode
1. create a container to hold entities
2. create an another container to hold traits
3. run through the given entity and put traits into the second container (properties)
4. Put these traits as descriptions in the first container
5. run through the container and grab descriptions of the traits and place them as traits in the first container
6. put the first container as output




The for in loop iterates over a person object
Each iteration returns a key (x)
The key is used to access the value of the key
The value of the key is person[x]

*/
