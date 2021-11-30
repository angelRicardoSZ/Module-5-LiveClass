const path = require("path");
 
/* GET home page. */
const controller = {
    index:(req,res) => {
        return res.render(path.join(__dirname,"../views/index"));
    },
};

module.exports =controller;


//router.get('/', function(req, res, next) {
//    res.render('index', { title: 'Express' });
//  });