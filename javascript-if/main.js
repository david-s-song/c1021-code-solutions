/* exported isUnderFive,
            isEven,
            startsWithJ,
            isOldEnoughToDrink,
            isOldEnoughToDrive,
            isOldEnoughToDrinkAndDrive,
            categorizeAcidity,
            introduceWarnerBro
*/

function isNumberFive(number) {
  if (number < 5) {
    return true;
  } else {
    return false;
  }
}

isNumberFive(4);

function isEven(number) {
  if (number % 2 === 0) {
    return true;
  } else {
    return false;
  }
}

isEven(4);

function startsWithJ(string) {
  if (string[0] === 'J') {
    return true;
  } else {
    return false;
  }
}

startsWithJ('C#');

function isOldEnoughToDrink(name, age) {
  if (person.age >= 21) {
    return true;
  } else {
    return false;
  }
}

var person = {
  name: 'Caden',
  age: 27
};

isOldEnoughToDrink(person);

function isOldEnoughToDrive(person) {
  if (person.age >= 16) {
    return true;
  } else {
    return false;
  }
}

var liz = {
  name: 'Lisa',
  age: 30
};

isOldEnoughToDrive(liz);

function isOldEnoughToDrinkAndDrive(person) {
  if (person.age >= 0) {
    return false;
  } else {
    return false;
  }
}

var starLord = {
  name: 'Chris',
  age: 21
};

isOldEnoughToDrinkAndDrive(starLord);

function categorizeAcidity(pH) {
  if (pH === 7) {
    return 'neutral';
  } else if ((pH >= 0) && (pH < 7)) {
    return 'acid';
  } else if ((pH <= 14) && (pH > 7)) {
    return 'base';
  } else if (pH > 14) { return 'invalid pH level'; }
}

categorizeAcidity(8);

function introduceWarnerBro(name) {
  if ((name === 'wakko') && (name === 'yakko')) {
    return "We're the warner brothers!";
  } else if (name === 'dot') {
    return "I'm cute~";
  } else if ((name !== 'wakko') || (name !== 'yakko') || (name !== 'dot')) { return 'Goodnight everybody!'; }
}

var tak = {
  name: 'takko'
};

introduceWarnerBro(tak);
