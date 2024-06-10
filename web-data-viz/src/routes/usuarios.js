var express = require("express");
var router = express.Router();

var usuarioController = require("../controllers/usuarioController");

//Recebendo os dados do html e direcionando para a função cadastrar de usuarioController.js
router.post("/cadastrar", function (req, res) {
    usuarioController.cadastrar(req, res);
})

router.post("/autenticar", function (req, res) {
    usuarioController.autenticar(req, res);
});


router.post("/salvarPontuacao", function (req, res) {
    usuarioController.salvarPontuacao(req, res);
})

router.get("/carrosQueSaemMais", function (req, res) {
    usuarioController.carrosQueSaemMais(req, res);
})

router.get("/resultadoCarro", function (req, res) {
    usuarioController.resultadoCarro(req, res);
})

router.get("/qtdPessoas/:carroResultado", function (req, res) {
    usuarioController.qtdPessoas(req, res);
})

module.exports = router;