// Відстежуй на формі подію input, і щоразу записуй у локальне сховище об'єкт з полями email і message, у яких зберігай поточні значення полів форми. Нехай ключем для сховища буде рядок "feedback-form-state".
// Під час завантаження сторінки перевіряй стан сховища, і якщо там є збережені дані, заповнюй ними поля форми. В іншому випадку поля повинні бути порожніми.
// Під час сабміту форми очищуй сховище і поля форми, а також виводь у консоль об'єкт з полями email, message та їхніми поточними значеннями.
// Зроби так, щоб сховище оновлювалось не частіше, ніж раз на 500 мілісекунд. Для цього додай до проекту і використовуй бібліотеку lodash.throttle.
// додав функцію, щоб користувач не міг відправити порожню форму;

import throttle from 'lodash.throttle';

document.addEventListener('DOMContentLoaded', function () {
  let form = document.querySelector('.feedback-form');
  let emailInput = form.querySelector('input[name="email"]');
  let messageTextarea = form.querySelector('textarea[name="message"]');

  function saveFormState() {
    let state = {
      email: emailInput.value,
      message: messageTextarea.value,
    };
    localStorage.setItem('feedback-form-state', JSON.stringify(state));
  }

  function restoreFormState() {
    let savedState = localStorage.getItem('feedback-form-state');
    if (savedState) {
      savedState = JSON.parse(savedState);
      emailInput.value = savedState.email;
      messageTextarea.value = savedState.message;
    }
  }

  function clearFormState() {
    localStorage.removeItem('feedback-form-state');
    emailInput.value = '';
    messageTextarea.value = '';
  }

  function submitForm(event) {
    event.preventDefault();
    let state = {
      email: emailInput.value,
      message: messageTextarea.value,
    };
    if (emailInput.value === '' || messageTextarea.value === '') {
      alert('всі поля мають бути заповненні');
    } else {
      console.log(state);
      clearFormState();
    }
  }

  form.addEventListener('input', lodash.throttle(saveFormState, 500));
  window.addEventListener('load', restoreFormState);
  form.addEventListener('submit', submitForm);
});
