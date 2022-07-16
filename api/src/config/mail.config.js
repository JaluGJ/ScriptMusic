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
      <div id="email___content" style="font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif; background-color: #1f1f1f; width: 500px; align-items: center; display: flex;flex-direction: column; border-radius: 15px; 
  border: 10px solid #ffffff; border-width: medium;outline: 3px solid #1f1f1f;">
          <div style="width: 300px;text-align: center;padding-top: 10px;">
              <img style="width:300px;filter: saturate(0%) invert(100%);
              -webkit-filter: saturate(0%) invert(100%);
              -moz-filter: saturate(0%) invert(100%); box-shadow: 7px 10px 32px 0px rgba(255,255,255,0.75);
  -webkit-box-shadow: 7px 10px 32px 0px rgba(223, 171, 61, 0.75);
  -moz-box-shadow: 7px 10px 32px 0px rgba(255,255,255,0.75);border-radius: 50%;" src="https://i.postimg.cc/pTcwbcgr/Sm-Logo02-PNG.png" alt="">
              <h2 style="color: #ffffff;font-size: 30px;text-shadow: 4px 0px 13px #ffffff;">Hola ${name}</h2>
          </div>
          <p style="color: #ffffff;font-size: 15px;">Para confirmar tu cuenta, ingresa al siguiente enlace</p>
          <a style="color: #ffffff;font-size: 20px;text-decoration: none; padding-bottom: 10px;" href="https://sm.up.railway.app/user/confirm/${token}" target="_blank">Confirmar Cuenta</a>
      </div>
      `;
  }

  module.exports = {
    sendEmail,
    getTemplate
  }