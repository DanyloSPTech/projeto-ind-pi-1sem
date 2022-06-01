var database = require("../database/config");

function novaMensagem(fkMateria, fkUsuario, titulo, texto){
    console.log("ACESSEI A MENSAGEM MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function novaMensagem()");
    var instrucao = `
        INSERT INTO mensagem (titulo, texto, fkusuario, fkmateria) VALUES ('${titulo}', '${texto}', ${fkUsuario}, ${fkMateria});
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}