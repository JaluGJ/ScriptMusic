const User = require('../models/user/userSchema')
const Products = require('../models/product/productSchema')
const Sold = require('../models/sold/soldSchema.js')
const Ticket = require('../models/ticket/ticketSchema.js')
const { getTemplateBougthFail, getTemplateBougthSuccess, sendEmail } = require('../config/mail.config.js')


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
        let dateNew = Date().split(" ").slice(1,5)
        const date = `${dateNew[1]} ${dateNew[0]} ${dateNew[2]}, ${dateNew[3]}`

        items.forEach(async (item) => {
          
          try {
            //logica de si es el item no estaba en la lista de ya adquiridos.

            const sold = new Sold({ //nuevo documento creado
              items: item.id,
              quantity: item.count,
              user: userId,
              date: date,
            })

            soldId.push(sold._id)
            const product = await Products.findById(item.id)
            //----- 
            let productToMail = product
            productToMail.count = item.count
            productFinal.push(productToMail)
            const finalStock = product.stock - item.count

            //-----actualizacion de stock de producto
            
            await Products.findByIdAndUpdate(item.id, { $set: { stock: finalStock } }, { new: true })
            await sold.save()
            
            //error dentro del forEach
          } catch (error) {
            console.log("error", error)
          }
        })
        //---- añadir logica de que se cree un ticket
        //meter el arreglo de soldId en un nuevo esquema de ticket
        const ticket = new Ticket({
          userId: userId,
          bought: soldId,
          date: date
        })
          ticket.save()
        //se actualiza al usario con las compras hechas

        const user = await User.findById(userId)
        await User.findByIdAndUpdate(userId, { $set: { bought: [...user.bought , ...soldId] } }, { new: true })

        //envio de mail

        const template = getTemplateBougthSuccess(user.firstName, productFinal, date)
        await sendEmail(user.email, 'Confirmación de pago', template)
        res.json({ msg: 'Payment Successful' })

      } else {
        //el pago no es succesfull
        const user = await User.findById(userId)
        const template = getTemplateBougthFail(user.firstName)
        await sendEmail(user.email, 'Fallo de pago', template)
        res.json({ error: 'Payment Failed' })
      }

    } catch (error) {//error
      console.log(error)
      return res.status(400).send('Algo falló')
    }
  }
}