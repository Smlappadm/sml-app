require("dotenv").config();

const mongoose = require("mongoose");

const { Employ } = require("./models/Employ");
const { Lead } = require("./models/Lead");

const DB_URI = "mongodb+srv://smlappadm:Grupo0136a@smlapp.ptdconm.mongodb.net/";

mongoose
  .connect(DB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("********* CONEXIÓN CORRECTA *******");
  })
  .catch((err) => {
    console.log("********* ERROR DE CONEXIÓN *******");
    console.error(err);
  });

// const crearEmploy = () => {
// 	Employ.create({
// 		name: 'nico',
// 		email: 'nico@gmail.com',
// 		phone: '345568816',
// 		position: 'lider',
// 		image: 'http://',
// 		delete: false,
// 	});
// };

// const crearLead = () => {
// 	Lead.create({});
// };

//crearEmploy();
// crearLead();
