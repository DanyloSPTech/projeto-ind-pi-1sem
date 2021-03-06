var usuarioModel = require("../models/usuarioModel");

var sessoes = [];

function testar(req, res) {
    console.log("ENTRAMOS NA usuarioController");
    res.json("ESTAMOS FUNCIONANDO!");
}

function listar(req, res) {
    usuarioModel.listar()
        .then(function (resultado) {
            if (resultado.length > 0) {
                res.status(200).json(resultado);
            } else {
                res.status(204).send("Nenhum resultado encontrado!")
            }
        }).catch(
            function (erro) {
                console.log(erro);
                console.log("Houve um erro ao realizar a consulta! Erro: ", erro.sqlMessage);
                res.status(500).json(erro.sqlMessage);
            }
        );
}

function contarJogo(req, res){
    usuarioModel.contarJogo()
        .then(function (resultado) {
            if(resultado.length > 0){
                res.status(200).json(resultado);
            } else{
                res.status(204).send("Nenhum resultado encontrado!");
            }
        }).catch(
            function (erro) {
                console.log(erro);
                console.log("Houve um erro ao realizar a consulta! Erro: ", erro.sqlMessage);
                res.status(500).json(erro.sqlMessage);
            }
        );
}

function jogoDestaque(req, res){
    usuarioModel.jogoDestaque()
        .then(function (resultado) {
            if(resultado.length > 0){
                res.status(200).json(resultado);
            } else{
                res.status(204).send("Nenhum resultado encontrado!");
            }
        }).catch(
            function (erro) {
                console.log(erro);
                console.log("Houve um erro ao realizar a consulta! Erro: ", erro.sqlMessage);
                res.status(500).json(erro.sqlMessage);
            }
        );
}

function contarUsuario(req, res){
    usuarioModel.contarUsuario()
        .then(function (resultado) {
            if(resultado.length > 0){
                res.status(200).json(resultado);
            } else{
                res.status(204).send("Nenhum resultado encontrado!");
            }
        }).catch(
            function (erro) {
                console.log(erro);
                console.log("Houve um erro ao realizar a consulta! Erro: ", erro.sqlMessage);
                res.status(500).json(erro.sqlMessage);
            }
        );
}

function contarJornalista(req, res){
    usuarioModel.contarJornalista()
        .then(function (resultado) {
            if(resultado.length > 0){
                res.status(200).json(resultado);
            } else{
                res.status(204).send("Nenhum resultado encontrado!");
            }
        }).catch(
            function (erro) {
                console.log(erro);
                console.log("Houve um erro ao realizar a consulta! Erro: ", erro.sqlMessage);
                res.status(500).json(erro.sqlMessage);
            }
        );
}

function entrar(req, res) {
    var email = req.body.emailServer;
    var senha = req.body.senhaServer;

    if (email == undefined) {
        res.status(400).send("Seu email est?? undefined!");
    } else if (senha == undefined) {
        res.status(400).send("Sua senha est?? indefinida!");
    } else {
        
        usuarioModel.entrar(email, senha)
            .then(
                function (resultado) {
                    console.log(`\nResultados encontrados: ${resultado.length}`);
                    console.log(`Resultados: ${JSON.stringify(resultado)}`); // transforma JSON em String

                    if (resultado.length == 1) {
                        console.log(resultado);
                        res.json(resultado[0]);
                    } else if (resultado.length == 0) {
                        res.status(403).send("Email e/ou senha inv??lido(s)");
                    } else {
                        res.status(403).send("Mais de um usu??rio com o mesmo login e senha!");
                    }
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log("\nHouve um erro ao realizar o login! Erro: ", erro.sqlMessage);
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }

}

function cadastrar(req, res) {
    // Crie uma vari??vel que v?? recuperar os valores do arquivo cadastro.html
    var nome = req.body.nomeServer;
    var username = req.body.usernameServer;
    var email = req.body.emailServer;
    var senha = req.body.senhaServer;
    var dataNasc = req.body.dataNascServer;
    var organizacao = req.body.organizacaoServer;
    var jogo = req.body.jogoServer;

    // Fa??a as valida????es dos valores
    if (nome == undefined) {
        res.status(400).send("Seu nome est?? undefined!");
    } else if (email == undefined) {
        res.status(400).send("Seu email est?? undefined!");
    } else if (senha == undefined) {
        res.status(400).send("Sua senha est?? undefined!");
    } else if(username == undefined){
        res.status(400).send("Seu username est?? undefined!");
    } else if(dataNasc == undefined){
        res.status(400).send("Sua data de nascimento est?? undefined!");
    } else if(jogo == undefined){
        res.status(400).send("Seu jogo est?? undefined!");
    } else {
        
        // Passe os valores como par??metro e v?? para o arquivo usuarioModel.js
        usuarioModel.cadastrar(username, nome, email, senha, dataNasc, organizacao, jogo)
            .then(
                function (resultado) {
                    res.json(resultado);
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log(
                        "\nHouve um erro ao realizar o cadastro! Erro: ",
                        erro.sqlMessage
                    );
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }
}

function cadastrarJornalista(req, res){

    var nome = req.body.nomeServer;
    var username = req.body.usernameServer;
    var email = req.body.emailServer;
    var senha = req.body.senhaServer;
    var dataNasc = req.body.dataNascServer;
    var jogo = req.body.jogoServer;

    // Fa??a as valida????es dos valores
    if (nome == undefined) {
        res.status(400).send("Seu nome est?? undefined!");
    } else if (email == undefined) {
        res.status(400).send("Seu email est?? undefined!");
    } else if (senha == undefined) {
        res.status(400).send("Sua senha est?? undefined!");
    } else if(username == undefined){
        res.status(400).send("Seu username est?? undefined!");
    } else if(dataNasc == undefined){
        res.status(400).send("Sua data de nascimento est?? undefined!");
    } else if(jogo == undefined){
        res.status(400).send("Seu jogo est?? undefined!");
    } else {
        usuarioModel.cadastrarJornalista(username, nome, email, senha, dataNasc, jogo)
            .then(
                function (resultado) {
                    res.json(resultado);
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log(
                        "\nHouve um erro ao realizar o cadastro! Erro: ",
                        erro.sqlMessage
                    );
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }

}

function contarFansOrg(req, res){
    usuarioModel.contarFansOrg().then(function (resposta){
        if(resposta.length > 0){
            res.status(200).json(resposta);
        }else{
            res.status(204).send("Nenhum dado encontrado!");
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao realizar a consulta! Erro: ", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}

module.exports = {
    entrar,
    cadastrar,
    cadastrarJornalista,
    listar,
    contarJogo,
    jogoDestaque,
    contarUsuario,
    contarJornalista,
    testar,
    contarFansOrg
}