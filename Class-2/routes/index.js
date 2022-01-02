const express = require('express');


const mainController = require("../controllers/mainController");



const router = express.Router();

router.get("/", mainController.index)

router.get("/detalle/:id", mainController.detallemenu);


module.exports = router;
