document.addEventListener('keydown', typing);

function typing(event) {
  var $currentLetter = document.querySelector('.current-letter');
  if (!$currentLetter.nextElementSibling) {
    reset();
    return;
  }
  if (event.key === $currentLetter.textContent) {
    $currentLetter.className = 'letter-correct';
    $currentLetter.nextElementSibling.className = 'current-letter';
  } else {
    $currentLetter.className = 'letter-wrong current-letter';
  }
}

function reset() {
  var $allSpans = document.querySelectorAll('#sentence span');
  for (var i = 0; i < $allSpans.length; i++) {
    if (i === 0) {
      $allSpans[i].className = 'current-letter';
    } else {
      $allSpans[i].className = '';
    }
  }
}
