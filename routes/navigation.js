const express = require('express');
const router = express.Router();
const Comment = require('../model/comment');
const team = require('../model/team');

// homepage
router.get('/', (req, res) => {
	return res.render('index');
});

router.get('/index', (req, res) => {
	return res.render('index');
});

// technologies

router.get('/technologies', (req, res) => {
	return res.render('technologies');
});

// service
router.get('/testimonials', (req, res) => {
	Comment.find({})
		.then((doc) => {
			var comments = [];
			console.log(doc.length);
			for (let index = 0; index < doc.length; index++) {
				comments.push({
					name: doc[index].name,
					comment: doc[index].comment,
				});
			}
			comments.reverse();
			return res.render('testimonials', { Comments: comments });
		})
		.catch((err) => {
			console.error(err);
		});

	//return res.render('service');
});

router.get('/team', (req, res) => {
	team
		.find({})
		.then((doc) => {
			var members = [];
			for (let index = 0; index < doc.length; index++) {
				members.push({
					key: doc[index].name.split(' ').join(''),
					name: doc[index].name,
					bio: doc[index].bio,
				});
			}

			return res.render('team', { teamMembers: members });
		})
		.catch((err) => {
			console.error(err);
		});
});

// connect
router.get('/connect', (req, res) => {
	return res.render('connect');
});

//Handles the posting from the comment section
router.post('/connect', (req, res) => {
	const { name, email, comment } = req.body;

	const newComment = new Comment({
		name,
		email,
		comment,
	});

	newComment
		.save()
		.then(() => {
			//need to have an action for the saving of the comment.
			res.redirect('testimonials');
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
