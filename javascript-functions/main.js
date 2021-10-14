function convertMinutesToSeconds(minutes) {
  var numberOfSeconds = minutes * 60;
  return numberOfSeconds;
}
console.log('value of convertedMinutesToSecondsResult:', convertMinutesToSeconds(5));

function greet(name) {
  var greeting = 'Hey, ' + name;
  return greeting;
}
console.log('value of greetResult:', greet('David'));

function getArea(width, height) {
  var area = width * height;
  return area;
}
console.log('value of getAreaResult:', getArea(17, 42));

function getFirstName(person) {
  var firstName = person.firstName;
  return firstName;
}
console.log('value of getFirstNameResult:', getFirstName({ firstName: 'Lelouche', lastName: 'Lamperouge' }));

function getLastElement(array) {
  var lastItem = array.length - 1;
  var lastElement = array[lastItem];
  return lastElement;
}
console.log('value of getLastElementResult:', getLastElement(['propane', 'and', 'propane', 'accessories']));
