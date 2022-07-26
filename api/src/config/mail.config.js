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
      text: "¡Hola!",
      html: html,
    });
  } catch (error) {
    console.log("Algo no va bien con el email", error);
  }
};

const getTemplate = (name, token) => {
  return `
  <div id="email___content"
  style="font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif; width: 350px;align-items: center;display: flex;flex-direction: column;background-color: rgb(238, 238, 238);padding: 5px;">
  <div style="width:100%;align-items: center; justify-content: center; display: flex;flex-direction: column;">

      <img style="width:150px;padding: 5px;" src="https://i.postimg.cc/pTcwbcgr/Sm-Logo02-PNG.png" alt=""><br />
      <p style="color: #000000;font-size: 25px; font-weight: bold">¡Bienvenido!</p>
  </div>
  <div
  style="width:98%;align-items: center; justify-content: center; display: flex;flex-direction: column;background-color: white;border-radius: 10px;padding: 4px;">
  <p style="color: #000000;font-size: 20px; font-weight: bold">Hola, ${name}</p>
  <p style="color: #000000;font-size: 15px; text-align: center;">Estamos muy contentos por tenerte con nosotros. Para continuar,
          necesitamos que confirmes tu cuenta, solo presiona el siguiente botón:</p>

      <p style="color: #000000;font-size: 15px;text-align: center;">Si tienes problemas o alguna pregunta, responde este mail,
          siempre
          estaremos felices de poder ayudarte.</p>
      <a style="color: #000000; font-size: 15px; text-decoration: underline;"
          href="https://sm.up.railway.app/user/confirm/token/${token}" target="_blank"><button
              style="background-color: #000000; border-radius: 5px; width: 150px; height: 30px; border: 1px solid; cursor: pointer;color: white;">Confirmar cuenta</button></a><br />
      <p style="color: #000000;font-size: 15px;">Saludos, el equipo de ScriptMusic.</p>

  </div>
</div>
      `;
};

const getTemplateBaned = (name) => {
  return `
  <div id="email___content" style="font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif; width: 500px;">
  <img style="width:100px;" src="https://i.postimg.cc/pTcwbcgr/Sm-Logo02-PNG.png" alt=""><br/>
  <p style="color: #000000;font-size: 30px; font-weight: bold">¡Hola, ${name}!</p>
  <p style="color: #000000;font-size: 15px;">Hemos recibido su solicitud y ha sucedido un problema, el email que usted intenta registrar ha sido baneado. Disculpe los inconvenientes.</p>
  <p style="color: #000000;font-size: 15px;">Si tienes problemas o alguna pregunta, responde este mail, siempre estaremos felices de poder ayudarte.</p>
  <p style="color: #000000;font-size: 15px;">Saludos, el equipo de ScriptMusic.</p>
  </div>
`;
};

const getTemplateBanUser = (name) => {
  return `
  <div id="email___content" style="font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif; width: 500px;">
  <img style="width:100px;" src="https://i.postimg.cc/pTcwbcgr/Sm-Logo02-PNG.png" alt=""><br/>
  <p style="color: #000000;font-size: 30px; font-weight: bold">¡Hola, ${name}!</p>
  <p style="color: #000000;font-size: 15px;">Hemos tomado la medida de banear indefinidamente tu cuenta. Disculpe los inconvenientes.</p>
  <p style="color: #000000;font-size: 15px;">Si tienes problemas o alguna pregunta, responde este mail, siempre estaremos felices de poder ayudarte.</p>
  <p style="color: #000000;font-size: 15px;">Saludos, el equipo de ScriptMusic.</p>
  </div>
`;
};

const getTemplateUnBanUser = (name) => {
  return `
  <div id="email___content" style="font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif; width: 500px;">
  <img style="width:100px;" src="https://i.postimg.cc/pTcwbcgr/Sm-Logo02-PNG.png" alt=""><br/>
  <p style="color: #000000;font-size: 30px; font-weight: bold">¡Hola, ${name}!</p>
  <p style="color: #000000;font-size: 15px;">Tu cuenta ha sido desbaneada. Ya puedes volver a seguir disfrutando de los servicios de ScriptMusic, muchas gracias por elegirnos.</p>
  <p style="color: #000000;font-size: 15px;">Si tienes problemas o alguna pregunta, responde este mail, siempre estaremos felices de poder ayudarte.</p>
  <p style="color: #000000;font-size: 15px;">Saludos, el equipo de ScriptMusic.</p>
  </div>
`;
};

const getTemplateBougthFail = (name) => {
  return `
  <div id="email___content" style="font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif; width: 500px;">
  <img style="width:100px;" src="https://i.postimg.cc/pTcwbcgr/Sm-Logo02-PNG.png" alt=""><br/>
  <p style="color: #000000;font-size: 30px; font-weight: bold">¡Hola, ${name}!</p>
  <p style="color: #000000;font-size: 15px;">Hemos recibido tu orden de compra y ha sucedido un problema. Disculpe los inconvenientes.</p>
  <p style="color: #000000;font-size: 15px;">Si tienes problemas o alguna pregunta, responde este mail, siempre estaremos felices de poder ayudarte.</p>
  <p style="color: #000000;font-size: 15px;">Saludos, el equipo de ScriptMusic.</p>
  </div>
  `;
};

