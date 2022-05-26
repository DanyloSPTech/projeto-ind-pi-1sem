var express = require("express");
var router = express.Router();

var materiaController = require("../controllers/materiaController");

router.get("/", function (req, res) {
    materiaController.testar(req, res);
});

router.get("/novaMateria", function (req, res) {
    materiaController.novaMateria(req, res);
});

module.exports = router;