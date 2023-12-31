// Відстежуй на формі подію input, і щоразу записуй у локальне сховище об'єкт з полями email і message, у яких зберігай поточні значення полів форми. Нехай ключем для сховища буде рядок "feedback-form-state".
// Під час завантаження сторінки перевіряй стан сховища, і якщо там є збережені дані, заповнюй ними поля форми. В іншому випадку поля повинні бути порожніми.
// Під час сабміту форми очищуй сховище і поля форми, а також виводь у консоль об'єкт з полями email, message та їхніми поточними значеннями.
// Зроби так, щоб сховище оновлювалось не частіше, ніж раз на 500 мілісекунд. Для цього додай до проекту і використовуй бібліотеку lodash.throttle.

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

  function submitForm(event) {
    event.preventDefault();

    if (emailInput.value === '' || messageTextarea.value === '') {
      return alert('Всі поля мають бути заповнені!');
    }

    const { email, message } = event.currentTarget.elements;
    console.log({ email: email.value, message: message.value });
    localStorage.removeItem('feedback-form-state');
    event.currentTarget.reset();
  }

  form.addEventListener('input', throttle(saveFormState, 500));
  window.addEventListener('load', restoreFormState);
  form.addEventListener('submit', submitForm);
});
