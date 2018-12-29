var express = require('express')
var bodyParser = require('body-parser')
var path = require('path')

var app =express();

var logger =  (req, res, next)=> {
    console.log('Logging');
    next();
};

app.use(logger);
app.get('/', (req,res) => {
    res.send('hello world');
});
app.listen(3000,()=>{ console.log('server open on 3000');
})

