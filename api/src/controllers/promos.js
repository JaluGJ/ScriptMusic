const promosProductModel = require('../models/promosProduct/promosProductSchema');
const Product = require("../models/product/productSchema.js");
const User = require('../models/user/userSchema');
const { getTokenData } = require("../config/jwt.config.js");
const sendNotifications = require('../config/sendNotifications');

const createPromo = async (req, res, next) => {
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

    const { items, price, stock, description, image, promo, promoName } = req.body;

    if (items.length === 0) return res.status(404).json({ message: 'No se ha añadido productos' })

    if (!stock) return res.status(404).json({ message: 'No se ha indicado stock' })

    if (!description) return res.status(404).json({ message: 'No se ha añadido una descripcion' })

    if (!image) return res.status(404).json({ message: 'No se ha añadido imagen' })

    if (!promo) return res.status(404).json({ message: 'No se ha añadido promo' })

    if (!promoName) return res.status(404).json({ message: 'No se ha añadido un nombre de promo' })

    if (promo === '2X1') {
      if (items.length > 1) {
        return res.status(400).json({ message: 'No se puede seleccionar mas de un item' })
      }

      try {
        let product = await Product.findById(items[0])
        if (!product) {
          return res.status(404).json({ message: 'No se ha encontrado producto' })
        }

        if (stock === 0 || stock < 0) {
          return res.status(400).json({ message: 'El stock no puede ser 0 o menor' })
        }

        if (product.stock === 0 || product.stock < 0) {
          return res.status(400).json({ message: 'No hay stock suficiente' })
        }

        if (product.stock < (2 * stock)) {
          return res.status(400).json({ message: 'No hay stock suficiente' })
        }

        product.stock = product.stock - (2 * stock)
        product.save()
        const newPromo = new promosProductModel({
          items,
          price: product.price,
          stock,
          description,
          image,
          promo,
          promoName
        })
        newPromo.save()
        await sendNotifications(newPromo.promoName)
        return res.status(200).json({ message: 'Promo creada' })
      } catch (error) {
        next(error)
      }
    }

    if (!price) return res.status(404).json({ message: 'No se ha indicado precio' })



    if (promo === 'Combo') {

      if (stock === 0 || stock < 0) {
        return res.status(400).json({ message: 'El stock no puede ser 0 o menor' })
      }

      if (items.length === 1) {
        return res.status(404).json({ message: 'No se ha añadido productos' })
      }

      let total = items.map(async (e) => {
        const data = await Product.findById(e)
        if (!data) {
          return res.status(404).json({ message: 'No se ha encontrado producto' })
        }

        if (data.stock === 0 || data.stock < 0) {
          return res.status(400).json({ message: 'No hay stock suficiente' })
        }

        if (data.stock < stock) {
          return res.status(400).json({ message: 'No hay stock suficiente' })
        }

        data.stock = data.stock - stock
        data.save()
        return data
      })

      const products = await Promise.all(total)

      const newPromo = new promosProductModel({
        items: products.map(e => e._id),
        price,
        stock,
        description,
        image,
        promo,
        promoName
      })
      newPromo.save()
      await sendNotifications(newPromo.promoName)
      return res.status(200).json({ message: 'Promo creada' })
    }



    if (promo === 'Descuento') {

      if (items.length > 1) {
        return res.status(400).json({ message: 'No se puede seleccionar mas de un item' })
      }

      const product = await Product.findById(items[0])
      if (!product) {
        return res.status(404).json({ message: 'No se ha encontrado producto' })
      }

      if (stock === 0 || stock < 0) {
        return res.status(400).json({ message: 'El stock no puede ser 0 o menor' })
      }

      if (product.stock === 0 || product.stock < 0) {
        return res.status(400).json({ message: 'No hay stock suficiente' })
      }

      if (product.stock < stock) {
        return res.status(400).json({ message: 'No hay stock suficiente' })
      }

      if (price > product.price) {
        return res.status(400).json({ message: 'El precio del descuento no puede ser mayor al precio del producto' })
      }

      product.stock = product.stock - stock
      product.save()

      const newPromo = new promosProductModel({
        items,
        price,
        stock,
        description,
        image,
        promo,
        promoName
      })

      newPromo.save()
      await sendNotifications(newPromo.promoName)
      return res.status(200).json({ message: 'Promo creada' })
    }

    return res.status(400).json({ message: 'No se ha seleccionado una promocion' })
  } catch (error) {
    next(error)
  }
}




const getPromos = async (req, res, next) => {
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

    const promos = await promosProductModel.find({}).populate('items', {user: 0 })
    if (!promos || promos.length === 0) {
      return res.status(404).json({ message: 'No se han encontrado promociones' })
    }

    return res.json(promos)
  } catch (error) {
    next(error)
  }
}



const getPromoById = async (req, res, next) => {
  try {

    const {id} = req.params
    if(!id) return res.status(404).json({ message: 'No se ha indicado id' })
    
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

    const promo = await promosProductModel.findById(id).populate('items', {user: 0 })
    if (!promo) {
      return res.status(404).json({ message: 'No se ha encontrado promocion' })
    }

    return res.json(promo)
  } catch (error) {
    next(error)
  }
}





const deletePromo = async (req, res, next) => {
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

    const { id } = req.params;
    const promo = await promosProductModel.findById(id)
    if (!promo) {
      return res.status(404).json({ message: 'No se ha encontrado promo' })
    }

    await promo.remove()
    return res.status(200).json({ message: 'Promo eliminada' })
  } catch (error) {
    next(error)
  }
}


module.exports = {
  createPromo,
  getPromos,
  deletePromo,
  getPromoById
};
