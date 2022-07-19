const User = require('../models/user/userSchema')
const Product = require('../models/product/productSchema')
const getTokenData = require('../config/jwt.config.js').getTokenData


module.exports = {

  newFavourite: async (req, res, next) => {

    try {
      const autorization = req.get('Authorization')
      const { productsId } = req.body
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
    
      const user = await User.findById(data.id).populate("favourites", {
        model: 1,
        brand: 1,
        price: 1,
        type: 1,
        category: 1,
        image: 1,
        description: 1,
        _id: 1
      })
      if (!user) {
        return res.status(401).json({ msg: 'No tienes permiso para hacer esto' })
      }

      if (!productsId.length || !productsId) {
        return res.json({ msg: "Machado, hace bien las cosas. pone algo que quieras guardar" })
      }
      if (!user.favourites) {
        user.favourites = [...productsId]
        await user.save()
        return res.json({ msg: 'se ha guardado con exito', favs: user.favourites })
      }
      
      const favoritos = user.favourites
      
      const existente = favoritos.find(prod => prod.id === productsId)
     
      if (existente) {
        return res.json({msg: 'Este item ya está en favoritos', favs: user.favourites})
      }
      user.favourites = [...favoritos, productsId]
      await user.save()

      return res.json({ msg: 'se ha guardado con exito', favs: user.favourites })
    } catch (error) {
      return next(error)
    }
  },


  deleteFavoutite: async (req, res, next) => {
    try {
    const autorization = req.get('Authorization')
    const { productsId } = req.body
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
    const user = await User.findById(data.id).populate("favourites", {
      model: 1,
      brand: 1,
      price: 1,
      type: 1,
      category: 1,
      image: 1,
      description: 1,
      _id: 1})
    if (!user) {
      return res.status(401).json({ msg: 'No tienes permiso para hacer esto' })
    }
    if (!productsId.length || !productsId) {
      return res.json({ msg: "Machado, hace bien las cosas. pone algo que quieras eliminar" })
    }
    const favoritos = user.favourites
    user.favourites = favoritos.filter(p => p.id !== productsId )
    await user.save()
    return res.json({ msg: 'Producto eliminado con exito', favs: user.favourites })
    } catch (error) {
      next(error)
    }
  },


  getFavourites: async (req, res, next) => {
    try {
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
      const user = await User.findById(data.id).populate("favourites", {
        model: 1,
        brand: 1,
        price: 1,
        type: 1,
        category: 1,
        image: 1,
        description: 1,
        _id: 1
    })
      if (!user) {
        return res.status(401).json({ msg: 'No tienes permiso para hacer esto' })
      }
      return res.json(user.favourites)

    } catch (error) {
      return next(error)
    }
  }
}
