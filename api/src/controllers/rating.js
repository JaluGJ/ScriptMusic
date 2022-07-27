const User = require('../models/user/userSchema.js')
const Products = require('../models/product/productSchema')
const Rating = require('../models/ratingYComments/ratComSchema.js')
const getTokenData = require("../config/jwt.config.js").getTokenData;


//tal vez, sea necesario una nueva tabla que sea comentarios y rating.

module.exports={
  //POST de rating y comentario
  addRating: async (req, res, next) => {
    try {
      //autorizacion

       const autorization = req.get('Authorization')
      if (!autorization) {
        return res.status(401).json({ msg: 'No tienes permisos para hacer esto' })
      }
      if (autorization.split(' ')[0].toLowerCase() !== 'bearer') {
        return res.status(401).json({ msg: 'No tienes permisos para hacer esto' })
      }
      const token = autorization.split(' ')[1]
      const data = getTokenData(token)
      if (!data) {
        return res.status(401).json({ msg: 'No tienes permisos para hacer esto' })
      } 
      //busqueda de usuario
      const user = await User.findById(data.id).populate("bought", {_id:0})
      if (!user) {
        return res.status(401).json({ msg: 'No tienes permiso para hacer esto' })
      }
      //logica de si va todo bien
      const {rating, comment, productId, date} = req.body 
      //rating debe ser un numero entre 1 y 10 
      //comment debe ser una string. 
      //el id del producto debe encontrarse entre los id comprados por el usuario

      let dateNew = date.split(" ").slice(1, 5)
      const dated = `${dateNew[1]} ${dateNew[0]} ${dateNew[2]}, ${dateNew[3]}`

      if (!rating){
        return res.status(404).json({msg: 'Es necesario que des una puntuación'})
      }
      let compro = user.bought.find(elem => elem.items.toString() === productId)
      if (!compro){
        return res.status(404).json({msg: 'Para opinar sobre este producto, primero debes comprarlo'})
      }
      if (!comment){ //si no tiene comentario, se guarda sin comentario.
        let woComment = new Rating ({
          rating,
          userId: data.id,
          productId,
          date: dated
        })
        //guardar el woComment._id en los productos
        let prod = await Products.findById(productId)
        await Products.findByIdAndUpdate(productId, {$set: {ratYCom: [...prod.ratYCom, woComment._id]}})

        await woComment.save()
        return  res.json({msg: 'El usuario guardo el rating con exito'})

      }
      //Si tiene comentario, se guarda con comentario.
      let wComment = new Rating ({
        rating,
        userId: data.id,
        productId,
        comment,
        date: dated
      })
      let prod = await Products.findById(productId)
      await Products.findByIdAndUpdate(productId, {$set: {ratYCom: [...prod.ratYCom, wComment._id]}})

      await wComment.save()
      return res.json({msg: 'El usuario guardó el rating y el comentario con exito'})

    } catch (error) {
      next(error)
    }
  }
}
