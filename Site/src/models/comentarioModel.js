var database = require("../database/config");

function novoComentario(texto, fkMateria, fkUsuario){
  console.log("ACESSEI O COMENTARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function novoComentario():", texto, fkMateria, fkUsuario);

  var instrucao = `
    INSERT INTO Comentario (texto, fkMateria, fkUsuario) VALUES ('${texto}', ${fkMateria}, ${fkUsuario});
  `;

  console.log("Executando a instrução SQL: \n" + instrucao);
  return database.executar(instrucao);
}

function listarComentariosMateria(fkMateria){
  console.log("ACESSEI O COMENTARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNEREFUSED'.\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function listarComentariosMateria():", fkMateria);

  var instrucao = `
    SELECT username, texto, Usuario.fkJogo, Usuario.organizacao FROM Usuario INNER JOIN Comentario ON Usuario.idUsuario = Comentario.fkUsuario INNER JOIN Materia ON Comentario.fkMateria = Materia.idMateria WHERE idMateria = ${fkMateria} ORDER BY idComentario;
  `;

  console.log("Executando a instrução SQL: \n" + instrucao);
  return database.executar(instrucao);
}

module.exports = {
  novoComentario,
  listarComentariosMateria
}