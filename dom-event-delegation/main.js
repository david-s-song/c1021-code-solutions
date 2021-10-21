
var $done = document.querySelector('.task-list');
$done.addEventListener('click', taskDone);

function taskDone(event) {
  console.log('event.target:', event.target, event.target.tagName);
  if (event.target.tagName === 'BUTTON') {
    console.log('closest: ', 'task-list-item');
    event.target.closest('.task-list-item').remove();
  }
}
