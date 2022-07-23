const User = require("../models/user/userSchema.js");
const fetch = require("node-fetch");

async function sendMultiplePushNotifications(body) {
  try {
    const users = await User.find({});
    users
      .filter((user) => user.pushToken)
      .map(async (user) => {
        try {
          await fetch("https://exp.host/--/api/v2/push/send", {
            method: "POST",
            headers: {
              accept: "application/json",
              "accept-encoding": "gzip, deflate",
              "content-type": "application/json",
            },
            body: JSON.stringify({
              to: user.pushToken, // <-- replace with a list of Expo push tokens
              title: "Atencion estimados usuarios!",
              body: `Tenemos una nueva promo disponible: ${body}`,
            }),
          });
        } catch (err) {
          console.log(err);
        }
      });
  } catch (err) {
    console.log(err);
  }
}

module.exports = sendMultiplePushNotifications;
