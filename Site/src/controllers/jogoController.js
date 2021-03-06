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

function cadastrar(req, res){
    var nome = req.body.nome;
    var tipo = req.body.tipo;
    var dataLancamento = req.body.dataLancamentoJogo;

    console.log("SOCORRO" + dataLancamento);

    jogoModel.cadastrar(nome, tipo, dataLancamento).then(function (resultado){
        res.json(resultado);
    }).catch(function (erro){
        console.log(erro);
        console.log("\nHouve um erro ao realizar o cadastro do novo jogo! Erro: ",erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}

function listarJogosAparicoes(req, res){
    jogoModel.listarJogosAparicoes().then(function (resposta){
        if(resposta.length > 0){
            res.status(200).json(resposta);
        } else {
            res.status(204).send("Nenhum resultado encontrado!");
        }
    }).catch(function (erro){
        console.log(erro);
        console.log("\nHouve um erro ao listar os jogos e suas aparições! Erro: ",erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}

function contarJogos(req, res){
    jogoModel.contarJogos().then(function (resposta){
        if(resposta.length > 0){
            res.status(200).json(resposta);
        }else{
            res.status(204).send("Nenhum resultado encontrado!");
        }
    }).catch(function (erro){
        console.log(erro);
        console.log("\nHouve um erro ao contar a quantidade de jogos cadastrados! Erro: ",erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    })
}

module.exports = {
    listar,
    cadastrar,
    listarJogosAparicoes,
    contarJogos
}