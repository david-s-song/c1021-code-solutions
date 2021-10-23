
var $clicked = false;
var $bulbOff = document.querySelector('.yellow-circle-button');
var $container = document.querySelector('.container');

function change(event) {
  if ($clicked === true) {
    $bulbOff.className = 'yellow-circle-button';
    $container.className = 'container';
  } else {
    $bulbOff.className = 'black-circle-button';
    $container.className = 'container-black';
  }
  $clicked = !$clicked;
}

$bulbOff.addEventListener('click', change);
