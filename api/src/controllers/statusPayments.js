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
        //logica de guardados y demas con items y userId

        //const bought = items.map(itm => itm.id)
        //await User.findByIdAndUpdate(userId, { $set: { bought: bought } }, { new: true })
        const soldId = []
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
            const finalStock = product.stock - item.count
            await Products.findByIdAndUpdate(item.id, { $set: { stock: finalStock } }, { new: true })
            await sold.save()

          } catch (error) {
            console.log("error", error)
          }
        })
        const user = await User.findById(userId)
        // console.log(user)
        await User.findByIdAndUpdate(userId, { $set: { bought: [...user.bought , ...soldId] } }, { new: true })
        const template = await getTemplateBougth(user)
        await sendEmail(user.email, 'Confirmación de pago', template)
        res.json({ msg: 'Payment Successful' })
      } else {
        res.json({ error: 'Payment Failed' })
      }
    } catch (error) {
      console.log(error)
      return res.status(400).send('Algo falló')
    }
  }
}