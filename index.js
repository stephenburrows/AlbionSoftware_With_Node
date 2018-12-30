
const express = require('express');

const path = require('path');
const ejsLayouts = require('express-ejs-layouts');
const app = express();
const port = process.env.port || 3000;
// const navRoutes = require('./routes\navigation.js')

const poo = require('./routes/navigation.js');

app.set('view engine', 'ejs');

app.use(ejsLayouts);

app.use(express.urlencoded({ extended: false }));

app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', poo);
app.get('/index', poo);
app.get('/about', poo);
app.get('/team', poo);
app.get('/conect', poo);
app.get('/service', poo);
app.get('/*', poo);
/*
app.get('/index', (req, res) => {
  res.render('index')
})

app.get('/about', (req, res) => {
  res.render('about')
})

app.get('*', (req, res) => {
  res.render('error')
}) */

app.listen(port, () => {
	// eslint-disable-next-line no-console
	return console.log(`Example app listening on port ${port}!`);
});
