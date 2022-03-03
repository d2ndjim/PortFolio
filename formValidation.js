// form validation
const contactForm = document.querySelector('.form');
const emailImput = document.querySelector('.emailAddress');
const validationMessage = document.querySelector('.validationMessage');

contactForm.addEventListener('submit', (event) => {
  const stringMessage = emailImput.value;
  if (/[A-Z]/.test(stringMessage)) {
    validationMessage.innerHTML = 'Your email should be in lower case.';
    event.preventDefault();
  }
});