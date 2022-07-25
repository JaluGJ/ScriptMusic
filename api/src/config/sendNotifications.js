const User = require("../models/user/userSchema.js");
const fetch = require("node-fetch");

async function sendMultiplePushNotifications(body) {
  try {
    const users = await User.find({});
    users
      .filter((user) => user.pushToken)
      .map(async (user) => {
        try {
          let data = await fetch("https://exp.host/--/api/v2/push/send", {
            method: "POST",
            headers: {
              accept: "application/json",
              "accept-encoding": "gzip, deflate",
              "content-type": "application/json",
            },
            body: JSON.stringify({
              to: user.pushToken, 
              title: "Atencion estimados usuarios!",
              body: `Tenemos una nueva promo disponible: ${body}`,
            }),
          });
          console.log(data)
        } catch (err) {
          console.log(err);
        }
      });
  } catch (err) {
    console.log(err);
  }
}

module.exports = sendMultiplePushNotifications;
