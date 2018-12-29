
const express = require('express')
const parse= require('body-parser');
const path =require('path');
const  ejsLayouts = require("express-ejs-layouts");
const app = express();
const port = 3000;


app.set('view engine','ejs');
app.use(ejsLayouts);

app.use(parse.json());
app.use(parse.urlencoded({extended:false}));

app.set('views',path.join(__dirname,'views'));
app.use(express.static(path.join(__dirname , 'public')));

app.get('/', (req,res)=>{
    res.render('index');
    
    });

app.get('/index', (req,res)=>{
    res.render('index');

});

app.get('/about', (req,res)=>{
    res.render('about');
    });

    app.get('*', (req,res)=>{
        res.render('error');
        });
    

app.listen(port, () => console.log(`Example app listening on port ${port}!`))


