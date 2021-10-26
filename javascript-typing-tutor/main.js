var sentenceEl = document.querySelector('#sentence');
var sentenceString = 'grumpy wizards make toxic brew';
var index = 0;

for (var i = 0; i < sentenceString.length; i++) {
  var span = document.createElement('span');
  var text = document.createTextNode(sentenceString[i]);
  span.appendChild(text);
  span.classList.add('each-letter');
  if (i === 0) span.classList.add('each-letter-current');
  sentenceEl.appendChild(span);
}

document.addEventListener('keydown', function (e) {
  var currentEl = sentenceEl.querySelectorAll('.each-letter')[index];
  var nextEl = sentenceEl.querySelectorAll('.each-letter')[index + 1];
  if (!currentEl) return;

  if (e.key === sentenceString[index]) {
    currentEl.classList.remove('each-letter-wrong');
    currentEl.classList.add('each-letter-right');
    currentEl.classList.remove('each-letter-current');
    index++;
    if (nextEl) nextEl.classList.add('each-letter-current');
  } else {
    currentEl.classList.add('each-letter-wrong');
  }
});
