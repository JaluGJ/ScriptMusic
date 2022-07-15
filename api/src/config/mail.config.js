const nodemailer = require('nodemailer');
const { google } = require('googleapis');

const mail = {
    user: 'script_music@yahoo.com',
    pass: '9658ikJU#',
}
// const oAuth2Client=new google.auth.OAuth2(
//     CLIENTD_ID,
//     CLIENT_SECRET,
//     REDIRECT_URI
//   );
//   OAuth2Client.setCredentials({refresh_token:REFRESH_TOKEN});

let transporter = nodemailer.createTransport({
    host: "ScriptMusic 🎵",
    port: 2525,
    tls: {
        rejectUnauthorized: false
    },
    secure: false, // true for 465, false for other ports
    auth: {
      user: mail.user, // generated ethereal user
      pass: mail.pass, // generated ethereal password
    },
  });

  const sendEmail = async (email, subject, html) => {
    try {
        
        await transporter.sendMail({
            from: `ScriptMusic 🎵 <${ mail.user }>`, 
            to: email,
            subject,
            text: "Hola, este es un mail de validacion de cuenta.", 
            html,
        });

    } catch (error) {
        console.log('Algo no va bien con el email', error);
    }
  }

  const getTemplate = (name, token) => {
      return `
        <head>
            <link rel="stylesheet" href="./style.css">
        </head>
        
        <div id="email___content">
            <img src="https://i.imgur.com/eboNR82.png" alt="">
            <h2>Hola ${ name }</h2>
            <p>Para confirmar tu cuenta, ingresa al siguiente enlace</p>
            <a
                href="http://localhost:3001/user/confirm/${ token }"
                target="_blank"
            >Confirmar Cuenta</a>
        </div>
      `;
  }

  module.exports = {
    sendEmail,
    getTemplate
  }