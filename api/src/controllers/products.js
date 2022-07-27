const { getTokenData } = require("../config/jwt.config.js");
const Product = require("../models/product/productSchema.js");
const User = require('../models/user/userSchema.js')

module.exports = {

  getAllProducts: async (req, res, next) => {
    const { search, category, price } = req.query;

    if (search) {
      try {
        const firstSearch = await Product.find({ model: { $regex: search, $options: "i" } })
        if (firstSearch.length === 0) {
          const secondSearch = await Product.find({ type: { $regex: search, $options: "i" } })
          if (secondSearch.length === 0) {
            return res.status(404).json({ msg: "No se encontro ningun producto" });
          }
          return res.json(secondSearch).end();
        }
        return res.json(firstSearch).end();
      } catch (error) {
        next(error);
      }

    }

    if (!category && price) {
      if (price === "higher") {
        return Product.find({})
          .sort({ price: -1 })
          .then((products) => {
            return res.json(products).end();
          })
          .catch((error) => {
            next(error)
          })
      }

      if (price === "lower") {
        return Product.find({})
          .sort({ price: 1 })
          .then((products) => {
            return res.json(products).end();
          })
          .catch((error) => {
            next(error)
          })
      }
    }

    if (category && !price) {
      if (category === "Todos") {
        return Product.find()
          .then((products) => {
            return res.json(products).end();
          })
          .catch((error) => {
            next(error);
          })
      }

      return Product.find({ category: category }).then((products) => {
        if (products.length === 0) {
          return res.status(404).json({ msg: "No existen productos con esta categoria" });
        }
        return res.json(products).end();
      })
        .catch((error) => {
          next(error)
        })
    }

    if (category && price) {
      if (category === "Todos" && price === "higher") {
        return Product.find()
          .sort({ price: -1 })
          .then((products) => {
            return res.json(products).end();
          })
          .catch((error) => {
            next(error);
          })
      }

      if (price === "higher") {
        return Product.find({ category: category })
          .sort({ price: -1 })
          .then((products) => {
            if (products.length === 0) {
              return res.status(404).json({ msg: "No existen productos con esta categoria" });
            }
            return res.json(products).end();
          })
          .catch((error) => {
            next(error)
          })
      }

      if (category === "Todos" && price === "lower") {
        return Product.find({})
          .sort({ price: 1 })
          .then((products) => {
            return res.json(products).end();
          })
          .catch((error) => {
            next(error);
          })
      }

      if (price === "lower") {
        return Product.find({ category: category })
          .sort({ price: 1 })
          .then((products) => {
            if (products.length === 0) {
              return res.status(404).json({ msg: "No existen productos con esta categoria" });
            }
            return res.json(products).end();
          })
          .catch((error) => {
            next(error)
          })
      }
    }

    return Product.find()
      .then((products) => {
        return res.json(products).end();
      })
      .catch((error) => {
        next(error);
      });
  },
  

  getProductById: async (req, res, next) => {
    try {
      const { id } = req.params
      const existencia = await Product.findById(id)
      if (!existencia) return res.status(404).json({ message: 'No se ha encontrado el producto' })
      const product = await Product.findById(id).populate({
        path: "ratYCom",
        select: {
          rating: 1,
          comment: 1,
          date: 1,
          _id: 0
        },
        populate: {
          path: "userId",
          select: {
            firstName: 1,
            lastName: 1,
            image: 1,
            _id: 0
          }
        }
      })
      if (!product.ratYCom.length) {
        return res.json({ product, rating: 0 })
      }
      let valRating = []
      product.ratYCom?.forEach(rat => {
        valRating.push(rat.rating)
      })
      let sumRating = Math.floor(valRating.reduce((a, b) => a + b) / valRating.length)
      return res.json({ product, rating: sumRating })
    } catch (err) {
      next(err)
    }
  },


  updateProduct: async (req, res, next) => {

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
    if(!user) {
      return res.status(404).json({ message: 'No se ha encontrado usuario' })
    }
    if (!user.isAdmin) {
      return res.status(401).json({ message: 'No tienes permisos para hacer esto' })
    }

    const { id } = req.params;
    const { model, brand, price, type, category, stock, image, description } = req.body;

    if (!model) return res.status(404).json({ msg: "Falta informacion de model" });
    if (!brand) return res.status(404).json({ msg: 'Falta informacion de brand' });
    if (!price) return res.status(404).json({ msg: 'Falta informacion de price' });
    if (!type) return res.status(404).json({ msg: 'Falta informacion de type' });
    if (!category) return res.status(404).json({ msg: 'Falta informacion de category' });
    if (!stock) return res.status(404).json({ msg: 'Falta infromacion de stock' });
    if (!image) return res.status(404).json({ msg: 'Falta informacion de image' });
    if (!description) return res.status(404).json({ msg: 'Falta informacion de description' });


    const newProduct = {
      model,
      brand,
      price,
      type,
      category,
      stock,
      image,
      description,
    };

    return Product.findByIdAndUpdate(id, newProduct, { new: true })
      .then((product) => {
        return res.json(product);
      })
      .catch((error) => {
        next(error);
      });
  },


  deleteProduct: async (req, res, next) => {

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
    if (!user.isAdmin) {
      return res.status(401).json({ message: 'No tienes permisos para hacer esto' })
    }

    const { id } = req.params;
    return Product.findByIdAndDelete(id)
      .then(() => {
        return res.status(204);
      })
      .catch((error) => {
        next(error);
      });
  },


  uploadProduct: async (req, res, next) => {

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
    if (!user.isAdmin) {
      return res.status(401).json({ message: 'No tienes permisos para hacer esto' })
    }
    const { model, brand, price, type, category, stock, image, description } = req.body;

    if (!model) return res.status(404).json({ msg: 'Falta enviar nombre del modelo' });
    if (!brand) return res.status(404).json({ msg: 'Falta enviar la marca' });
    if (!price) return res.status(404).json({ msg: 'Falta enviar el precio' });
    if (!type) return res.status(404).json({ msg: 'Falta enviar el tipo de modelo' });
    if (!category) return res.status(404).json({ msg: 'Falta informacion necesaria de category' });
    if (!stock) return res.status(404).json({ msg: 'Falta informacion necesaria de stock' });
    if (!image) return res.status(404).json({ msg: 'Falta informacion necesaria de image' });
    if (!description) return res.status(404).json({ msg: 'Falta informacion necesaria de description' });

    const product = new Product({
      model,
      brand,
      price,
      type,
      category,
      stock,
      image,
      description,
    });

    product.save()
      .then(() => {
        return res.json({ msg: "Producto guardado", product });
      })
      .catch((error) => {
        next(error);
      });
  },
};
