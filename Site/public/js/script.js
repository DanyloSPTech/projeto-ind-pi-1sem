// const res = require("express/lib/response");

// Validações Campos de Cadastro
function cadastrar(){
    var nickname = inpUsername.value;
    var nome = inpNome.value;
    var senha = inpSenha.value;
    var csenha = inpConfirmarSenha.value;
    var email = inpEmail.value;
    var dataNasc = inpDtNasc.value;
    var organizacao = slcOrg.value;
    var jogo = slcJogo.value;

    var txtOrganizacao = '';

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
    if(organizacao == 0){
        alert("Você não informou uma organização para simpatizar!");
    }else{
        if(organizacao == 1){
            txtOrganizacao = 'Fúria';
        }
        if(organizacao == 2){
            txtOrganizacao = 'mibr';
        }
        if(organizacao == 3){
            txtOrganizacao = 'paiN Gaming';
        }
        if(organizacao == 4){
            txtOrganizacao = 'LOUD';
        }
        if(organizacao == 5){
            txtOrganizacao = 'INTZ';
        }
        if(organizacao == 6){
            txtOrganizacao = 'RED Canids';
        }
        if(organizacao == 7){
            txtOrganizacao = 'Black Dragons';
        }
        if(organizacao == 8){
            txtOrganizacao = 'LOS GRANDES';
        }
        if(organizacao == 9){
            txtOrganizacao = 'Fluxo';
        }
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
                    organizacaoServer: txtOrganizacao,
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
                    alert("Jornalista cadastrado com sucesso!");
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

        fetch("/materia/novaMateria", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                titulo: titulo,
                corpo: corpo,
                fkJogo: jogo,
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
                    jogo.innerHTML = `Jogo: ${materia.nomeJogo}`;

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
    var mensagem = inpModal.value;
    var fkMateria = sessionStorage.getItem('ID_MATERIA');
    var fkUsuario = sessionStorage.getItem('ID_USUARIO');

    if(fkUsuario == undefined || fkUsuario == 0){
        alert("Apenas usuáios logados podem comentar!");
    }else{
        fetch("/comentarios/comentar", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                texto: mensagem,
                fkMateria: fkMateria,
                fkUsuario: fkUsuario
            })
        }).then(function (resposta) {
            console.log("resposta: ", resposta);

            if(resposta.ok){
                fecharModal();
                carregarComentarios();
            }else{
                throw ("Houve um erro ao tentar comentar na matéria!");
            }
        }).catch(function (resposta) {
            console.log(`#ERRO: ${resposta}`);
        });
    }
}

function carregarComentarios(){

    var fkMateria = sessionStorage.getItem('ID_MATERIA');

    fetch("/comentarios/listarComentariosMateria", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            fkMateria: fkMateria
        })
    }).then(function (resposta) {
        console.log("Resposta Script: ", resposta);

        if(resposta.ok){
            resposta.json().then(function (resposta){

                secaoComentarios.innerHTML = '';

                console.log("Comentários Recebidos: ", JSON.stringify(resposta));
                for(var i = 0; i < resposta.length; i++){
                    var comentario = resposta[i];

                    var divCard = document.createElement("div");
                    var h1Card = document.createElement("h1");
                    var pCard = document.createElement("p");

                    h1Card.innerHTML = comentario.username;
                    pCard.innerHTML = comentario.texto;

                    divCard.className = "cardComentario";
                    h1Card.className = "autorComentario";
                    pCard.className = "mensagemComentario";

                    divCard.appendChild(h1Card);
                    divCard.appendChild(pCard);

                    secaoComentarios.appendChild(divCard);

                    console.log(comentario.username);
                    console.log(comentario.texto);
                    console.log(comentario.jogo);
                }
            });
            
        }else{
            throw ("Houve um erro ao listar os comentários da matéria!");
        }
    }).catch(function (resposta) {
        console.log(`#ERRO: ${resposta}`);
    });

}

function listarJogos (){
    fetch("/jogos/listar").then(function (resposta) {
        if(resposta.ok){
            if(resposta.status == 204){
                alert("NENHUM JOGO CADASTRADO!");
            }
            resposta.json().then(function (resposta){
                console.log("Jogos recebidos: ", JSON.stringify(resposta));

                var slcJogos = document.getElementById("slcJogo");

                for(var i = 0; resposta.length > 0; i++){
                    var jogo = resposta[i];

                    var option = document.createElement("option");

                    option.innerHTML = `${jogo.nome}`;
                    option.value = `${jogo.idJogo}`;

                    slcJogos.appendChild(option);
                }
            })
        }
    })
}

function cadastrarJogo(){
    var nome = inpNomeJogo.value;
    var tipo = Number(slcJogo.value);
    var dataLancamento = inpDtLanc.value;

    var cadastroValido = true;

    var nomeGenero = '';

    if(nome == ''){
        alert("Informe um nome para o jogo!");
        cadastroValido = false;
    }
    if(tipo == 0){
        alert("Informe um gênero de jogo válido!");
        cadastroValido = false;
    }else if(tipo == 1){
        nomeGenero = 'FPS';
    }else if(tipo == 2){
        nomeGenero = 'MOBA';
    }else if(tipo == 3){
        nomeGenero = 'Battle Royale';
    }else if(tipo == 4){
        nomeGenero = 'Fight Games';
    }else if(tipo == 5){
        nomeGenero= 'RTS';
    }else{
        alert("Opção Inválida!");
        cadastroValido = false;
    }
    if(dataLancamento == ''){
        alert("Informe uma data de lançamento!");
        cadastroValido = false;
    }

    console.log(dataLancamento);

    if(cadastroValido){
        fetch("/jogos/cadastrar", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                nome: nome,
                tipo: nomeGenero,
                dataLancamentoJogo: dataLancamento
            })
        }).then(function (resposta){
            console.log("resposta: ", resposta);

            if(resposta.ok) {
                alert("Cadastro de jogo realizado com sucesso!");
            }else {
                throw("Houve um erro ao tentar realizar o cadastro de um novo jogo");
            }
        }).catch(function (resposta){
            console.log(`#ERRO: ${resposta}`);
        });
    }

}