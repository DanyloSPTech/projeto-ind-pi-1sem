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
        Swal.fire({
            icon: 'error',
            title: 'Campo inválido!',
            text: 'Informe um nickname!'
        });
        cadastroValido = false;
    }
    if(nome == ''){
        Swal.fire({
            icon: 'error',
            title: 'Campo inválido!',
            text: 'Informe um nome!'
        });
        cadastroValido = false;
    }
    if(senha == ''){
        Swal.fire({
            icon: 'error',
            title: 'Campo inválido!',
            text: 'Informe uma senha!'
        });
        cadastroValido = false;
    }
    if(csenha == ''){
        Swal.fire({
            icon: 'error',
            title: 'Campo inválido!',
            text: 'Você precisa confirmar sua senha!'
        });
        cadastroValido = false;
    }
    if(email == ''){
        Swal.fire({
            icon: 'error',
            title: 'Campo inválido!',
            text: 'Informe um email!'
        });
        cadastroValido = false;
    }
    if(dataNasc == ''){
        Swal.fire({
            icon: 'error',
            title: 'Campo inválido!',
            text: 'Informe sua data de nascimento!'
        });
        cadastroValido = false;
    }
    if(organizacao == 0){
        alert("Atenção! você não escolheu uma organização para simpatizar!");
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
        Swal.fire({
            icon: 'error',
            title: 'Campo inválido!',
            text: 'Informe um jogo de preferência!'
        });
        cadastroValido = false;
    }

    if(cadastroValido){
        if(senha != csenha){
            Swal.fire({
                icon: 'error',
                title: 'Campo inválido!',
                text: 'As senhas não correspondem!'
            });
            cadastroValido = false;
        }
        // Corrigir bug que inválida email com . antes da @
        if(email.indexOf("@") == -1 || email.indexOf(".") == -1){
            Swal.fire({
                icon: 'error',
                title: 'Campo inválido!',
                text: 'Email inválido!'
            });
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
        Swal.fire({
            icon: 'error',
            title: 'Campo inválido!',
            text: 'Preencha todos os campos!'
        });
    }else if (emailVar.indexOf("@") == -1 || emailVar.indexOf(".") == -1){
        Swal.fire({
            icon: 'error',
            title: 'Campo inválido!',
            text: 'Email inválido!'
        });
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
                    sessionStorage.USERNAME = json.username;
                    sessionStorage.NIVEL_ACESSO = json.nivelAcesso;
                 
                    var nivelAcesso = Number(sessionStorage.getItem('NIVEL_ACESSO'));

                    if(nivelAcesso == 1){
                        window.location = "index.html";
                    }else if(nivelAcesso == 2){
                        window.location = "jornalista/novaMateria.html";
                    }

                });

            } else {
                Swal.fire({
                    icon: 'error',
                    title: 'Autenticação Falhou!',
                    text: 'Confira se você preencheu suas credenciais corretamente'
                });
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
        Swal.fire({
            icon: 'error',
            title: 'Campo inválido!',
            text: 'Informe todos os campos para prosseguir!'
        });
    }else if(codIdentificao == '1337' && senha == 'sucodeuva'){
        window.location = 'indexAdm.html';
        sessionStorage.NOME_USUARIO = 'ADM';
        sessionStorage.ID_USUARIO = 0;
        sessionStorage.USERNAME = 'The Boss';
        sessionStorage.NIVEL_ACESSO = 3;
    }else{
        Swal.fire({
            icon: 'error',
            title: 'Autenticação Falhou!',
            text: 'Confira se você preencheu suas credenciais corretamente'
        });
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
        Swal.fire({
            icon: 'error',
            title: 'Campo Inválido!',
            text: 'Informe um nickname!'
        });
        cadastroValido = false;
    }
    if(nome == ''){
        Swal.fire({
            icon: 'error',
            title: 'Campo Inválido!',
            text: 'Informe um nome!'
        });
        cadastroValido = false;
    }
    if(senha == ''){
        Swal.fire({
            icon: 'error',
            title: 'Campo Inválido!',
            text: 'Informe uma senha!'
        });
        cadastroValido = false;
    }
    if(csenha == ''){
        Swal.fire({
            icon: 'error',
            title: 'Campo Inválido!',
            text: 'Você precisa confirmar a senha!'
        });
        cadastroValido = false;
    }
    if(email == ''){
        Swal.fire({
            icon: 'error',
            title: 'Campo Inválido!',
            text: 'Informe um email!'
        });
        cadastroValido = false;
    }
    if(dataNasc == ''){
        Swal.fire({
            icon: 'error',
            title: 'Campo Inválido!',
            text: 'Informe a data de nascimento do jornalista!'
        });
        cadastroValido = false;
    }
    if(jogo == 0){
        Swal.fire({
            icon: 'error',
            title: 'Campo Inválido!',
            text: 'Informe um jogo para o jornalista cobrir!'
        });
        cadastroValido = false;
    }

    if(cadastroValido){
        if(senha != csenha){
            Swal.fire({
                icon: 'error',
                title: 'Atenção!',
                text: 'As senhas não correspondem!'
            });
            cadastroValido = false;
        }
        // Corrigir bug que inválida email com . antes da @
        if(email.indexOf("@") == -1 || email.indexOf(".") == -1){
            Swal.fire({
                icon: 'error',
                title: 'Atenção!',
                text: 'Email inválido!'
            });
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
                    Swal.fire({
                        icon: 'success',
                        title: 'Sucesso!',
                        text: 'Jornalista cadastrado com sucesso!'
                    });
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
        Swal.fire({
            icon: 'error',
            title: 'Campo inválido!',
            text: 'Informe um título para a matéria!'
        });
    }else if(corpo == ''){
        Swal.fire({
            icon: 'error',
            title: 'Campo inválido!',
            text: 'Escreva a matéria no campo de texto!'
        });
    }else if(jogo == 0){
        Swal.fire({
            icon: 'error',
            title: 'Campo inválido!',
            text: 'Informe o jogo que a matéria cobre!'
        });
    }else if(fkJornalista == 0){
        Swal.fire({
            icon: 'error',
            title: 'Erro de seção!',
            text: 'Jornalista não identificado!'
        });
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
                Swal.fire({
                    icon: 'success',
                    title: 'Sucesso!',
                    text: 'Matéria publicada com sucesso!'
                });
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

                    autor.id = `${materia.idMateria}`;
                    jogo.id = `${materia.idMateria}`;

                    conteudoDireita.appendChild(autor);
                    conteudoDireita.appendChild(jogo);

                    titulo.id = `${materia.idMateria}`;
                    conteudoDireita.id = `${materia.idMateria}`;
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

function listarTodasMaterias(){
    fetch("/materia/listar").then(function (resposta){

        if(resposta.ok){
            if(resposta.status == 204){
                //CONTINUAR DAQUI
            }
            resposta.json().then(function (resposta){
                console.log("Matérias recebidas: ", JSON.stringify(resposta));

                var tabela = document.getElementById("tabela_noticias");

                var contadorNoticias = 0;

                for(var i = resposta.length - 1; i >= 0; i--){
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

                    autor.id = `${materia.idMateria}`;
                    jogo.id = `${materia.idMateria}`;

                    conteudoDireita.appendChild(autor);
                    conteudoDireita.appendChild(jogo);

                    titulo.id = `${materia.idMateria}`;
                    conteudoDireita.id = `${materia.idMateria}`;
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
        alert("Apenas usuários logados podem comentar!");
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
                    var divAreaAutor = document.createElement("div");
                    var divNomeAutor = document.createElement("div");
                    var divSuporte = document.createElement("div");
                    var pSuporte = document.createElement("p");
                    var logoOrg = document.createElement("img");
                    var h1Card = document.createElement("h1");
                    var pCard = document.createElement("p");

                    h1Card.innerHTML = comentario.username;
                    pCard.innerHTML = comentario.texto;

                    divCard.className = "cardComentario";
                    divAreaAutor.className = "areaAutor";
                    divNomeAutor.className = "nomeAutor";
                    h1Card.className = "autorComentario";
                    pCard.className = "mensagemComentario";

                    if(comentario.organizacao == 'Fúria'){
                        pSuporte.innerHTML = 'Suporte:';
                        logoOrg.src = "../images/logoFuria.png";
                        
                        divSuporte.className = "suporte";
                        pSuporte.className = "mensagemComentario";

                        divNomeAutor.appendChild(h1Card);
                        divSuporte.appendChild(pSuporte);
                        divSuporte.appendChild(logoOrg);
                        divAreaAutor.appendChild(divNomeAutor);
                        divAreaAutor.appendChild(divSuporte);
                        divCard.appendChild(divAreaAutor);
                        divCard.appendChild(pCard);
                        secaoComentarios.appendChild(divCard);
                    }else if(comentario.organizacao == 'mibr'){
                        pSuporte.innerHTML = 'Suporte:';
                        logoOrg.src = "../images/logoMibr.png";
                        
                        divSuporte.className = "suporte";
                        pSuporte.className = "mensagemComentario";

                        divNomeAutor.appendChild(h1Card);
                        divSuporte.appendChild(pSuporte);
                        divSuporte.appendChild(logoOrg);
                        divAreaAutor.appendChild(divNomeAutor);
                        divAreaAutor.appendChild(divSuporte);
                        divCard.appendChild(divAreaAutor);
                        divCard.appendChild(pCard);
                        secaoComentarios.appendChild(divCard);
                    }else if(comentario.organizacao == 'LOUD'){
                        pSuporte.innerHTML = 'Suporte:';
                        logoOrg.src = "../images/logoLoud.png";
                        
                        divSuporte.className = "suporte";
                        pSuporte.className = "mensagemComentario";

                        divNomeAutor.appendChild(h1Card);
                        divSuporte.appendChild(pSuporte);
                        divSuporte.appendChild(logoOrg);
                        divAreaAutor.appendChild(divNomeAutor);
                        divAreaAutor.appendChild(divSuporte);
                        divCard.appendChild(divAreaAutor);
                        divCard.appendChild(pCard);
                        secaoComentarios.appendChild(divCard);
                    }else if(comentario.organizacao == 'INTZ'){
                        pSuporte.innerHTML = 'Suporte:';
                        logoOrg.src = "../images/logoIntz.png";
                        
                        divSuporte.className = "suporte";
                        pSuporte.className = "mensagemComentario";

                        divNomeAutor.appendChild(h1Card);
                        divSuporte.appendChild(pSuporte);
                        divSuporte.appendChild(logoOrg);
                        divAreaAutor.appendChild(divNomeAutor);
                        divAreaAutor.appendChild(divSuporte);
                        divCard.appendChild(divAreaAutor);
                        divCard.appendChild(pCard);
                        secaoComentarios.appendChild(divCard);
                    }else if(comentario.organizacao == 'paiN Gaming'){
                        pSuporte.innerHTML = 'Suporte:';
                        logoOrg.src = "../images/logoPain.png";
                        
                        divSuporte.className = "suporte";
                        pSuporte.className = "mensagemComentario";

                        divNomeAutor.appendChild(h1Card);
                        divSuporte.appendChild(pSuporte);
                        divSuporte.appendChild(logoOrg);
                        divAreaAutor.appendChild(divNomeAutor);
                        divAreaAutor.appendChild(divSuporte);
                        divCard.appendChild(divAreaAutor);
                        divCard.appendChild(pCard);
                        secaoComentarios.appendChild(divCard);
                    }else if(comentario.organizacao == 'Fluxo'){
                        pSuporte.innerHTML = 'Suporte:';
                        logoOrg.src = "../images/logoFluxo.png";
                        
                        divSuporte.className = "suporte";
                        pSuporte.className = "mensagemComentario";

                        divNomeAutor.appendChild(h1Card);
                        divSuporte.appendChild(pSuporte);
                        divSuporte.appendChild(logoOrg);
                        divAreaAutor.appendChild(divNomeAutor);
                        divAreaAutor.appendChild(divSuporte);
                        divCard.appendChild(divAreaAutor);
                        divCard.appendChild(pCard);
                        secaoComentarios.appendChild(divCard);
                    }else if(comentario.organizacao == 'RED Canids'){
                        pSuporte.innerHTML = 'Suporte:';
                        logoOrg.src = "../images/logoRed.png";
                        
                        divSuporte.className = "suporte";
                        pSuporte.className = "mensagemComentario";

                        divNomeAutor.appendChild(h1Card);
                        divSuporte.appendChild(pSuporte);
                        divSuporte.appendChild(logoOrg);
                        divAreaAutor.appendChild(divNomeAutor);
                        divAreaAutor.appendChild(divSuporte);
                        divCard.appendChild(divAreaAutor);
                        divCard.appendChild(pCard);
                        secaoComentarios.appendChild(divCard);
                    }else if(comentario.organizacao == 'Black Dragons'){
                        pSuporte.innerHTML = 'Suporte:';
                        logoOrg.src = "../images/logoBlack.png";
                        
                        divSuporte.className = "suporte";
                        pSuporte.className = "mensagemComentario";

                        divNomeAutor.appendChild(h1Card);
                        divSuporte.appendChild(pSuporte);
                        divSuporte.appendChild(logoOrg);
                        divAreaAutor.appendChild(divNomeAutor);
                        divAreaAutor.appendChild(divSuporte);
                        divCard.appendChild(divAreaAutor);
                        divCard.appendChild(pCard);
                        secaoComentarios.appendChild(divCard);
                    }else if(comentario.organizacao == 'LOS GRANDES'){
                        pSuporte.innerHTML = 'Suporte:';
                        logoOrg.src = "../images/logoLos.png";
                        
                        divSuporte.className = "suporte";
                        pSuporte.className = "mensagemComentario";

                        divNomeAutor.appendChild(h1Card);
                        divSuporte.appendChild(pSuporte);
                        divSuporte.appendChild(logoOrg);
                        divAreaAutor.appendChild(divNomeAutor);
                        divAreaAutor.appendChild(divSuporte);
                        divCard.appendChild(divAreaAutor);
                        divCard.appendChild(pCard);
                        secaoComentarios.appendChild(divCard);
                    }else{
                        divNomeAutor.appendChild(h1Card);
                        divAreaAutor.appendChild(divNomeAutor);
                        divCard.appendChild(divAreaAutor);
                        divCard.appendChild(pCard);
                        secaoComentarios.appendChild(divCard);
                    }
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
        Swal.fire({
            icon: 'error',
            title: 'Campo inválido!',
            text: 'Informe um nome para o jogo!'
        });
        cadastroValido = false;
    }
    if(tipo == 0){
        Swal.fire({
            icon: 'error',
            title: 'Campo inválido!',
            text: 'Informe um gênero de jogo válido!'
        });
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
        Swal.fire({
            icon: 'error',
            title: 'Campo inválido!',
            text: 'Opção inválida!'
        });
        cadastroValido = false;
    }
    if(dataLancamento == ''){
        Swal.fire({
            icon: 'error',
            title: 'Campo inválido!',
            text: 'Informe uma data de lançamento!'
        });
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
                Swal.fire({
                    icon: 'success',
                    title: 'Sucesso!',
                    text: 'Jogo cadastrado com sucesso!'
                });
            }else {
                throw("Houve um erro ao tentar realizar o cadastro de um novo jogo");
            }
        }).catch(function (resposta){
            console.log(`#ERRO: ${resposta}`);
        });
    }

}

function cadastrarEvento(){

    var nome = inpNomeEvento.value;
    var fkJogo = Number(slcJogo.value);
    var dataInicio = inpDtInicio.value;
    var dataFim = inpDtFim.value;
    var qtdeEquipes = Number(inpQtdeEquipes.value);
    var premiacao = Number(inpPremiacao.value);

    fetch("/eventos/cadastrar", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            nome: nome,
            fkJogo: fkJogo,
            dataInicio: dataInicio,
            dataFim: dataFim,
            qtdeEquipes: qtdeEquipes,
            premiacao: premiacao
        })
    }).then(function (resposta){
        console.log("Resposta cadastro evento: ", resposta);

        if(resposta.ok){
            Swal.fire({
                icon: 'success',
                title: 'Sucesso!',
                text: 'Evento cadastrado com sucesso!'
            });

            inpNomeEvento.value = '';
            slcJogo.value = 0;
            inpDtInicio.value = '';
            inpDtFim.value = '';
            inpQtdeEquipes.value = '';
            inpPremiacao.value = '';
        }else{
            throw("Houve um erro ao tentar cadastrar um novo evento!");
        }
    }).catch(function (resposta){
        console.log(`#ERRO: ${resposta}`);
    });

}

function listarEventos(){
    fetch("/eventos/listar").then(function (resposta){
        if(resposta.ok){
            if(resposta.status == 204){
                alert("Nenhum Evento Cadastrado!");
            }
            resposta.json().then(function (resposta){
                console.log("Eventos Recebidos: ", JSON.stringify(resposta));

                var areaEventos = document.getElementById("container");
                var contadorEventos = 0;

                for(var i = resposta.length - 1; i >= 0 && contadorEventos < 3; i--){
                    var evento = resposta[i];

                    var cardEvento = document.createElement("div");
                    var divTituloEvento = document.createElement("div");
                    var tituloEvento = document.createElement("h1");
                    var conteudoEvento = document.createElement("div");
                    var conteudoTopoEvento = document.createElement("div");
                    var jogoEvento = document.createElement("h3");
                    var conteudoBaixoEvento = document.createElement("div");
                    var conteudoEventoEsq = document.createElement("div");
                    var conteudoEventoDir = document.createElement("div");
                    var dataInicioEvento = document.createElement("h3");
                    var dataFimEvento = document.createElement("h3");
                    var participantesEvento = document.createElement("h3");
                    var premiacaoEvento = document.createElement("h3");

                    tituloEvento.innerHTML = `${evento.nomeEvento}`;
                    jogoEvento.innerHTML = `Jogo: ${evento.nomeJogo}`;

                    //Transformando data para formato DD/MM/AAAA
                    var dataCompInicio = new Date(evento.dataInicio);

                    var anoI = dataCompInicio.getFullYear();
                    var mesI = dataCompInicio.getMonth() + 1;
                    var diaI = dataCompInicio.getDate();

                    var dataCompletaI = `${diaI}/${mesI}/${anoI}`;

                    dataInicioEvento.innerHTML = `Data Início: ${dataCompletaI}`;

                    var dataCompFim = new Date(evento.dataFim);

                    var anoF = dataCompFim.getFullYear();
                    var mesF = dataCompFim.getMonth() + 1;
                    var diaF = dataCompFim.getDate();

                    var dataCompletaF = `${diaF}/${mesF}/${anoF}`;

                    dataFimEvento.innerHTML = `Data Fim: ${dataCompletaF}`;
                    participantesEvento.innerHTML = `Participantes: ${evento.qtdeEquipes}`;
                    premiacaoEvento.innerHTML = `Premiação: $ ${evento.premiacao}`;

                    cardEvento.className = 'cardEvento';
                    divTituloEvento.className = 'divTituloEvento';
                    conteudoEvento.className = 'conteudoEvento';
                    conteudoTopoEvento.className = 'conteudoTopoEvento';
                    conteudoBaixoEvento.className = 'conteudoBaixoEvento';
                    conteudoEventoEsq.className = 'conteudoEventoEsq';
                    conteudoEventoDir.className = 'conteudoEventoDir';

                    divTituloEvento.appendChild(tituloEvento);
                    conteudoTopoEvento.appendChild(jogoEvento);
                    conteudoEventoEsq.appendChild(dataInicioEvento);
                    conteudoEventoEsq.appendChild(dataFimEvento);
                    conteudoEventoDir.appendChild(participantesEvento);
                    conteudoEventoDir.appendChild(premiacaoEvento);
                    conteudoBaixoEvento.appendChild(conteudoEventoEsq);
                    conteudoBaixoEvento.appendChild(conteudoEventoDir);
                    conteudoEvento.appendChild(conteudoTopoEvento);
                    conteudoEvento.appendChild(conteudoBaixoEvento);
                    cardEvento.appendChild(divTituloEvento);
                    cardEvento.appendChild(conteudoEvento);

                    areaEventos.appendChild(cardEvento);

                    contadorEventos++;
                }
            })
        }
    })
}

function listarTodosEventos(){
    fetch("/eventos/listar").then(function (resposta){
        if(resposta.ok){
            if(resposta.status == 204){
                alert("Nenhum Evento Cadastrado!");
            }
            resposta.json().then(function (resposta){
                console.log("Eventos Recebidos: ", JSON.stringify(resposta));

                var areaEventos = document.getElementById("container");

                for(var i = resposta.length - 1; i >= 0; i--){
                    var evento = resposta[i];

                    var cardEvento = document.createElement("div");
                    var divTituloEvento = document.createElement("div");
                    var tituloEvento = document.createElement("h1");
                    var conteudoEvento = document.createElement("div");
                    var conteudoTopoEvento = document.createElement("div");
                    var jogoEvento = document.createElement("h3");
                    var conteudoBaixoEvento = document.createElement("div");
                    var conteudoEventoEsq = document.createElement("div");
                    var conteudoEventoDir = document.createElement("div");
                    var dataInicioEvento = document.createElement("h3");
                    var dataFimEvento = document.createElement("h3");
                    var participantesEvento = document.createElement("h3");
                    var premiacaoEvento = document.createElement("h3");

                    tituloEvento.innerHTML = `${evento.nomeEvento}`;
                    jogoEvento.innerHTML = `Jogo: ${evento.nomeJogo}`;

                    //Transformando data para formato DD/MM/AAAA
                    var dataCompInicio = new Date(evento.dataInicio);

                    var anoI = dataCompInicio.getFullYear();
                    var mesI = dataCompInicio.getMonth() + 1;
                    var diaI = dataCompInicio.getDate();

                    var dataCompletaI = `${diaI}/${mesI}/${anoI}`;

                    dataInicioEvento.innerHTML = `Data Início: ${dataCompletaI}`;

                    var dataCompFim = new Date(evento.dataFim);

                    var anoF = dataCompFim.getFullYear();
                    var mesF = dataCompFim.getMonth() + 1;
                    var diaF = dataCompFim.getDate();

                    var dataCompletaF = `${diaF}/${mesF}/${anoF}`;

                    dataFimEvento.innerHTML = `Data Fim: ${dataCompletaF}`;
                    participantesEvento.innerHTML = `Participantes: ${evento.qtdeEquipes}`;
                    premiacaoEvento.innerHTML = `Premiação: $ ${evento.premiacao}`;

                    cardEvento.className = 'cardEvento';
                    divTituloEvento.className = 'divTituloEvento';
                    conteudoEvento.className = 'conteudoEvento';
                    conteudoTopoEvento.className = 'conteudoTopoEvento';
                    conteudoBaixoEvento.className = 'conteudoBaixoEvento';
                    conteudoEventoEsq.className = 'conteudoEventoEsq';
                    conteudoEventoDir.className = 'conteudoEventoDir';

                    divTituloEvento.appendChild(tituloEvento);
                    conteudoTopoEvento.appendChild(jogoEvento);
                    conteudoEventoEsq.appendChild(dataInicioEvento);
                    conteudoEventoEsq.appendChild(dataFimEvento);
                    conteudoEventoDir.appendChild(participantesEvento);
                    conteudoEventoDir.appendChild(premiacaoEvento);
                    conteudoBaixoEvento.appendChild(conteudoEventoEsq);
                    conteudoBaixoEvento.appendChild(conteudoEventoDir);
                    conteudoEvento.appendChild(conteudoTopoEvento);
                    conteudoEvento.appendChild(conteudoBaixoEvento);
                    cardEvento.appendChild(divTituloEvento);
                    cardEvento.appendChild(conteudoEvento);

                    areaEventos.appendChild(cardEvento);
                }
            })
        }
    })
}