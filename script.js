const password = document.querySelector('#password');
const passwordConfirm = document.querySelector('#password-confirm');
const form = document.querySelector('form');
const passwordError = document.querySelector('#pwd-error');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  // check passwords
  if (password.value !== passwordConfirm.value) {
    password.classList.add('error');
    passwordConfirm.classList.add('error');
    passwordError.classList.add('pwd-error-visible');
  } else {
    password.classList.remove('error');
    passwordConfirm.classList.remove('error');
    passwordError.classList.remove('pwd-error-visible');
    form.reset();
  }
});
