const formButton = document.getElementById('form-button');
const form = document.getElementById('form');
const emailInput = document.getElementById('email');
const errorMessage = document.getElementById('email-error');
const subscribe = document.getElementById('subscribe');
const successMessage = document.getElementById('success-message');
const dismissButton = document.getElementById('dismiss-button');
const outputEmail = successMessage.querySelector('.success-form__email');

const toggleSuccessMessage = () => {
  subscribe.classList.toggle('visually-hidden');
  successMessage.classList.toggle('visually-hidden');
};

const validateEmail = (email) => {
  const invalidClass = 'invalid-email';
  const emailTest = /^\S+@\S+\.\S+$/gm;

  emailInput.classList.remove(invalidClass);
  errorMessage.innerText = '';

  if (!emailTest.test(email)) {
    errorMessage.innerText = 'Valid email required';
    emailInput.classList.add(invalidClass);
    setTimeout(() => {
      emailInput.classList.remove(invalidClass);
    }, 2000);
    return;
  }

  return true;
};

const handleSubmit = (event) => {
  event.preventDefault();
  const getFormData = new FormData(event.target).entries();
  const { email } = Object.fromEntries(getFormData);

  const validate = validateEmail(email);

  if (validate) {
    toggleSuccessMessage();
    outputEmail.innerText = email;
  }
};

const onClickDismissMessage = () => {
  toggleSuccessMessage();
  emailInput.value = '';
};

form.addEventListener('submit', handleSubmit);
dismissButton.addEventListener('click', onClickDismissMessage);
