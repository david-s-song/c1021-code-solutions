// var sentenceElement = document.querySelectorAll('#sentence');
// var index = 0; // in order to keep use index as a variable

// // steps
// // identify each letter of the string.. use for loop

// document.addEventListener('keydown', function (event) {
//   for (var i = 0; i < sentenceElement.length; i++) {
//     if (sentenceElement[i] === sentenceElement[index]) {
//       event.target.classList.remove('each-letter');
//       event.target.classList.add('each-letter-right');
//       index++;
//     } else if (sentenceElement[i] !== sentenceElement[index]) {
//       event.target.classList.remove('each-letter');
//       event.target.classList.add('each-letter-wrong');
//       // keep it at the same index.. how?
//       return;
//     }
//   }
// });

var parentSentenceEl = document.querySelector('#sentence');
// var sentenceString = 'grumpy wizards make toxic brew';
var index = 0;

// for (var i = 0; i < sentenceString.length; i++) {
//   var span = document.createElement('span');
//   var text = document.createTextNode(sentenceString[i]);
//   span.appendChild(text);
//   span.classList.add('each-letter');
//   if (i === 0) span.classList.add('each-letter-current');
//   sentenceEl.appendChild(span);
// }

document.addEventListener('keydown', function (event) {
  var currentEl = parentSentenceEl.querySelectorAll('.each-letter')[index];
  var nextEl = parentSentenceEl.querySelectorAll('.each-letter')[index + 1];
  if (!currentEl) {
    return;
  }
  if (event.key === parentSentenceEl[index]) {
    currentEl.classList.remove('each-letter-wrong');
    currentEl.classList.add('each-letter-right');
    currentEl.classList.remove('each-letter-current');
    index++;
    if (nextEl) nextEl.classList.add('each-letter-current');
  } else {
    currentEl.classList.add('each-letter-wrong');
  }
});
