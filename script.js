const loginButton = document.querySelector('#login');
const submitButtom = document.querySelector('#submit-btn');
const agreement = document.querySelector('#agreement');

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
