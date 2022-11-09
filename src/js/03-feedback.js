import throttle from 'lodash.throttle';

const formEl = document.querySelector('.feedback-form');
formEl.addEventListener('input', throttle(onFeedbackForm, 500));
formEl.addEventListener('submit', onSubmit);

const STORAGE_KEY = 'feedback-form-state';
const formData = {};
newFormData();

function onSubmit(event) {
  event.preventDefault();
  if (formEl.elements.email.value && formEl.elements.message.value) {
    event.currentTarget.reset();
    localStorage.removeItem(STORAGE_KEY);
    // оставь вывод
    console.log(formData);
  }
}

function onFeedbackForm() {
  formData.email = formEl.elements.email.value;
  formData.message = formEl.elements.message.value;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}

function newFormData() {
  if (localStorage.getItem(STORAGE_KEY)) {
    const formData = JSON.parse(localStorage.getItem(STORAGE_KEY) || '');
    formEl.elements.email.value = formData.email;
    formEl.elements.message.value = formData.message;
  }
}
