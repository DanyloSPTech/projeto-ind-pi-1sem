var database = require("../database/config");

function novoComentario(titulo, texto, fkMateria, fkUsuario){
  console.log("ACESSEI O COMENTARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function novoComentario():", titulo, texto, fkMateria, fkUsuario);

  var instrucao = `
    INSERT INTO Mensagem (titulo, texto, fkMateria, fkUsuario) VALUES ('${titulo}', '${texto}', ${fkMateria}, ${fkUsuario});
  `;

  console.log("Executando a instrução SQL: \n" + instrucao);
  return database.executar(instrucao);
}

function listarComentariosMateria(fkMateria){
  console.log("ACESSEI O COMENTARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNEREFUSED'.\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function listarComentariosMateria():", fkMateria);

  var instrucao = `
    SELECT username, texto, Usuario.jogo FROM Usuario INNER JOIN Mensagem ON Usuario.idUsuario = Mensagem.fkUsuario INNER JOIN Materia ON Mensagem.fkMateria = Materia.idMateria WHERE idMateria = ${fkMateria} ORDER BY idMensagem;
  `;

  console.log("Executando a instrução SQL: \n" + instrucao);
  return database.executar(instrucao);
}

module.exports = {
  novoComentario,
  listarComentariosMateria
}