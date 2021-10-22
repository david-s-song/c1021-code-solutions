/* exported oddOrEven */

function oddOrEven(numbers) {
  for (var i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 === 0) {
      numbers[i] = 'even';
    } else {
      numbers[i] = 'odd';
    }
  } return numbers;
}
