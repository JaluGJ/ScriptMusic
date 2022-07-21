const User = require('../models/user/userSchema')
//const Product = require('../models/product/productSchema')
const Rating = require('../models/ratingYComments/ratComSchema')


//tal vez, sea necesario una nueva tabla que sea comentarios y rating.

module.exports={
  //POST de rating y comentario
  addRating: async (req, res, next) => {
    try {
      //autorizacion
      const autorization = req.get('Authorization')
      if (!autorization) {
        return res.status(401).json({ msg: 'No tienes permisos para hacer esto 1' })
      }
      if (autorization.split(' ')[0].toLowerCase() !== 'bearer') {
        return res.status(401).json({ msg: 'No tienes permisos para hacer esto 2' })
      }
      const token = autorization.split(' ')[1]
      const data = getTokenData(token)
      if (!data) {
        return res.status(401).json({ msg: 'No tienes permisos para hacer esto 3' })
      }
      //busqueda de usuario
      const user = await User.findById(data.id)
      if (!user) {
        return res.status(401).json({ msg: 'No tienes permiso para hacer esto 4' })
      }
      //logica de si va todo bien
      const {rating, comment, productId} = req.body 
      //rating debe ser un numero entre 1 y 10 
      //comment debe ser una string. 
      //el id del producto debe encontrarse entre los id comprados por el usuario
      //

      if (!rating){
        return res.json({msg: 'Es necesario que des una puntuación'})
      }
      let compro = user.bought.find(elem => elem.id === productId)
      if (!compro){
        return res.json({msg: 'el usuario no ha comprado este articulo'})
      }
      if (!comment){ //si no tiene comentario, se guarda sin comentario.
        let woComment = new Rating ({
          userId: data.id,
          productId,
          date: Date()
        })

        await woComment.save()
        return  res.json({msg: 'El usuario guardo el rating con exito'})

      }
      //Si tiene comentario, se guarda con comentario.
      let wComment = new Rating ({
        userId: data.id,
        productId,
        comment,
        date: Date()
      })

      await wComment.save()
      return res.json({msg: 'El usuario guardó el rating y el comentario con exito'})

    } catch (error) {
      next(error)
    }
  }
}