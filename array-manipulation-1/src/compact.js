/* exported compact */
// brainstorm
// 1. create a new container - in order to add the "specific" items
// 2. use the for loop to check for each item in the array
// 3. how do i identify specific items in the array ?
//   [false, {}, NaN, -0, 0, undefined, '',]
// 4. use indexOf method(which returns the first element that matches and all occurences)

// function compact(array) {
//   var notOmitted = [];
//   var omitItems = [false, {}, NaN, -0, 0, undefined, ''];
//   for (var i = 0; i < array.length; i++) {
//     if (array[i] !== omitItems) {
//       notOmitted.push(array[i]);
//     }
//   } return notOmitted;
// }

function compact(array) {
  var notOmitted = [];
  for (var i = 0; i < array.length; i++) {
    if ([false, {}, null, -0, 0, undefined, ''].indexOf(array[i]) === -1 && [NaN].indexOf(array[i]) === 1) {
      notOmitted.push(array[i]);
    }
  }
  return notOmitted;
}
