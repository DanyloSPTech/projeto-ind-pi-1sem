var database = require("../database/config");

function cadastrar(nome, dataInicio, dataFim, qtdeEquipes, premiacao, fkJogo){
    console.log("Acessei o model do evento \n \n\t\t  >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrar()", nome, dataInicio, dataFim, qtdeEquipes, premiacao, fkJogo);
    var instrucao = `
        INSERT INTO Evento (nome, dataInicio, dataFim, qtdeEquipes, premiacao, fkJogo) VALUES ('${nome}', '${dataInicio}', '${dataFim}', ${qtdeEquipes}, ${premiacao}, ${fkJogo});
    `;
    console.log("Executando a instrução SQL: \n", + instrucao);
    return database.executar(instrucao);
}

function listar(){
    console.log("Acessei o model do evento \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function listar()");
    var instrucao = `
        SELECT Evento.nome AS 'nomeEvento', dataInicio, dataFim, qtdeEquipes, premiacao, Jogo.nome AS 'nomeJogo' FROM Evento INNER JOIN Jogo ON Evento.fkJogo = Jogo.idJogo;
    `;
    console.log("Executando a instrução SQL: \n", + instrucao);
    return database.executar(instrucao);
}

module.exports = {
    cadastrar,
    listar
}