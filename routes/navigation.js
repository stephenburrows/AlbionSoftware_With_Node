const express = require('express');
const router = express.Router();

// homepage
router.get('/', (req, res) => {
	return res.render('index');
});

router.get('/index', (req, res) => {
	return res.render('index');
});

// about

var abouts=[{
	name:'stephen',
	age:42
},
{
	name:'Julie',
	age:41
},
{
	name:'Elizabeth',
	age:5
}
];
router.get('/about', (req, res) => {

	return res.render('about',{abouts: abouts});
});

// service
router.get('/service', (req, res) => {
	return res.render('service');
});

// team
router.get('/team', (req, res) => {
	return res.render('team');
});

// conect
router.get('/conect', (req, res) => {
	return res.render('conect');
});


// error
router.get('/*', (req, res) => {
	return res.render('error');
});

module.exports = router;
