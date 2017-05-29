
require('babel-register')({
    presets: ['react', 'es2015']
});

var express = require('express');

var app = express();
var router = require('./app/routes/index');

app.use(express.static('public'));
app.use(router);

var PORT = 3000;
app.listen(PORT, function () {
    console.log('http://localhost:' + PORT);
});
