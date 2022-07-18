const User = require('../models/user/userSchema')
const Products = require('../models/product/productSchema')
const Sold = require('../models/sold/soldSchema.js')
const { getTemplateBougth, sendEmail } = require('../config/mail.config.js')


/*
{
    "items": [
    {
      "price": 95.99,
      "image": "https://res.cloudinary.com/dzonjuriq/image/upload/v1657387337/script_music_img/alba_natural_natural-removebg-preview_pmhyla.png",
      "id": "62c9e52f89ca48a583966a39",
      "count": 1
    },
        {
      "price": 55.7,
      "image": "https://res.cloudinary.com/dzonjuriq/image/upload/v1657387337/script_music_img/alba_natural_natural-removebg-preview_pmhyla.png",
      "id": "62c9e52f89ca48a583966a39",
      "count": 1
    },
        {
      "price": 99.2,
      "image": "https://res.cloudinary.com/dzonjuriq/image/upload/v1657387337/script_music_img/alba_natural_natural-removebg-preview_pmhyla.png",
      "id": "62c9e52f89ca48a583966a39",
      "count": 1
    }
  ],
 "userId": "62cf22b9d279ac9be7930ca5",
    "status":"Successful"
} 
*/
module.exports = {
  statusPayment: async (req, res) => {
    const { items, userId, status } = req.body
    try {
      if (status === 'Successful') {
        const soldId = []
        const productFinal = []
        items.forEach(async (item) => {
          try {
            const sold = new Sold({
              items: item.id,
              quantity: item.count,
              user: userId,
              date: Date(),
            })
            soldId.push(sold._id)
            const product = await Products.findById(item.id)
            productFinal.push(product)
            const finalStock = product.stock - item.count
            await Products.findByIdAndUpdate(item.id, { $set: { stock: finalStock } }, { new: true })
            await sold.save()

          } catch (error) {
            console.log("error", error)
          }
        })
        const user = await User.findById(userId)
        await User.findByIdAndUpdate(userId, { $set: { bought: [...user.bought , ...soldId] } }, { new: true })
        const template = getTemplateBougth(user.email, productFinal)
        await sendEmail(user.email, 'Confirmación de pago', template)
        res.json({ msg: 'Payment Successful' })
      } else {
        const user = await User.findById(userId)
        const template = getTemplateBougth(user.email)
        await sendEmail(user.email, 'Fallo de pago', template)
        res.json({ error: 'Payment Failed' })
      }
    } catch (error) {
      console.log(error)
      return res.status(400).send('Algo falló')
    }
  }
}