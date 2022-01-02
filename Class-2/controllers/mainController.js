/* GET home page. */
const listaPlatos  = require("./listplatillos");

const controller = {
    index:(req,res) => {
        res.render("index",{listaPlatos:listaPlatos})
    },
    detallemenu: (req,res) => {
        const id = req.params.id
        res.render("detalleMenu",{platillo: listaPlatos[id-1]})
    },
};



module.exports =controller;


//router.get('/', function(req, res, next) {
//    res.render('index', { title: 'Express' });
//  });