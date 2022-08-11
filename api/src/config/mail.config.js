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
        style="font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif; width: 350px;background-color: rgb(231, 231, 231);">
        <div style="width:100%;">

            <img style="width:150px;padding: 5px;margin-left: 95px;" src="https://i.postimg.cc/pTcwbcgr/Sm-Logo02-PNG.png" alt=""><br />
            <p style="color: #141414;font-size: 32px; font-weight: bold;text-align: center;">¡Bienvenido!</p>
        </div>
        <div
        style="background-color: white;padding: 4px;border-radius: 30px 30px 0px 0px;">
        <p style="color: #141414;font-size: 20px; font-weight: bold;text-align: center;">Hola, ${name}</p>
        <p style="color: #141414;font-size: 15px; text-align: center;">Estamos muy contentos por tenerte con nosotros. Para continuar, necesitamos que confirmes tu cuenta, solo presiona el siguiente botón:</p>

            <p style="color: #141414;font-size: 15px;text-align: center;">Si tienes problemas o alguna pregunta, responde este mail, siempre estaremos felices de poder ayudarte.</p>
            <a style="color: #141414; font-size: 15px; text-decoration: underline;margin-left: 95px;"
                href="https://script-music.herokuapp.com/user/confirm/token/${token}" target="_blank"><button
                    style="background-color: #141414; border-radius: 5px; width: 150px; height: 30px; border: 1px solid; cursor: pointer;color: white;">Confirmar cuenta</button></a><br />
            <p style="color: #141414;font-size: 15px;text-align: center;">Saludos, el equipo de ScriptMusic.</p>

        </div>
    </div>
      `;
};

const getTemplateBaned = (name) => {
  return `
  <div id="email___content"
        style="font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif; width: 350px;background-color: rgb(231, 231, 231);">
        <div style="width:100%;">

            <img style="width:150px;padding: 5px;margin-left: 95px;" src="https://i.postimg.cc/pTcwbcgr/Sm-Logo02-PNG.png" alt=""><br />
            <p style="color: #141414;font-size: 32px; font-weight: bold;text-align: center;">¡Disculpanos!</p>
        </div>
        <div
        style="background-color: white;padding: 4px;border-radius: 30px 30px 0px 0px;">
        <p style="color: #141414;font-size: 20px; font-weight: bold;text-align: center;">Hola, ${name}</p>
        <p style="color: #141414;font-size: 15px; text-align: center;">Hemos recibido su solicitud y ha sucedido un problema, el email que usted intenta registrar ha sido baneado. Disculpe los inconvenientes.</p>

            <p style="color: #141414;font-size: 15px;text-align: center;">Si tienes problemas o alguna pregunta, responde este mail, siempre estaremos felices de poder ayudarte.</p>
            
            <p style="color: #141414;font-size: 15px;text-align: center;">Saludos, el equipo de ScriptMusic.</p>

        </div>
    </div>
`;
};

const getTemplateBanUser = (name) => {
  return `
  <div id="email___content"
        style="font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif; width: 350px;background-color: rgb(231, 231, 231);">
        <div style="width:100%;">

            <img style="width:150px;padding: 5px;margin-left: 95px;" src="https://i.postimg.cc/pTcwbcgr/Sm-Logo02-PNG.png" alt=""><br />
            <p style="color: #141414;font-size: 32px; font-weight: bold;text-align: center;">¡Atencion!</p>
        </div>
        <div
        style="background-color: white;padding: 4px;border-radius: 30px 30px 0px 0px;">
        <p style="color: #141414;font-size: 20px; font-weight: bold;text-align: center;">Hola, ${name}</p>
        <p style="color: #141414;font-size: 15px; text-align: center;">Hemos tomado la medida de banear indefinidamente tu cuenta. Disculpe los inconvenientes.</p>

            <p style="color: #141414;font-size: 15px;text-align: center;">Si tienes problemas o alguna pregunta, responde este mail, siempre estaremos felices de poder ayudarte.</p>
            
            <p style="color: #141414;font-size: 15px;text-align: center;">Saludos, el equipo de ScriptMusic.</p>

        </div>
    </div>
`;
};

const getTemplateUnBanUser = (name) => {
  return `
  <div id="email___content"
        style="font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif; width: 350px;background-color: rgb(231, 231, 231);">
        <div style="width:100%;">

            <img style="width:150px;padding: 5px;margin-left: 95px;" src="https://i.postimg.cc/pTcwbcgr/Sm-Logo02-PNG.png" alt=""><br />
            <p style="color: #141414;font-size: 32px; font-weight: bold;text-align: center;">¡Cuenta desbaneada!</p>
        </div>
        <div
        style="background-color: white;padding: 4px;border-radius: 30px 30px 0px 0px;">
        <p style="color: #141414;font-size: 20px; font-weight: bold;text-align: center;">Hola, ${name}</p>
        <p style="color: #141414;font-size: 15px; text-align: center;">Tu cuenta ha sido desbaneada. Ya puedes volver a seguir disfrutando de los servicios de ScriptMusic, muchas gracias por elegirnos.</p>

            <p style="color: #141414;font-size: 15px;text-align: center;">Si tienes problemas o alguna pregunta, responde este mail, siempre estaremos felices de poder ayudarte.</p>
            
            <p style="color: #141414;font-size: 15px;text-align: center;">Saludos, el equipo de ScriptMusic.</p>

        </div>
    </div>
