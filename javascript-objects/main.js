var object = {};
object.firstName = 'David';
object.lastName = 'Song';
object.age = 35;
var student = object;

var fullName = object.firstName + ' ' + object.lastName;
console.log('value of fullName:', fullName);

student.livesInIrvine = true;
student.previousOccupation = 'pastor';
console.log('value of student.livesInIrvine:', student.livesInIrvine);
console.log('values of student.previousOccupation:', student.previousOccupation);
console.log('value of student:', student);

var vehicle = {};
vehicle.make = 'Acura';
vehicle.model = 'Integra';
vehicle.year = 2000;

vehicle['color'] = 'white';
vehicle['isConvertible'] = true;
console.log("value of vehicle['color']:", vehicle['color']);
console.log("value of vehcile['isConvertible']:", vehicle['isConvertible']);
console.log('value of vehicle:', vehicle);

var pet = {};
pet.name = 'chase';
pet.type = 'mixed spaniel';
delete pet.name;
delete pet.type;
console.log('value of pet', pet);
