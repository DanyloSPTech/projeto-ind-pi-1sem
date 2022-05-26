var database = require("../database/config");

function novaMateria(titulo, corpo, jogo, fkJornalista){
    console.log("ACESSEI A MATERIA MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrar():", titulo, corpo, jogo, fkJornalista);

    var instrucao = `
        INSERT INTO Materia (titulo, corpo, jogo, fkJornalista) VALUES ('${titulo}', '${corpo}', '${jogo}', '${fkJornalista}');
    `;

    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

module.exports = {
    novaMateria
};