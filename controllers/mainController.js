const path = require("path");
 

<<<<<<< HEAD
mainController = {
​	home: (req,res) => {
    res.sendFile(path.join(__dirname, "../views/home.html"));
=======
const mainController = {
​	home: (req, res) => {
        res.sendFile(path.join(__dirname, "../views/home.html"));
   }, 
       about: (req, res) => {
        res.sendFile(path.join(__dirname, "../views/about.html"));
>>>>>>> e997e51fd2d26cb85165613fab5e525ee7a4048d
   }
};

module.exports =  mainController;

