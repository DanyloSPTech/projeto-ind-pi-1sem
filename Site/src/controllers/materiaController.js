var materiaModel = require("../models/materiaModel");

var sessoes = [];

function testar(req, res) {
    console.log("ESTAMOS NA materiaController");
    res.json("ESTAMOS FUNCIONANDO!");
}

function novaMateria(req, res){
    var titulo = req.body.titulo;
    var corpo = req.body.corpo;
    var jogo = req.body.jogo;
    var fkJornalista = req.body.jornalistaServer;

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

module.exports = {
    testar,
    novaMateria
}