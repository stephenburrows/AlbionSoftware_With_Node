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
teamMembers;
module.exports = teamMembers;
