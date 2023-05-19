const sendGrid = require('@sendgrid/mail');
require('dotenv').config();
const {APIKEY} = process.env;

const sendmail = async (req, res) => {
    try {
      const { clientName, recipientEmail, message } = req.body;
  
      sendGrid.setApiKey(APIKEY);

  const emailData = {
    to: recipientEmail,
    from: 'smlappadm@gmail.com', // Reemplaza con tu dirección de correo electrónico de SendGrid
    subject: 'Incidencia detectada',
    text: message,
  };
  
  await sendGrid.send(emailData);
  
  res.status(200).json({ message: 'Correo electrónico enviado correctamente' });
  } catch (error) {
  console.log('Error al enviar el correo electrónico:', error);
  res.status(500).json({ error: error.message });
  }
  }
  
module.exports = {
	
	sendmail
};




