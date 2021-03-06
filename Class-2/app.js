var express = require('express');
var path = require('path');
var app = express();

var indexRouter = require('./routes/index.js');


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);


//app.use('/detalle', indexRouter);

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Servidor funcionando en el puerto ${port}`);
});
