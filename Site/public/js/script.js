// const res = require("express/lib/response");

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
    }else{
        if(jogo == 1){
            jogo = 'Counter-Strike: Global Offensive';
        }else if(jogo == 2){
            jogo = 'Valorant';
        }else if(jogo == 3){
            jogo = 'League of Legends';
        }else if(jogo == 4){
            jogo = 'Rainbow Six';
        }else if(jogo == 5){
            jogo = 'Rocket League';
        }else{
            jogo = 'INVALIDO';
        }
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
            fetch("/usuarios/cadastrar", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    // crie um atributo que recebe o valor recuperado aqui
                    // Agora vá para o arquivo routes/usuario.js
                    usernameServer: nickname,
                    nomeServer: nome,
                    emailServer: email,
                    senhaServer: senha,
                    dataNascServer: dataNasc,
                    jogoServer: jogo
                })
            }).then(function (resposta) {
    
                console.log("resposta: ", resposta);
    
                if (resposta.ok) {
                    window.location = "login.html";
                } else {
                    throw ("Houve um erro ao tentar realizar o cadastro!");
                }
            }).catch(function (resposta) {
                console.log(`#ERRO: ${resposta}`);
            });
        }
    }
}

function logar(){
    var emailVar = inpEmail.value;
    var passVar = inpSenha.value;


    if (emailVar == '' || passVar == ''){
        alert("Preencha todos os campos!");
    }else if (emailVar.indexOf("@") == -1 || emailVar.indexOf(".") == -1 || emailVar.indexOf(".") < emailVar.indexOf("@")){
        alert("Email inválido!");
    }else {
        fetch("/usuarios/autenticar", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                emailServer: emailVar,
                senhaServer: passVar
            })
        }).then(function (resposta) {
            console.log("ESTOU NO THEN DO entrar()!")
            if (resposta.ok) {
                console.log(resposta);

                resposta.json().then(json => {
                    console.log(json);
                    console.log(JSON.stringify(json));

                    sessionStorage.ID_USUARIO = json.idUsuario;
                    sessionStorage.NOME_USUARIO = json.nome;
                    sessionStorage.NIVEL_ACESSO = json.nivelAcesso;
                 
                    var nivelAcesso = Number(sessionStorage.getItem('NIVEL_ACESSO'));

                    if(nivelAcesso == 1){
                        window.location = "index.html";
                    }else if(nivelAcesso == 2){
                        window.location = "jornalista/novaMateria.html";
                    }

                });

            } else {
                alert("Auntenticação Falhou!");
            }

            }).catch(function (erro) {
                console.log(erro);
            })

        }
}

function logarAdm(){
    var codIdentificao = inpCodAdm.value;
    var senha = inpSenhaAdm.value;

    if(codIdentificao == '' || senha == ''){
        alert('Informe todos os campos para prosegguir');
    }else if(codIdentificao == '1337' && senha == 'sucodeuva'){
        window.location = 'cadastroJornalista.html';
    }else{
        alert('CREDENCIAIS INVÁLIDAS!');
    }
}

function cadastrarJornalista(){
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
    }else{
        if(jogo == 1){
            jogo = 'Counter-Strike: Global Offensive';
        }else if(jogo == 2){
            jogo = 'Valorant';
        }else if(jogo == 3){
            jogo = 'League of Legends';
        }else if(jogo == 4){
            jogo = 'Rainbow Six';
        }else if(jogo == 5){
            jogo = 'Rocket League';
        }else{
            jogo = 'INVALIDO';
        }
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
            fetch("/usuarios/cadastrarJornalista", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    // crie um atributo que recebe o valor recuperado aqui
                    // Agora vá para o arquivo routes/usuario.js
                    usernameServer: nickname,
                    nomeServer: nome,
                    emailServer: email,
                    senhaServer: senha,
                    dataNascServer: dataNasc,
                    jogoServer: jogo
                })
            }).then(function (resposta) {
    
                console.log("resposta: ", resposta);
    
                if (resposta.ok) {
                    window.location = "login.html";
                } else {
                    throw ("Houve um erro ao tentar realizar o cadastro!");
                }
            }).catch(function (resposta) {
                console.log(`#ERRO: ${resposta}`);
            });
        }
    }
}

function deslogar(){
    sessionStorage.clear();
    window.location = "../index.html";
}

