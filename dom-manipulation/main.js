var storageNumberOfClicks = 0;
var gettingHot = document.querySelector('.hot-button');
var countingClicks = document.querySelector('.click-count');

function changeCount() {
  storageNumberOfClicks++;
  countingClicks.textContent = 'Clicks: ' + storageNumberOfClicks;

  if (storageNumberOfClicks < 4) {
    gettingHot.className = 'hot-button cold';
  } else if (storageNumberOfClicks < 7) {
    gettingHot.className = 'hot-button cool';
  } else if (storageNumberOfClicks < 10) {
    gettingHot.className = 'hot-button tepid';
  } else if (storageNumberOfClicks < 13) {
    gettingHot.className = 'hot-button warm';
  } else if (storageNumberOfClicks < 16) {
    gettingHot.className = 'hot-button hot';
  } else if (storageNumberOfClicks <= 17) {
    gettingHot.className = 'hot-button nuclear';
  }
}

gettingHot.addEventListener('click', changeCount);
