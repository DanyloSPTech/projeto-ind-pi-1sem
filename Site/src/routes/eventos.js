var express = require("express");
var router = express.Router();

var eventoController = require("../controllers/eventoController");

router.post("/cadastrar", function (req, res){
    eventoController.cadastrar(req, res);
});

router.get("/listar", function (req, res){
    eventoController.listar(req, res);
});

module.exports = router;