require("dotenv").config();
const { CLIENT_SECRET, CLIENT_ID, REDIRECT_URI, REFRESH_TOKEN } = process.env;
const nodemailer = require("nodemailer");
const { google } = require("googleapis");

const mail = {
  user: "script.music22@gmail.com",
}

const oAuth2Client = new google.auth.OAuth2(
  CLIENT_ID,
  CLIENT_SECRET,
  REDIRECT_URI
)

oAuth2Client.setCredentials({ refresh_token: REFRESH_TOKEN })

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
})

const sendEmail = async (email, subject, html) => {
  try {
    await transporter.sendMail({
      from: `${mail.user}🎵`,
      to: email,
      subject,
      text: "¡Hola!",
      html: html,
    })
  } catch (error) {
    console.log("Algo no va bien con el email", error)
  }
}

const getTemplate = (name, token) => {
  return `
      <div id="email___content" style="font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif; width: 500px;">
      <img style="width:100px;" src="https://i.postimg.cc/pTcwbcgr/Sm-Logo02-PNG.png" alt=""><br/>
      <p style="color: #000000;font-size: 30px; font-weight: bold">¡Hola, ${name}!</p>
      <p style="color: #000000;font-size: 15px;">Estamos muy contentos por tenerte con nosotros. Para continuar, necesitamos que confirmes tu cuenta, solo presiona el siguiente botón:</p>
      
      <a style="color: #000000; font-size: 15px; text-decoration: underline;" href="https://sm.up.railway.app/user/confirm/token/${token}" target="_blank"><button style="background-color: #DD8643; border-radius: 100px; width: 150px; height: 30px; border: 1px solid">Confirmar cuenta</button></a><br/>
      <p>Si tienes problemas o alguna pregunta, responde este mail, siempre estaremos felices de poder ayudarte.</p>
      <p style="color: #000000;font-size: 15px;">Saludos, el equipo de ScriptMusic.</p>
      </div>
      `
}

const getTemplateBaned = (name) => {
  return `
  <div>Hola ${name}.</div>
  <div>Hemos recibido tu solicitud y ha sucedido un problema, el email que usted intenta registrar ha sido baneado.</div>
  <div>Disculpe los inconvenientes.</div>
  <div>Si tienes problemas o alguna pregunta, responde este mail, siempre estaremos felices de poder ayudarte.</div>
`
}

const getTemplateBanUser = (name) => {
  return `
  <div>Hola ${name}.</div>
  <div>Hemos tomado la medida de banear indefinidamente tu cuenta.</div>
  <div>Disculpe los inconvenientes.</div>
  <div>Si tienes problemas o alguna pregunta, responde este mail, siempre estaremos felices de poder ayudarte.</div>
`
}

const getTemplateUnBanUser = (name) => {
  return `
  <div>Hola ${name}.</div>
  <div>Ya puedes volver a seguir disfrutando de los servicios de ScriptMusic, muchas gracias por elegirnos.</div>
  <div>Si tienes problemas o alguna pregunta, responde este mail, siempre estaremos felices de poder ayudarte.</div>
`
}


const getTemplateBougthFail = (name) => {
    return `
      <div>Hola ${name}.</div>
      <div>Hemos recibido tu compra y ha sucedido un problema.</div>
      <div>Disculpe los inconvenientes.</div>
      <div>Si tienes problemas o alguna pregunta, responde este mail, siempre estaremos felices de poder ayudarte.</div>
  `
}


const getTemplateBougthSuccess = (name) => {
    return `
      <div>Hola ${name}.</div>
      <div>Hemos recibido tu compra y todo se ha procesado correctamente.</div>
      <div>Puedes ver mas detalles de la misma en la sección de 'Mis Compras' en la app.</div>
      <div>Si tienes problemas o alguna pregunta, responde este mail, siempre estaremos felices de poder ayudarte.</div>
    `
}


const getTemplateForgotPassword = (name, token) => {
  return `
  <div>Hola ${name}.</div>
  <div>Hemos recibido una solicitud para restablecer tu contraseña.</div>
  <div>Para restablecer tu contraseña, solo presiona el siguiente botón:</div>
  <a style="color: #000000; font-size: 15px; text-decoration: underline;" href="https://sm.up.railway.app/user/reset/token/${token}" target="_blank"><button style="background-color: #DD8643; border-radius: 100px; width: 150px; height: 30px; border: 1px solid">Restablecer contraseña</button></a><br/>
  <p>Si tienes problemas o alguna pregunta, responde este mail, siempre estaremos felices de poder ayudarte.</p>
  <p>Saludos, el equipo de ScriptMusic.</p>
  `
}

const getTemplateForgotPasswordNewPassword = (name, newPassword) => {
  return `
  <div>Hola ${name}.</div>
  <div>Tu nueva contraseña es la siguiente:</div>
  <div>${newPassword}</div>
  <div>Recuerda cambiarla en el menor tiempo posible.</div>
  <div>Si tienes problemas o alguna pregunta, responde este mail, siempre estaremos felices de poder ayudarte.</div>
  <p>Saludos, el equipo de ScriptMusic.</p>
  `
}

const getTemplateChangeEmail = (name, email, newEmail, token) => {
  return `
  <div>Hola ${name}.</div>
  <div>Hemos recibido una solicitud para cambiar tu email.</div>
  <div>Anterior email: ${email}</div>
  <div>Nuevo email: ${newEmail}</div>
  <div>Para confirmar los cambios, solo presiona el siguiente botón:</div>
  <a style="color: #000000; font-size: 15px; text-decoration: underline;" href="http://localhost:3001/user/change/email/token/${token}" target="_blank"><button style="background-color: #DD8643; border-radius: 100px; width: 150px; height: 30px; border: 1px solid">Cambiar email</button></a><br/>
  <p>Si tienes problemas o alguna pregunta, responde este mail, siempre estaremos felices de poder ayudarte.</p>
  <p>Saludos, el equipo de ScriptMusic.</p>
  `
}

module.exports = {
  sendEmail,
  getTemplate,
  getTemplateBougthFail,
  getTemplateBougthSuccess,
  getTemplateBaned,
  getTemplateBanUser,
  getTemplateUnBanUser,
  getTemplateForgotPassword,
  getTemplateForgotPasswordNewPassword,
  getTemplateChangeEmail
};
