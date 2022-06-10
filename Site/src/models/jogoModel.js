var database = require("../database/config");

function listar(){
    console.log("ACESSEI O JOGO MODEL  \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function listar()");
    var instrucao = `
        SELECT * FROM Jogo;
    `;
    console.log("Executando a instrução SQL: \n", + instrucao);
    return database.executar(instrucao);
}

function cadastrar(nome, tipo, dataLancamento){
    console.log(`DATA: ${dataLancamento}`);
    console.log("ACESSEI O JOGO MODEL  \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrar()", nome, tipo, dataLancamento);
    var instrucao = `
        INSERT INTO Jogo (nome, tipo, dataLancamento) VALUES ('${nome}', '${tipo}', '${dataLancamento}');
    `;
    console.log("Executando a instrução SQL: \n", + instrucao);
    return database.executar(instrucao);
}

module.exports = {
    listar,
    cadastrar
}