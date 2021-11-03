function ExampleConstructor() {}
console.log(ExampleConstructor.prototype);
console.log('typeof ExampleConstructor:', typeof ExampleConstructor);

var aVariable = new ExampleConstructor();
console.log('aVariable:', aVariable);

var newVariable = aVariable instanceof ExampleConstructor;
console.log('newVariable:', newVariable);

// var aFunction = new Function();
// console.log('value of aFunction:', aFunction);
// console.log('typeof aFunction', typeof aFunction);
