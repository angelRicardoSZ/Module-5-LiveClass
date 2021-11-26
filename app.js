const express = require("express");
const path = require("path");

const app = express();

const port = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname,"public")));

const rutaMain = require("./routes/mainRouter.js");



app.use("/", rutaMain);

app.listen(port, () => {
    console.log("Servidor funcionando");
});

