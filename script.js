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




function salvaDados(e) {
  const nome = document.querySelector('#input-name').value;

  const sobrenome = document.querySelector('#input-lastname').value;
  
  const email = document.getElementById('input-email').value;
  
  const seletor = document.getElementById('house').value;
  
  const familia = document.getElementById('familyFlex').value;
  
  const materias = document.querySelectorAll('.materias').value;
  
  const nota = document.querySelectorAll('.rate').value;
  
  const observacoes = document.querySelector('#textarea').value;
  
  let nomeSobrenome = `Nome: ${nome} ${sobrenome}`;
  
  let emailSubstituir = `Email: ${email}`;
  
  let casa = `Casa: ${seletor}`;
  
  let materiasSubstituir = `Matérias: ${materias}`;
  
  let avaliacaoSubstituir = `Avaliação: ${nota}`;
  
  let observacoesSubstituir = `Observações: ${observacoes}`;
  
  const array = [
    nomeSobrenome,
    emailSubstituir,
    casa,
    materiasSubstituir,
    avaliacaoSubstituir,
    observacoesSubstituir,
  ];
  
  
    for (let cont = 0; cont <= 5; cont += 1) {
    const elementP = document.createElement('p');
    elementP.innerText = array[cont];
    
    document.querySelector('#evaluation-form').appendChild(elementP);
  }
  e.preventDefault();
}

document.querySelector('#submit-btn').addEventListener('click', salvaDados);
