const loginButton = document.querySelector("#login");


login.addEventListener("click", () => {
    const emailText = document.querySelector("#email").value;
    const senha = document.querySelector("#senha").value;
    
    if(emailText === 'tryber@teste.com' && senha === "123456"){
        alert('Olá, Tryber!!');
        alert(emailText + senha);
    }
    else{
        alert('Email ou senha inválidos.')
    }
})