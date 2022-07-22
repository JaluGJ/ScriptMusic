const User = require('../models/user/userSchema.js')


async function sendMultiplePushNotifications({ body }) {

    const users = await User.find({})
    const sendUser = users.filter(user => user.pushToken)

    await fetch('https://exp.host/--/api/v2/push/send', {
      method: 'POST',
      headers: {
        host: 'exp.host',
        accept: 'application/json',
        'accept-encoding': 'gzip, deflate',
        'content-type': 'application/json',
      },
      body: JSON.stringify({
        to: sendUser, // <-- replace with a list of Expo push tokens
        title: 'Mira nuestra nueva oferta!',
        body: `Tenemos una nueva promo disponible: ${body}`,
      }),
    });
}

module.exports = sendMultiplePushNotifications
