require("dotenv").config();
const { CLIENT_SECRET, CLIENT_ID, REDIRECT_URI, REFRESH_TOKEN } = process.env;
const nodemailer = require("nodemailer");
const { google } = require("googleapis");

const mail = {
  user: "script.music22@gmail.com",
};

const oAuth2Client = new google.auth.OAuth2(
  CLIENT_ID,
  CLIENT_SECRET,
  REDIRECT_URI
);

oAuth2Client.setCredentials({ refresh_token: REFRESH_TOKEN });

const accessToken = oAuth2Client.getAccessToken();

let transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    type: "OAuth2",
    user: mail.user,
    clientId: CLIENT_ID,
    clientSecret: CLIENT_SECRET,
    refreshToken: REFRESH_TOKEN,
    accessToken,
  },
});

const sendEmail = async (email, subject, html) => {
  try {
    await transporter.sendMail({
      from: `${mail.user}🎵`,
      to: email,
      subject,
      text: "Hola, este es un mail de validación de cuenta.",
      html: html,
    });
  } catch (error) {
    console.log("Algo no va bien con el email", error);
  }
};

const getTemplate = (name, token) => {
  return `
      <div id="email___content" style="font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif; width: 500px;">
      <img style="width:100px;" src="https://i.postimg.cc/pTcwbcgr/Sm-Logo02-PNG.png" alt=""><br/>
      <p style="color: #000000;font-size: 30px; font-weight: bold">¡Hola, ${name}!</p>
      <p style="color: #000000;font-size: 15px;">Estamos muy contentos por tenerte con nosotros. Para continuar, necesitamos que confirmes tu cuenta, solo presiona el siguiente botón:</p>
      
      <a style="color: #000000; font-size: 15px; text-decoration: underline;" href="https://sm.up.railway.app/user/confirm/${token}" target="_blank"><button style="background-color: #DD8643; border-radius: 100px; width: 150px; height: 30px; border: 1px solid">Confirmar cuenta</button></a><br/>
      <p>Si tienes problemas o alguna pregunta, responde este mail, siempre estaremos felices de poder ayudarte.</p>
      <p style="color: #000000;font-size: 15px;">Saludos.</br>El equipo de ScriptMusic.</p>
      </div>
      `;
};

module.exports = {
  sendEmail,
  getTemplate,
};
