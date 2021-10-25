var $popUpContainer = document.querySelector('.pop-up-container-none');
var $columns = document.querySelector('.column-white');
var $openModalButton = document.querySelector('.open-modal-button');
var $surveyButton = document.querySelector('.survey-button');
var $clicked = false;

function modal(event) {
  if ($clicked === true) {
    $popUpContainer.className = 'pop-up-container';
    $columns.className = 'column-gray';
    $openModalButton.className = 'open-modal-button-opacity';
  } else if ($surveyButton) {
    $popUpContainer.className = 'pop-up-container-none';
    $columns.className = 'column-white';
    $openModalButton.className = 'open-modal-button';
  }
  $clicked = !$clicked;
}

$openModalButton.addEventListener('click', modal);
$surveyButton.addEventListener('click', modal);
