const mongoose = require('mongoose');
const validator = require('validator');

const LeadSchema = new mongoose.Schema(
	{
		id: {
			type: Number,
			required: true,
			unique: true,
			trim: true,
		},
		name: {
			type: String,
			required: true,
			trim: true,
		},
		profesion: {
			type: String,
			required: true,
			trim: true,
		},
		nivel: {
			type: Number,
			required: true,
			trim: true,
			enum: [1, 2, 3],
		},
		phone: {
			type: String,
			required: true,
			trim: true,
		},
		status: {
			type: Boolean,
			required: true,
			default: false,
			trim: true,
		},
		email: {
			type: String,
			required: true,
			unique: true,
			trim: true,
			validate: {
				validator: validator.isEmail,
				message: 'El correo electrónico debe tener un formato válido',
			},
		},
		web: {
			type: String,
			required: true,
			trim: true,
		},
		instagram: {
			type: String,
			required: true,
			trim: true,
		},
		nivel: {
			type: String,
			required: true,
			trim: true,
		},
		deleted: {
			type: Boolean,
			default: false,
			select: false,
		},
	},
	{
		timestamps: false,
	}
);

LeadSchema.pre('find', function () {
	this.where({ deleted: false });
});

const Lead = mongoose.model('Lead', LeadSchema);

module.exports = Lead;
