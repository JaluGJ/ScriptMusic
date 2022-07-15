require('dotenv').config()
const { CLIENT_SECRET, CLIENT_ID, REDIRECT_URI, REFRESH_TOKEN } = process.env
const nodemailer = require('nodemailer');
const { google } = require('googleapis');

const mail = {
    user: 'script.music22@gmail.com',
}

const oAuth2Client=new google.auth.OAuth2(
    CLIENT_ID,
    CLIENT_SECRET,
    REDIRECT_URI
)

oAuth2Client.setCredentials({refresh_token:REFRESH_TOKEN});

const accessToken = oAuth2Client.getAccessToken()

let transporter = nodemailer.createTransport({
    service:"gmail",
    auth: {
    type: "OAuth2",
    user: mail.user,
    clientId: CLIENT_ID,
    clientSecret: CLIENT_SECRET,
    refreshToken: REFRESH_TOKEN,
    accessToken
}});

  const sendEmail = async (email, subject, html) => {
    try {
        
        await transporter.sendMail({
            from: `${mail.user}🎵`, 
            to: email,
            subject,
            text: "Hola, este es un mail de validacion de cuenta.", 
            html: html,
        });

    } catch (error) {
        console.log('Algo no va bien con el email', error);
    }
  }

  const getTemplate = (name, token) => {
      return `
        <head>
        </head>
        
        <div id="email___content">
            <img src="https://i.postimg.cc/pTcwbcgr/Sm-Logo02-PNG.png" alt="logoScript">
            <h2>Hola ${name}.</h2>
            <p>Para confirmar tu cuenta, ingresa al siguiente enlace :</p>
            <a
                href="http://localhost:3001/user/confirm/${token}"
                target="_blank"
            >Confirmar Cuenta.</a>
            <p>Si no has solicitado una cuenta, ignora este correo.</p>
            <p>El equipo de ScriptMusic🎶</p>
        </div>
      `;
  }

  module.exports = {
    sendEmail,
    getTemplate
  }