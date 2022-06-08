var comentarioModel = require("../models/comentarioModel");

function novoComentario(req, res){
  var titulo = req.body.titulo;
  var texto = req.body.texto;
  var fkMateria = req.body.fkMateria;
  var fkUsuario = req.body.fkUsuario;

  comentarioModel.novoComentario(titulo, texto, fkMateria, fkUsuario).then(function (resultado) {
      res.json(resultado);
  }).catch(function (erro) {
    console.log(erro);
    console.log("Houve um erro ao inserir novo comentário, erro: ", erro.sqlMessage);
    res.status(500).json(erro.sqlMessage);
  })
}

function listarComentariosMateria(req, res){

  var fkMateria = req.body.fkMateria;

  comentarioModel.listarComentariosMateria(fkMateria).then(function (resultado) {
    if(resultado.length > 0) {
      console.log(resultado);
        res.status(200).json(resultado);
    } else {
      res.status(204).send("Nenhum comentário encontrado para essa matéria!");
    }
  }).catch(
    function (erro) {
      console.log(erro);
      console.log("Houve um erro ao tentar listar os comentários da matéria! Erro: ", erro.sqlMessage);
      res.status(500).json(erro.sqlMessage);
    }
  );
}

module.exports = {
  novoComentario,
  listarComentariosMateria
}