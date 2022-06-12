var express = require("express");
var router = express.Router();

var jogoController = require("../controllers/jogoController");

router.get("/listar", function (req, res){
    jogoController.listar(req, res);
});

router.get("/listarJogosAparicoes", function (req, res){
    jogoController.listarJogosAparicoes(req, res);
});

router.get("/contarJogos", function (req, res){
    jogoController.contarJogos(req, res);
});

router.post("/cadastrar", function (req, res){
    jogoController.cadastrar(req, res);
});

module.exports = router;