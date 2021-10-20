
var bulbOff = document.querySelector('.yellow-circle-button');
var onOff = false;

function isItOn() {
  if (onOff) {
    bulbOff.className = 'black-circle-button';
    onOff = false;
  } else {
    bulbOff.className = 'yellow-circle-button';
    onOff = true;
  }
}

bulbOff.addEventlistener('click', isItOn);
