var express = require("express");
var router = express.Router();

var usuarioController = require("../controllers/usuarioController");

router.get("/", function (req, res) {
    usuarioController.testar(req, res);
});

router.get("/listar", function (req, res) {
    usuarioController.listar(req, res);
});

router.get("/contarJogo", function (req, res) {
    usuarioController.contarJogo(req, res);
});

router.get("/jogoDestaque", function (req, res){
    usuarioController.jogoDestaque(req, res);
});

router.get("/contarUsuario", function (req, res){
    usuarioController.contarUsuario(req, res);
});

router.get("/contarJornalista", function (req, res){
    usuarioController.contarJornalista(req, res);
});

router.get("/contarFansOrg", function(req, res){
    usuarioController.contarFansOrg(req, res);
});

//Recebendo os dados do html e direcionando para a função cadastrar de usuarioController.js
router.post("/cadastrar", function (req, res) {
    usuarioController.cadastrar(req, res);
});

router.post("/cadastrarJornalista", function(req, res){
    usuarioController.cadastrarJornalista(req, res);
});

router.post("/autenticar", function (req, res) {
    usuarioController.entrar(req, res);
});

module.exports = router;