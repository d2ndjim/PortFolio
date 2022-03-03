const Form = document.querySelector('.form');

Form.addEventListener('input', () => {
  const formInfo = {
    name: document.querySelector('#name').value,
    email: document.querySelector('.emailAddress').value,
    message: document.querySelector('#msg').value,
  };

  localStorage.setItem('FormContent', JSON.stringify(formInfo));
});

// const formObj = JSON.parse(localStorage.getItem('FormContent'))
// document.querySelector('#name').value = formObj.name;
// document.querySelector('.emailAddress').value = formObj.email;
// document.querySelector('#msg').value = formObj.message;
