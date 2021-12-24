const fs = require("fs");
const path =require("path");

const logPath=path.join(__dirname, "../logs/userLogs.txt");
const logs =fs.readFileSync(logPath, "utf-8");


function middleware1(req,res,next){
   
    const { url } = req
    
    const log = `El usuario ingreso a la ruta: ${url}\n`;
    console.log(log);

    fs.appendFileSync(logPath, log, "utf-8")


    next();
}

module.exports = middleware1;