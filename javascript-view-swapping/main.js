var $containerTab = document.querySelector('.tab-container');
var $tabElements = document.querySelectorAll('.tab');
var $viewElements = document.querySelectorAll('.view');

$containerTab.addEventListener('click', eventHandler);

function eventHandler(event) {
  if (event.target.matches('.tab')) {
    for (var i = 0; i < $tabElements.length; i++) {
      if (event.target === $tabElements[i]) {
        $tabElements[i].className = 'tab active';
      } else {
        $tabElements[i].className = 'tab';
      }
    }
    var $dataViewClick = event.target.getAttribute('data-view');
    for (var c = 0; c < $viewElements.length; c++) {
      if ($dataViewClick === $viewElements[c].getAttribute('data-view')) {
        $viewElements[c].className = 'view';
      } else {
        $viewElements[c].className = 'view hidden';
      }
    }
  }
}
