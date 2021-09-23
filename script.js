const loginButton = document.querySelector('#login');
const submitButtom = document.querySelector('#submit-btn');
const agreement = document.querySelector('#agreement');
const contador = document.querySelector('#counter');
const textarea = document.querySelector('#textarea');
let nome = document.querySelector('#input-name').value;
let sobrenome = document.querySelector('#input-lastname').value;
let email = document.getElementById('input-email').value;
let seletor = document.getElementById('house').value;
let familiaEscolhida = null;
let materias = document.querySelectorAll('.materias').value;
let nota = document.querySelectorAll('.rate').value;
let observacoes = document.querySelector('#textarea').value;
let nomeSobrenome = `Nome: ${nome} ${sobrenome}`;
let emailSubstituir = `Email: ${email}`;
let casa = `Casa: ${seletor}`;
let materiasSubstituir = `Matérias: ${materias}`;
let avaliacaoSubstituir = `Avaliação: ${nota}`;
let observacoesSubstituir = `Observações: ${observacoes}`;
let familia = null;

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

function capturaDados() {
  nome = document.querySelector('#input-name').value;
  sobrenome = document.querySelector('#input-lastname').value;
  email = document.getElementById('input-email').value;
  seletor = document.getElementById('house').value;
  familiaEscolhida = document.querySelector(
    '#evaluation-form input[name="family"]:checked'
  ).value;
  materias = document.querySelectorAll('.subject');
  nota = document.querySelector('#notas input[name="rate"]:checked').value;
  observacoes = document.querySelector('#textarea').value;
}

function escreveResultado() {
  const arrayMaterias = [];
  capturaDados();
  materias.forEach((item) => {
    if (item.checked) {
      arrayMaterias.push(` ${item.value}`);
    }
  });
  nomeSobrenome = `Nome: ${nome} ${sobrenome}`;
  emailSubstituir = `Email: ${email}`;
  casa = `Casa: ${seletor}`;
  familia = `Família: ${familiaEscolhida}`;
  materiasSubstituir = `Matérias: ${arrayMaterias}`;
  avaliacaoSubstituir = `Avaliação: ${nota}`;
  observacoesSubstituir = `Observações: ${observacoes}`;
}

function salvaDados(event) {
  event.preventDefault();
  capturaDados();
  escreveResultado();
  const array = [
    nomeSobrenome,
    emailSubstituir,
    casa,
    familia,
    materiasSubstituir,
    avaliacaoSubstituir,
    observacoesSubstituir,
  ];
  for (let cont = 0; cont <= array.length - 1; cont += 1) {
    const elementP = document.createElement('p');
    elementP.innerText = array[cont];
    document.querySelector('#evaluation-form').appendChild(elementP);
  }
}

document.querySelector('#submit-btn').addEventListener('click', salvaDados);
