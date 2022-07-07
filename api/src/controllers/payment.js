require('dotenv').config()
const { calculateOrderAmount } = require('../middlewares/calculateOrderAmount')
const { STRIPE } = process.env

const stripe = require('stripe')(STRIPE)

module.exports = {
    paymentCard: async (req, res) => {
        const { items } = req.body
        try {
            const paymentIntent = await stripe.paymentIntents.create({
                amount: calculateOrderAmount(items),
                currency: 'usd',
                automatic_payment_methods: {
                    enabled: true,
                }
            })
            return res.send({
                clientSecret: paymentIntent.client_secret,
            })
        } catch (error) {
            console.log(error)
            return res.status(400).send('Algo falló')
        }
    }
}