function publicarMateria(){
    var titulo = inpTituloMateria.value;
    var corpo = corpoMateria.value;
    var jogo = slcJogo.value;
    var fkJornalista = Number(sessionStorage.getItem('ID_USUARIO'));

    if(titulo == ''){
        alert("Informe um titulo para a matéria!");
    }else if(corpo == ''){
        alert("Informe um corpo para a matéria!");
    }else if(jogo == ''){
        alert("Informe um jogo para a matéria!");
    }else if(fkJornalista == 0){
        alert("Erro na identificação do jornalista!");
    }else {

        if(jogo == 1){
            jogo = 'Counter-Strike: Global Offensive';
        }else if(jogo == 2){
            jogo = 'Valorant';
        }else if(jogo == 3){
            jogo = 'League of Legends';
        }else if(jogo == 4){
            jogo = 'Rainbow Six';
        }else if(jogo == 5){
            jogo = 'Rocket League';
        }else{
            jogo = 'INVALIDO';
        }

        fetch("/materia/novaMateria", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                titulo: titulo,
                corpo: corpo,
                jogo: jogo,
                fkJornalista: fkJornalista,
            })
        }).then(function (resposta) {

            console.log("resposta: ", resposta);

            if (resposta.ok) {
                alert("MATERIA PUBLICADA!");
                inpTituloMateria.value = '';
                corpoMateria.value = '';
                slcJogo.value = 0;
            } else {
                throw ("Houve um erro ao tentar publicar a matéria!");
            }
        }).catch(function (resposta) {
            console.log(`#ERRO: ${resposta}`);
        });

    }
}

function listarMaterias(){
    fetch("/materia/listar").then(function (resposta){

        if(resposta.ok){
            if(resposta.status == 204){
                //CONTINUAR DAQUI
            }
            resposta.json().then(function (resposta){
                console.log("Matérias recebidas: ", JSON.stringify(resposta));

                var tabela = document.getElementById("tabela_noticias");

                var contadorNoticias = 0;

                for(var i = resposta.length - 1; i >= 0 && contadorNoticias < 10; i--){
                    var materia = resposta[i];

                    var cedula = document.createElement("div");
                    var titulo = document.createElement("h1");
                    var conteudoDireita = document.createElement("div");
                    var autor = document.createElement("p");
                    var jogo = document.createElement("p");

                    titulo.innerHTML = `${materia.titulo}`;
                    autor.innerHTML = `De: ${materia.nome}`;
                    jogo.innerHTML = `Jogo: ${materia.jogo}`;

                    cedula.className = "cedulaNoticia";
                    conteudoDireita.className = "conteudoDireita";

                    conteudoDireita.appendChild(autor);
                    conteudoDireita.appendChild(jogo);

                    titulo.id = `${materia.idMateria}`;
                    cedula.appendChild(titulo);
                    cedula.appendChild(conteudoDireita);
                    cedula.id = `${materia.idMateria}`;
                    tabela.appendChild(cedula);

                    contadorNoticias++;
                }
            });
        }else {
            throw ('Houve um erro na API!');
        }

    }).catch(function (resposta) {
        console.error(resposta);
    });
}

// Pegando ID da materia selecionada pelo usuario e salvando ela na sessão, depois 
// Redirecionando usuário para a página noticia.html

var tabela = document.getElementById('tableNoticias');

tabela.addEventListener("click", function(e) {
    var idMateria = e.target.id;
    sessionStorage.ID_MATERIA = idMateria;
    window.location = 'noticia.html';
});

function selecionarMateria(){
    var fkMateria = sessionStorage.getItem('ID_MATERIA');
    fetch("/materia/selecionarMateria", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            fkMateriaServer: fkMateria
        })
    }).then(function (resposta) {
        console.log("ESTOU NO THEN DO selecionarMateria()!")
        if(resposta.ok) {
            console.log(resposta);
            resposta.json().then(json => {
                console.log(json);
                console.log(JSON.stringify(json));

                var titulo = document.getElementById("txtTitulo");
                var autor = document.getElementById("txtAutor");
                var corpo = document.getElementById("txtCorpo");

                titulo.innerHTML = `${json.titulo}`;
                autor.innerHTML = `Matéria por: ${json.nome}`;
                corpo.innerHTML = `${json.corpo}`;
            });
        }
    }).catch(function (erro) {
        console.log(erro);
    })
}

function abrirModal(){
    modalComentario.style.display = 'flex';
}

function fecharModal(){
    modalComentario.style.display = 'none';
}

function novoComentario(){
    var titulo = "EXCLUIR COLUNA";
    var mensagem = inpModal.value;
    alert(mensagem);
    var fkMateria = sessionStorage.getItem('ID_MATERIA');
    var fkUsuario = sessionStorage.getItem('ID_USUARIO');

    if(fkUsuario == NaN || fkUsuario == 0){
        alert("Apenas usuáios logados podem comentar!");
    }else{
        fetch("/comentarios/comentar", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                titulo: titulo,
                texto: mensagem,
                fkMateria: fkMateria,
                fkUsuario: fkUsuario
            })
        }).then(function (resposta) {
            console.log("resposta: ", resposta);

            if(resposta.ok){
                fecharModal();
            }else{
                throw ("Houve um erro ao tentar comentar na matéria!");
            }
        }).catch(function (resposta) {
            console.log(`#ERRO: ${resposta}`);
        });
    }
}