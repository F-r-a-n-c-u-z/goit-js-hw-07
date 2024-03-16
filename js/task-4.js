const form = document.querySelector('.login-form');
form.addEventListener('submit', hundleSubmit);

function hundleSubmit(event) {
  event.preventDefault();

  const form = event.target.elements;
  const email = form.email.value;
  const password = form.password.value;
  if (email === '' || password === '') {
    return alert('All form fields must be filled in');
  }

  console.log({ Email: email.trim(), Password: password.trim() });
  event.target.reset();
}
