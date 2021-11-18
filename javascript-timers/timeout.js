
var $header = document.querySelector('h1');
document.addEventListener('load', changeHeader);

function changeHeader(event) {
  $header.textContent = 'Hello, There';
}

setTimeout(changeHeader, 2.0 * 1000);
