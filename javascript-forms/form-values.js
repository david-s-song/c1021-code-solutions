var myContactForm = document.querySelector('#contact-form');

function submitForm(event) {
  event.preventDefault();
  var name = myContactForm.elements.name.value;
  var email = myContactForm.elements.email.value;
  var message = myContactForm.elements.message.value;
  var dataInfo = {
    name: name,
    email: email,
    message: message
  };
  console.log('dataInfo:', dataInfo);
}

myContactForm.reset();
myContactForm.addEventListener('submit', submitForm);
