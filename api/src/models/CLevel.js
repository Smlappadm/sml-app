const mongoose = require('mongoose');
const validator = require('validator');

const CLevelSchema = new mongoose.Schema(
	{
		name: {
			type: String,
			require: true,
		},
		email: {
			type: String,
			required: true,
			unique: true,
			validate: {
				validator: validator.isEmail,
				message: 'El correo electrónico debe tener un formato válido',
			},
		},
		phone: {
			type: String,
			require: true,
			default: 0,
		},
		image: {
			type: String,
			require: true,
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

CLevelSchema.pre('find', function () {
	this.where({ deleted: false });
});

const CLevel = new mongoose.model('clevel', CLevelSchema);

module.exports = CLevel;