`;
};

const getTemplateBougthFail = (name) => {
  return `
  <div id="email___content"
        style="font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif; width: 350px;background-color: rgb(231, 231, 231);">
        <div style="width:100%;">

            <img style="width:150px;padding: 5px;margin-left: 95px;" src="https://i.postimg.cc/pTcwbcgr/Sm-Logo02-PNG.png" alt=""><br />
            <p style="color: #141414;font-size: 32px; font-weight: bold;text-align: center;">¡Compra fallida!</p>
        </div>
        <div
        style="background-color: white;padding: 4px;border-radius: 30px 30px 0px 0px;">
        <p style="color: #141414;font-size: 20px; font-weight: bold;text-align: center;">Hola, ${name}</p>
        <p style="color: #141414;font-size: 15px; text-align: center;">Hemos recibido tu orden de compra y ha sucedido un problema. Disculpe los inconvenientes.</p>

            <p style="color: #141414;font-size: 15px;text-align: center;">Si tienes problemas o alguna pregunta, responde este mail, siempre estaremos felices de poder ayudarte.</p>
            
            <p style="color: #141414;font-size: 15px;text-align: center;">Saludos, el equipo de ScriptMusic.</p>

        </div>
    </div>
  `;
};

const getTemplateBougthSuccess = (name, products, date) => {
  return `
  <div id="email___content"
        style="font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif; width: 350px;background-color: rgb(231, 231, 231);">
        <div style="width:100%;">

            <img style="width:150px;padding: 5px;margin-left: 95px;"
                src="https://i.postimg.cc/pTcwbcgr/Sm-Logo02-PNG.png" alt=""><br />
            <p style="color: #141414;font-size: 32px; font-weight: bold;text-align: center;">¡Compra exitosa!</p>
        </div>
        <div style="background-color: white;padding: 4px;border-radius: 30px 30px 0px 0px;">
            <p style="color: #141414;font-size: 20px; font-weight: bold;text-align: center;">Hola, ${name}</p>
            <p style="color: #141414;font-size: 15px; text-align: center;">Hemos recibido tu orden de compra y todo se
                ha procesado correctamente.</p>
            <p style="color: #000000;font-size: 15px;text-align: center;">Fecha de compra: ${date}</p>
            <p style="color: #000000;font-size: 15px;text-align: center;">Productos:</p>
            <div style="margin-left: 10px;">
                ${products?.map(
    (e) => `
                <div style="border-bottom: #00000080 1px solid;width: 300px;margin: 4px;border-radius: 20px;">
                    <img style="width:150px;margin-left: 70px;" src="${e.image}" alt="product" /><br />
                    <p style="color: #000000;font-size: 15px;text-align: center;">Precio: ${e.price}$</p>
                    <p style="color: #000000;font-size: 15px;text-align: center;">Cantidad: ${e.count}.</p>
                </div>
                
                `)}
            </div>
            <p style="color: #141414;font-size: 15px;text-align: center;">Si tienes problemas o alguna pregunta,
                responde este mail, siempre estaremos felices de poder ayudarte.</p>
            <p style="color: #141414;font-size: 15px;text-align: center;">Saludos, el equipo de ScriptMusic.</p>

        </div>
    </div>
    `;
};

const getTemplateForgotPassword = (name, token) => {
  return `
  <div id="email___content"
        style="font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif; width: 350px;background-color: rgb(231, 231, 231);">
        <div style="width:100%;">

            <img style="width:150px;padding: 5px;margin-left: 95px;" src="https://i.postimg.cc/pTcwbcgr/Sm-Logo02-PNG.png" alt=""><br />
            <p style="color: #141414;font-size: 32px; font-weight: bold;text-align: center;">¡Contraseña restablecida!</p>
        </div>
        <div
        style="background-color: white;padding: 4px;border-radius: 30px 30px 0px 0px;">
        <p style="color: #141414;font-size: 20px; font-weight: bold;text-align: center;">Hola, ${name}</p>
        <p style="color: #141414;font-size: 15px; text-align: center;">Hemos recibido una solicitud para restablecer tu contraseña.</p>
        <p style="color: #141414;font-size: 15px; text-align: center;">Si solicitaste restablecer tu contraseña, presiona el siguiente botón. Si no hiciste esta solicitud, por favor, ignora este mail.</p>
        <a style="color: #141414; font-size: 15px; text-decoration: underline;margin-left: 95px;"
                href="https://script-music.herokuapp.com/user/reset/token/${token}" target="_blank"><button
                    style="background-color: #141414; border-radius: 5px; width: 150px; height: 35px; border: 1px solid; cursor: pointer;color: white;">Restablecer contraseña</button></a><br />
            <p style="color: #141414;font-size: 15px;text-align: center;">Si tienes problemas o alguna pregunta, responde este mail, siempre estaremos felices de poder ayudarte.</p>
            
            <p style="color: #141414;font-size: 15px;text-align: center;">Saludos, el equipo de ScriptMusic.</p>

        </div>
    </div>
  `;
};

const getTemplateForgotPasswordNewPassword = (name, newPassword) => {
  return `
  <div id="email___content"
        style="font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif; width: 350px;background-color: rgb(231, 231, 231);">
        <div style="width:100%;">

            <img style="width:150px;padding: 5px;margin-left: 95px;" src="https://i.postimg.cc/pTcwbcgr/Sm-Logo02-PNG.png" alt=""><br />
            <p style="color: #141414;font-size: 32px; font-weight: bold;text-align: center;">¡Contraseña nueva!</p>
        </div>
        <div
        style="background-color: white;padding: 4px;border-radius: 30px 30px 0px 0px;">
        <p style="color: #141414;font-size: 20px; font-weight: bold;text-align: center;">Hola, ${name}</p>
        <p style="color: #141414;font-size: 15px; text-align: center;">Tu nueva contraseña provisional es la siguiente:</p>
        <p style="color: #141414;font-size: 30px; text-align: center;">${newPassword}</p>
        
            <p style="color: #141414;font-size: 15px;text-align: center;">Si tienes problemas o alguna pregunta, responde este mail, siempre estaremos felices de poder ayudarte.</p>
            
            <p style="color: #141414;font-size: 15px;text-align: center;">Saludos, el equipo de ScriptMusic.</p>

        </div>
    </div>
  `;
};

const getTemplateChangeEmail = (name, email, newEmail, token) => {
  return `
  <div id="email___content"
        style="font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif; width: 350px;background-color: rgb(231, 231, 231);">
        <div style="width:100%;">

            <img style="width:150px;padding: 5px;margin-left: 95px;" src="https://i.postimg.cc/pTcwbcgr/Sm-Logo02-PNG.png" alt=""><br />
            <p style="color: #141414;font-size: 32px; font-weight: bold;text-align: center;">¡Cambio de email!</p>
        </div>
        <div
        style="background-color: white;padding: 4px;border-radius: 30px 30px 0px 0px;">
        <p style="color: #141414;font-size: 20px; font-weight: bold;text-align: center;">Hola, ${name}</p>
        <p style="color: #141414;font-size: 15px; text-align: center;">Anterior email: ${email}</p>
        <p style="color: #141414;font-size: 15px; text-align: center;">Nuevo email: ${newEmail}</p>
        <p style="color: #141414;font-size: 15px; text-align: center;">Si solicitaste cambiar tu email, presiona el siguiente botón. Si no hiciste esta solicitud, por favor, ignora este mail.</p>
        <a style="color: #141414; font-size: 15px; text-decoration: underline;margin-left: 95px;"
                href="https://script-music.herokuapp.com/user/change/email/token/${token}" target="_blank"><button
                    style="background-color: #141414; border-radius: 5px; width: 150px; height: 35px; border: 1px solid; cursor: pointer;color: white;">Cambiar email</button></a><br />
            <p style="color: #141414;font-size: 15px;text-align: center;">Si tienes problemas o alguna pregunta, responde este mail, siempre estaremos felices de poder ayudarte.</p>
            
            <p style="color: #141414;font-size: 15px;text-align: center;">Saludos, el equipo de ScriptMusic.</p>

        </div>
    </div>
  `;
};

const getTemplateAdminRegister = (name) => {
  return `
  <div id="email___content"
    style="font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif; width: 350px;background-color: rgb(231, 231, 231);">
    <div style="width:100%;">

        <img style="width:150px;padding: 5px;margin-left: 95px;" src="https://i.postimg.cc/pTcwbcgr/Sm-Logo02-PNG.png"
            alt=""><br />
        <p style="color: #141414;font-size: 32px; font-weight: bold;text-align: center;">¡Bienvenido Admin!</p>
    </div>
    <div style="background-color: white;padding: 4px;border-radius: 30px 30px 0px 0px;">
        <p style="color: #141414;font-size: 20px; font-weight: bold;text-align: center;">Hola, ${name}</p>
        <p style="color: #141414;font-size: 15px; text-align: center;">Para acceder, ingresa con tu email y contraseña
            al siguiente enlace</p>
        <a style="color: #141414; font-size: 15px; text-decoration: underline;margin-left: 95px;"
            href="https://script-music.herokuapp.com/admin" target="_blank"><button
                style="background-color: #141414; border-radius: 5px; width: 150px; height: 35px; border: 1px solid; cursor: pointer;color: rgb(240, 240, 240);">Ingresar</button></a><br />
        <p style="color: #141414;font-size: 15px;text-align: center;">Saludos, el equipo de ScriptMusic.</p>

    </div>
</div>
  `;
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
  getTemplateChangeEmail,
  getTemplateAdminRegister
};
