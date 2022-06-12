var database = require("../database/config");

function novaMateria(titulo, corpo, fkJogo, fkJornalista){
    console.log("ACESSEI A MATERIA MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrar():", titulo, corpo, fkJogo, fkJornalista);

    var instrucao = `
        INSERT INTO Materia (titulo, corpo, fkJogo, fkJornalista) VALUES ('${titulo}', '${corpo}', '${fkJogo}', '${fkJornalista}');
    `;

    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function listar(){
    console.log("ACESSEI A MATERIA MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function listar()");
    var instrucao = `
        SELECT Materia.*, Usuario.nome, Jogo.nome AS 'nomeJogo' FROM Materia INNER JOIN Usuario ON Usuario.idUsuario = Materia.fkJornalista INNER JOIN Jogo ON Materia.fkJogo = Jogo.idJogo;
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function selecionarMateria(fkMateria){
    console.log("ACESSEI A MATERIA MODEL \n \n\t\t >> Se aqui der erro de 'Error': connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function selecionarMateria()");
    var instrucao = `
        SELECT nome, titulo, corpo FROM materia INNER JOIN usuario ON usuario.idUsuario = materia.fkJornalista WHERE fkJornalista = idusuario AND idMateria = ${fkMateria};
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

module.exports = {
    novaMateria,
    listar,
    selecionarMateria
};