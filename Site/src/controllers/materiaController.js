var materiaModel = require("../models/materiaModel");

function testar(req, res) {
    console.log("ESTAMOS NA materiaController");
    res.json("ESTAMOS FUNCIONANDO!");
}

function criarMateria(req, res){
    var titulo = req.body.titulo;
    var corpo = req.body.corpo;
    var jogo = req.body.jogo;
    var fkJornalista = req.body.fkJornalista;

    if(titulo == undefined){
        res.status(400).send("Seu titulo está undefined!");
    }else if(corpo == undefined){
        res.status(400).send("Seu corpo está undefined!");
    }else if(jogo == undefined){
        res.status(400).send("Seu jogo está undefined!");
    }else if(fkJornalista == undefined){
        res.status(400).send("Seu jornalista está undefined!");
    }else{

        materiaModel.novaMateria(titulo, corpo, jogo, fkJornalista)
            .then(
                function(resultado){
                    res.json(resultado);
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log(
                        "\nHouve um erro ao inserir uma nova matéria! Erro: ",
                        erro.sqlMessage
                    );
                    res.status(500).json(erro.sqlMessage);
                }
            );

    }
}

function listar(req, res){
    materiaModel.listar()
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

module.exports = {
    testar,
    criarMateria,
    listar
}