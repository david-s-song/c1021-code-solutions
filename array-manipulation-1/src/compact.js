/* exported compact */
// function compact(array) {
//   var newArray = [];
//   var omits = [false, {}, NaN, -0, undefined, ''];
//   for (var i = 0; i < array.length; i++) {
//     for (var j = 0; j < omits.length; j++) {
//     if (array[i] !== omits[j]) {
//       newArray.push(array[i]);
//     }
//   }
//   return newArray;
// }

// function compact(array) {
//   var newArray = [];
//   for (var i = 0; i < array.length; i++) {
//     newArray = [false, {}, NaN, -0, undefined, ''].indexOf(array[i] !== -1;
//   } return newArray;
// }

// omits false from arrays
// omits null from arrays
// omits NaN from arrays
// omits 0 and -0 from arrays
// omits undefined from arrays
// omits '' empy strings from arrays
// maintains the order of truthy elements
