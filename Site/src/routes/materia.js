var express = require("express");
var router = express.Router();

var materiaController = require("../controllers/materiaController");

router.get("/", function (req, res) {
    materiaController.testar(req, res);
});

router.post("/novaMateria", function (req, res) {
    materiaController.criarMateria(req, res);
});

router.get("/listar", function (req, res) {
    materiaController.listar(req, res);
});

module.exports = router;