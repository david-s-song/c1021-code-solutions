/* exported defaults */
function defaults(target, source) {
  for (prop in source) {
    if (source.hasOwnProperty(prop) !== target.hasOwnProperty(prop)){
      target[prop] = source[prop];
    }
  }
}

/*
Psuedocode
1. run through the given entity (source) and identify each of its traits
2. if the traits of the entity (source) does not match the traits of the second given entity (target)
3. put the traits of the entity (source) into the second given entity (target)



notes:
1. hasOwnProperty() method returns a boolean indicating
whether the object has the specified property as its own property (as opposed to inheriting it).

*/
