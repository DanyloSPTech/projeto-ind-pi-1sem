// Validações Campos de Cadastro
function cadastrar(){
    var nickname = inpUsername.value;
    var nome = inpNome.value;
    var senha = inpSenha.value;
    var csenha = inpConfirmarSenha.value;
    var email = inpEmail.value;
    var dataNasc = inpDtNasc.value;
    var jogo = slcJogo.value;

    var cadastroValido = true;

    if(nickname == ''){
        alert("Informe um nickname!");
        cadastroValido = false;
        var inpNickname = document.querySelector('#inpUsername');
        inpNickname.classList.add("erro");
    }
    if(nome == ''){
        alert("Informe um nome!");
        cadastroValido = false;
    }
    if(senha == ''){
        alert("Informe uma senha!");
        cadastroValido = false;
    }
    if(csenha == ''){
        alert("Você precisa confirmar a senha!");
        cadastroValido = false;
    }
    if(email == ''){
        alert("Informe um email!");
        cadastroValido = false;
    }
    if(dataNasc == ''){
        alert("Informe sua data de nascimento!");
        cadastroValido = false;
    }
    if(jogo == 0){
        alert("Informe um jogo de preferência!");
        cadastroValido = false;
    }

    if(cadastroValido){
        if(senha != csenha){
            alert("As senhas não correspondem!");
            cadastroValido = false;
        }
        // Corrigir bug que inválida email com . antes da @
        if(email.indexOf("@") == -1 || email.indexOf(".") == -1 || email.indexOf(".") < email.indexOf("@")){
            alert("Email Inválido!");
            cadastroValido = false;
        }
        if(cadastroValido){
            alert("TUDO VÁLIDO!");
        }
    }
}