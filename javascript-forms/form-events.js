function handleFocus(event) {
  console.log('focus');
  console.log(event.target.name);
}

function handleBlur(event) {
  console.log('blur');
  console.log(event.target.name);
}

function handleInput(event) {
  console.log('input', event.target.name, event.target.value);
}

// querying the dom for "each form control"
// that's 2 <input> elements and one <textarea> element
var userName = document.querySelector('#user-name');
userName.addEventListener('focus', handleFocus);
userName.addEventListener('blur', handleBlur);
userName.addEventListener('input', handleInput);

var userEmail = document.querySelector('#user-email');
userEmail.addEventListener('focus', handleFocus);
userEmail.addEventListener('blur', handleBlur);
userEmail.addEventListener('input', handleInput);

var userMessage = document.querySelector('#user-message');
userMessage.addEventListener('focus', handleFocus);
userMessage.addEventListener('blur', handleBlur);
userMessage.addEventListener('input', handleInput);
