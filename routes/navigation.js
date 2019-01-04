const express = require('express');
const router = express.Router();
const Comment = require('../model/comment');

// homepage
router.get('/', (req, res) => {
	return res.render('index');
});

router.get('/index', (req, res) => {
	return res.render('index');
});

// about

router.get('/about', (req, res) => {
	return res.render('about');
});

// service
router.get('/service', (req, res) => {
	return res.render('service');
});

// team
var teamMembers = [
	{
		name: 'stephen',
		age: 42,
	},
	{
		name: 'Julie',
		age: 41,
	},
	{
		name: 'Elizabeth',
		age: 5,
	},
];
router.get('/team', (req, res) => {
	console.log(req.app.locals.mong.version);
	return res.render('team', { teamMembers: teamMembers });
});

// connect
router.get('/connect', (req, res) => {
	return res.render('connect');
});

//Handles the posting from the comment section
router.post('/connect', (req, res) => {
	const { name, email, comment } = req.body;

	const new_comment = new Comment({
		name,
		email,
		comment,
	});

	new_comment
		.save()
		.then(() => {
			//need to hjave an action for the saving of the comment.
			res.redirect('/');
		})
		.catch(() => {
			//need to add action for error.
		});
});
// error
router.get('/*', (req, res) => {
	return res.render('error');
});

module.exports = router;
