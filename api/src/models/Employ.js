const mongoose = require('mongoose');
const validator = require('validator');
const validPositions = ['corredor', 'vendedor', 'lider'];

const EmploySchema = new mongoose.Schema(
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
		position: {
			type: String,
			require: true,
			validate: {
				validator: function (value) {
					return validPositions.includes(value);
				},
				message: 'La posición debe ser "corredor", "vendedor" o "lider"',
			},
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

EmploySchema.pre('find', function () {
	this.where({ deleted: false });
});

const Employ = new mongoose.model('employ', EmploySchema);

module.exports =  Employ ;
