const sendGrid = require("@sendgrid/mail");
require("dotenv").config();
const { APIKEY } = process.env;

const sendmail = async (req, res) => {
  try {
    const { clientName, recipientEmail, message } = req.body;

    sendGrid.setApiKey(APIKEY);

    const emailData = {
      to: recipientEmail,
      from: "smlappadm@gmail.com", // Reemplaza con tu dirección de correo electrónico de SendGrid
      subject: "Incidencia detectada",
      text: message,
    };

    await sendGrid.send(emailData);

    res
      .status(200)
      .json({ message: "Correo electrónico enviado correctamente" });
  } catch (error) {
    console.log("Error al enviar el correo electrónico:", error);
    res.status(500).json({ error: error.message });
  }
};

const sendHiringEmail = async (req, res) => {
  console.log("se manda el mail");
  try {
    const { employeeName, recipientEmail } = req.body;

    sendGrid.setApiKey(APIKEY);

    const emailData = {
      to: recipientEmail,
      from: "akosjev@gmail.com",
      subject: "¡Bienvenido a nuestra empresa!",
      text: `Hola ${employeeName}, te damos la bienvenida a nuestra empresa. ¡Esperamos que tengas una gran experiencia trabajando con nosotros!`,
    };

    await sendGrid.send(emailData);

    res
      .status(200)
      .json({ message: "Correo electrónico enviado correctamente" });
  } catch (error) {
    console.log("Error al enviar el correo electrónico:", error);
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  sendmail,
  sendHiringEmail,
};
