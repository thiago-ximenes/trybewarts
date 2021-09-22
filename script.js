const loginButton = document.querySelector("#login");
const emailText = document.querySelector("#email").value;
const senha = document.querySelector("#senha").value;


login.addEventListener("click", () => {
    if(emailText === 'tryber@teste.com' && senha === "123456"){
        alert('Olá, Tryber!!');
    }
    else{
        alert('Email ou senha inválidos.')
    }
})