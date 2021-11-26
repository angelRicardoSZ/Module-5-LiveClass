const express = require("express");

const rutaMain = require("./routes/mainRouter.js");

const app = express();

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log("Servidor funcionando")
});


app.use("/", rutaMain);