var onOff = true;
var yellowButton = document.querySelector('.yellow-circle-button');

function isItOn() {
  if (onOff === true) {
    yellowButton.className = 'yellow-circle-button';
  } else if (onOff !== true) {
    yellowButton.className = 'black-circle-button';
  }
}

yellowButton.addEventlistener('click', isItOn);

/*
var yesOrNo = true;
var lightOn = document.querySelector('.yellow-circle-button');
var lightOff = document.querySelectorAll('row');

function onOff() {
  if (yesOrNo === lightOn) {
    lightOn.className = 'yellow-circle-button';
  } else if (yesOrNo !== lightOn) {
    lightOff.className = 'black-circle-button';
  }
}

lightOn.addEventListener('click', onOff);

function toYellow() {
  if (yesOrNo === true) {
    lightOff.className = 'black-circle-button';
  } else if (yesOrNo !== true) {
    lightOff.className = 'yellow-circle-button';
  }
}

lightOn.addEventListener('click', toBlack);
lightOff.addEventListener('click', toYellow);
*/
