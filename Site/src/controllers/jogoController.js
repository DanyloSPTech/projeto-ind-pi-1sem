var jogoModel = require("../models/jogoModel");

function listar(req, res){
    jogoModel.listar().then(function (resposta){
        if(resposta.length > 0){
            res.status(200).json(resposta);
        } else {
            res.status(204).send("Nenhum resultado encontrado.");
        }
    }).catch(
        function (erro){
            console.log(erro);
            console.log("Houve um erro ao listar os jogos cadastrados! Erro: ", erro.sqlMessage);
            res.status(500).json(erro.sqlMessage);
        }
    );
}

module.exports = {
    listar
}