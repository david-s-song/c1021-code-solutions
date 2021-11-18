
var $heading = document.querySelector('h1');
var $numbers = 4;

function countdown(event) {
  $numbers--;
  if ($numbers > 0) {
    $heading.textContent = $numbers;
  } else {
    $heading.textContent = '~Earth Beeeelooowww Us~';
    clearInterval();
  }
}

setInterval(countdown, 2000);
