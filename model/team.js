const mongoose = require('mongoose');

const teamSchema = new mongoose.Schema({
	name: {
		type: String,
		required: true,
	},
	bio: {
		type: String,
		required: true,
	},
});

const teamMembers = mongoose.model('teamMembers', teamSchema);

module.exports = teamMembers;
