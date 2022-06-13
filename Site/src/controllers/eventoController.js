var eventoModel = require("../models/eventoModel");

function cadastrar(req, res){

    var nome = req.body.nome;
    var dataInicio = req.body.dataInicio;
    var dataFim = req.body.dataFim;
    var qtdeEquipes = req.body.qtdeEquipes;
    var premiacao = req.body.premiacao;
    var fkJogo = req.body.fkJogo;

    eventoModel.cadastrar(nome, dataInicio, dataFim, qtdeEquipes, premiacao, fkJogo).then(function (resposta){
        res.json(resposta);
    }).catch(function (erro){
        console.log(erro);
        console.log("\nHouve um erro ao realizar o cadastro de um novo evento! Erro: ",erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });

}

function listar(req, res){
    eventoModel.listar().then(function (resultado){
        if(resultado.length > 0){
            res.status(200).json(resultado);
        }else{
            res.status(204).send("Nenhum evento encontrado!");
        }
    }).catch(function (erro){
        console.log(erro);
        console.log("Houve um erro ao listar os eventos cadastrados! Erro: ", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}

module.exports = {
    cadastrar,
    listar
}