const getTemplateBougthSuccess = (name, products, date) => {
  return `
  <div id="email___content" style="font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif; width: 500px;">
  <img style="width:100px;" src="https://i.postimg.cc/pTcwbcgr/Sm-Logo02-PNG.png" alt=""><br/>
  <p style="color: #000000;font-size: 30px; font-weight: bold">¡Hola, ${name}!</p>
  <p style="color: #000000;font-size: 15px;">Hemos recibido tu orden de compra y todo se ha procesado correctamente.</p>
  <p style="color: #000000;font-size: 15px;">Fecha de compra: ${date}</p>
  <p style="color: #000000;font-size: 15px;">Productos:</p>
  <div>
  ${products?.map(
    (e) => `
    <img style="width:320px;" src="${e.image}" alt="product"><br/>
    <p style="color: #000000;font-size: 15px;">Precio: ${e.price}$</p>
    <p style="color: #000000;font-size: 15px;">Cantidad: ${e.count}.</p>
    `
  )}
  </div>
  <p style="color: #000000;font-size: 15px;">Si tienes problemas o alguna pregunta, responde este mail, siempre estaremos felices de poder ayudarte.</p>
  <p style="color: #000000;font-size: 15px;">Saludos, el equipo de ScriptMusic.</p>
  </div>
    `;
};

const getTemplateForgotPassword = (name, token) => {
  return `
  <div id="email___content" style="font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif; width: 500px;">
  <img style="width:100px;" src="https://i.postimg.cc/pTcwbcgr/Sm-Logo02-PNG.png" alt=""><br/>
  <p style="color: #000000;font-size: 30px; font-weight: bold">¡Hola, ${name}!</p>
  <p style="color: #000000;font-size: 15px;">Hemos recibido una solicitud para restablecer tu contraseña.</p>
  <p style="color: #000000;font-size: 15px;">Si solicitaste restablecer tu contraseña, presiona el siguiente botón. Si no hiciste esta solicitud, por favor, ignora este mail.</p>
  <a style="color: #000000; font-size: 15px; text-decoration: underline;" href="https://sm.up.railway.app/user/reset/token/${token}" target="_blank"><button style="background-color: #DD8643; border-radius: 100px; width: 150px; height: 40px; border: 1px solid; cursor: pointer;">Restablecer contraseña</button></a><br/>
  <p style="color: #000000;font-size: 15px;">Si tienes problemas o alguna pregunta, responde este mail, siempre estaremos felices de poder ayudarte.</p>
  <p style="color: #000000;font-size: 15px;">Saludos, el equipo de ScriptMusic.</p>
  </div>
  `;
};

const getTemplateForgotPasswordNewPassword = (name, newPassword) => {
  return `
  <div id="email___content" style="font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif; width: 500px;">
  <img style="width:100px;" src="https://i.postimg.cc/pTcwbcgr/Sm-Logo02-PNG.png" alt=""><br/>
  <p style="color: #000000;font-size: 30px; font-weight: bold">¡Hola, ${name}!</p>
  <p style="color: #000000;font-size: 15px;">Tu nueva contraseña provisional es la siguiente:</p>
  <p style="color: #000000;font-size: 15px; border: 1px solid #000000; height: 30px; width: 150px; text-align: center;">${newPassword}</p>
  <p style="color: #000000;font-size: 15px;">Recuerda cambiarla en el menor tiempo posible (sección "Mi perfil").</p>
  <p style="color: #000000;font-size: 15px;">Si tienes problemas o alguna pregunta, responde este mail, siempre estaremos felices de poder ayudarte.</p>
  <p style="color: #000000;font-size: 15px;">Saludos, el equipo de ScriptMusic.</p>
  </div>
  `;
};

const getTemplateChangeEmail = (name, email, newEmail, token) => {
  return `
  <div id="email___content" style="font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif; width: 500px;">
  <img style="width:100px;" src="https://i.postimg.cc/pTcwbcgr/Sm-Logo02-PNG.png" alt=""><br/>
  <p style="color: #000000;font-size: 30px; font-weight: bold">¡Hola, ${name}!</p>
  <p style="color: #000000;font-size: 15px;">Hemos recibido una solicitud para cambiar tu email.</p>
  <p style="color: #000000;font-size: 15px;">Anterior email: ${email}</p>
  <p style="color: #000000;font-size: 15px;">Nuevo email: ${newEmail}</p>
  <p style="color: #000000;font-size: 15px;">Si solicitaste cambiar tu email, presiona el siguiente botón. Si no hiciste esta solicitud, por favor, ignora este mail.</p>
  <a style="color: #000000; font-size: 15px; text-decoration: underline;" href="https://sm.up.railway.app/user/change/email/token/${token}" target="_blank"><button style="background-color: #DD8643; border-radius: 100px; width: 150px; height: 30px; border: 1px solid; cursor: pointer">Cambiar email</button></a><br/>
  <p style="color: #000000;font-size: 15px;">Si tienes problemas o alguna pregunta, responde este mail, siempre estaremos felices de poder ayudarte.</p>
  <p style="color: #000000;font-size: 15px;">Saludos, el equipo de ScriptMusic.</p>
  </div>
  `;
};

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
  getTemplateChangeEmail,
};
