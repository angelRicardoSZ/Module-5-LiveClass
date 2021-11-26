# Controllers



> app.js

`const express = require("express");`

`const rutapage = require("./routes/productos.js");`

`const app = express();`

`app.listen(3000, () => console.log("Corriendo"));`

`app.use("/page1,rutapage");`



> en routes/page1

`let express = require("express");`

`let controller = require("../controllers/pageController.js")`

`let router = express.Router();`

`router.get("/page1", controller.page1);`

`moduler.exports = router;`



> controllers/ pageController.js

`let pagecontroller = {`

​	`page1: (req, res) => {`

​		`res.send("Page1")`

​	`}`,

​	`page2: (req, res) => {`

​		`res.send("Page2")`

​	`}`,

`}`

`module.exports =  Controller;`  # Export





Arquitectura de archivos

controllers

​	pageControllers

modules

node_modules

routes

app.js

package-lock.json	

package.json



# Rutas parametrizadas

Parámetros obligatorios

```javascript
app.get("/productos/:id", function (req, res){
    // action
    let idProducto = req.params.id;
    let idProducto = req.params.nombre || "Sin nombre";
})
```

Parámetros opcionales

```
app.get("/productos/:id?", function (req, res){
    // action
})
```

Routes

