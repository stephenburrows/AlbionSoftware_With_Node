
const express = require('express');
const path = require('path');
const ejsLayouts = require('express-ejs-layouts');
const app = express();
const port = process.env.port || 3000;
const navigation_routes = require('./routes/navigation');
const mongoose = require('mongoose');
const db = require('./config/keys').mongoURI;

app.set('view engine', 'ejs');

app.use(ejsLayouts);

app.use(express.urlencoded({ extended: false }));

app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')));
app.use(navigation_routes);

mongoose.connect(
	db,
	{ useNewUrlParser: true }
)
	.then(() =>{
		console.log('MongoDB Connected');		
	})
	.catch(err => console.log(err));

app.listen(port, () => {
	// eslint-disable-next-line no-console
	return console.log(`Example app listening on port ${port}!`);
});
