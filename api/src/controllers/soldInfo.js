const Sold = require('../models/sold/soldSchema.js')
const User = require('../models/user/userSchema.js')
const { getTokenData } = require('../config/jwt.config.js')
const { estructurador } = require('../middlewares/soldStructurer.js')



/*
{
  "item": {
    "model":
    "category":

  }
  "user":
  "quantity":
  "date":
}
 */
module.exports = {
  soldProducts: async (req, res, next) => {
    try {
      const autorization = req.get('Authorization')
      if (!autorization) {
        return res.status(401).json({ message: 'No tienes permisos para hacer esto' })
      }

      if (autorization.split(' ')[0].toLowerCase() !== 'bearer') {
        return res.status(401).json({ message: 'No tienes permisos para hacer esto' })
      }

      const token = autorization.split(' ')[1]
      const data = getTokenData(token)
      if (!data) {
        return res.status(401).json({ message: 'No tienes permisos para hacer esto' })
      }

      const user = await User.findById(data.id)
      if (!user) {
        return res.status(404).json({ message: 'No se ha encontrado usuario' })
      }

      if (!user.isAdmin) {
        return res.status(401).json({ message: 'No tienes permisos para hacer esto' })
      }

      const sold = await Sold.find({}).populate("items", { model: 1, category: 1 })
     
  
  let teclados = sold.filter(p => p.items.category.toLowerCase() === "teclado")
  let soldTeclados = estructurador(teclados, "Teclado")

  let guitarra = sold.filter(p => p.items.category.toLowerCase() === "guitarra")
  let soldGuitarra = estructurador(guitarra, "Guitarra")

  let bajo = sold.filter(p => p.items.category.toLowerCase() === "bajos")
  let soldBajo = estructurador(bajo, "Bajos")

  let percusion = sold.filter(p => p.items.category.toLowerCase() === "percusión")
  let soldPercu = estructurador(percusion, "Percusión")
  
  let viento = sold.filter(p => p.items.category.toLowerCase() === "viento")
  let soldViento = estructurador(viento, "Viento")
  
  let ukelele = sold.filter(p => p.items.category.toLowerCase() === "ukelele")
  let soldUkelele = estructurador(ukelele, "Ukelele")
  
  let arco = sold.filter(p => p.items.category.toLowerCase() === "arco")
  let soldArco = estructurador(arco, "Arco")

  let respuesta = [soldTeclados, soldGuitarra, soldBajo, soldPercu, soldViento, soldUkelele, soldArco]

  res.json(respuesta)
    } catch (error) {
      next(error)
    }

  }
}

// return Sold.find({})
// .populate("items",{
//     model:1,
//     brand:1,
//     price:1,
//     type:1,
//     category:1,
//     image:1,
//     description:1,
//     _id:1
// })
// .then((sold)=>{
//   return res.json(sold)})
// .catch((error)=>{
//   next(error)
// })