const mongoose = require('mongoose');

const CommentSchema = new mongoose.Schema({
	name: {
		type: String,
		required: true
	},
	email: {
		type: String,
		required: true
	},
	comment:
	{
		type:String,
		required:true
	
	}

});

const comment = mongoose.model('Comment', CommentSchema);

module.exports = comment;