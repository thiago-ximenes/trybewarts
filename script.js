const loginButton = document.querySelector('#login');
const submitButtom = document.querySelector('#submit-btn');
const agreement = document.querySelector('#agreement');
const contador = document.querySelector('#counter');
const textarea = document.querySelector('#textarea');

loginButton.addEventListener('click', () => {
  const emailText = document.querySelector('#email').value;
  const senha = document.querySelector('#senha').value;

  if (emailText === 'tryber@teste.com' && senha === '123456') {
    alert('Olá, Tryber!');
    alert(emailText + senha);
  } else {
    alert('Email ou senha inválidos.');
  }
});

submitButtom.disabled = true;
// Source https://flaviocopes.com/how-to-disable-button-javascript/
agreement.addEventListener('click', () => {
  if (agreement.checked) {
    submitButtom.disabled = false;
  } else {
    submitButtom.disabled = true;
  }
});

textarea.addEventListener('keyup', () => {
  const counter = 500 - textarea.value.length;
  contador.innerText = counter;
});
