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

function selecionarMateria(req, res){
    var fkMateria = req.body.fkMateriaServer;
    materiaModel.selecionarMateria(fkMateria)
        .then(
            function (resultado) {
                console.log(`\nResultados encontrados: ${resultado.length}`);
                console.log(`Resultados: ${JSON.stringify(resultado)}`);
                if (resultado.length == 1) {
                    console.log(resultado);
                    res.json(resultado[0]);
                } else if (resultado.length == 0) {
                    res.status(403).send("Algo deu errado!");
                } else {
                    res.status(403).send("Mais de uma matéria selecionada!");
                }
            }
        ).catch(
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
    selecionarMateria,
    listar
}