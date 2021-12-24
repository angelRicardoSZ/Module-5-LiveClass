const express = require('express');
const main = express.Router();

const authentication = require('../middlewares/authenticationAdmin');

main.get('/', (req,res) => {
    res.send('hola mundo');
})

main.get('/admin', authentication, (req,res) => {
    res.send(`Hola Admin ${req.user}`);
})

module.exports = main;
