const Product = require("../models/product/productSchema.js");

module.exports = {
  getAllProducts: (req, res, next) => {
    const { search, category, price } = req.query;

    if (search) {
      return Product.find({ model: { $regex: search, $options: "i" } })
        .then((products) => {
          if (products.length === 0) {
            return res.status(404).send("No se encontro ningun producto");
          }
          return res.json(products).end();
        })
        .catch((error) => {
          next(error);
        });
    }

    if (!category && price) {
      if (price === "higher") {
        return Product.find({})
          .sort({ price: -1 })
          .then((products) => {
            return res.json(products).end();
          });
      }

      if (price === "lower") {
        return Product.find({})
          .sort({ price: 1 })
          .then((products) => {
            return res.json(products).end();
          });
      }
    }

    if (category && !price) {
      if (category === "Todos") {
        return Product.find({})
          .then((products) => {
            return res.json(products).end();
          })
          .catch((error) => {
            next(error);
          })
          .end();
      }

      return Product.find({ category: category }).then((products) => {
        if (products.length === 0) {
          return res
            .status(404)
            .send("No existen productos con esta categoria");
        }
        return res.json(products).end();
      });
    }

    if (category && price) {
      if (category === "Todos" && price === "higher") {
        return Product.find({})
          .sort({ price: -1 })
          .then((products) => {
            return res.json(products).end();
          })
          .catch((error) => {
            next(error);
          })
          .end();
      }

      if (price === "higher") {
        return Product.find({ category: category })
          .sort({ price: -1 })
          .then((products) => {
            if (products.length === 0) {
              return res
                .status(404)
                .send("No existen productos con esta categoria");
            }
            return res.json(products).end();
          });
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
          .end();
      }

      if (price === "lower") {
        return Product.find({ category: category })
          .sort({ price: 1 })
          .then((products) => {
            if (products.length === 0) {
              return res
                .status(404)
                .send("No existen productos con esta categoria");
            }
            return res.json(products).end();
          });
      }
    }

    Product.find()
      .then((products) => {
        return res.json(products).end();
      })
      .catch((error) => {
        next(error);
      });
  },

  getProductById: (req, res, next) => {
    const { id } = req.params;
    Product.findById(id)
      .then((product) => {
        return res.json(product);
      })
      .catch((error) => {
        next(error);
      });
  },

  updateProduct: (req, res, next) => {
    const { id } = req.params;
    const { model, brand, price, type, category, stock, image, description } =
      req.body;

    if (
      !model ||
      !brand ||
      !price ||
      !type ||
      !category ||
      !stock ||
      !image ||
      !description
    ) {
      return res.status(400).send("Falta informacion necesaria");
    }

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

    Product.findByIdAndUpdate(id, newProduct, { new: true })
      .then((product) => {
        return res.json(product);
      })
      .catch((error) => {
        next(error);
      });
  },

  deleteProduct: (req, res, next) => {
    const { id } = req.params;
    Product.findByIdAndDelete(id)
      .then(() => {
        return res.status(204);
      })
      .catch((error) => {
        console.error(error);
      });
  },

  uploadProduct: (req, res, next) => {
    const { model, brand, price, type, category, stock, image, description } =
      req.body;

    if (
      !model ||
      !brand ||
      !price ||
      !type ||
      !category ||
      !stock ||
      !image ||
      !description
    ) {
      return res.status(400).send("Falta informacion necesaria");
    }

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

    product
      .save()
      .then(() => {
        return res.send("Producto guardado");
      })
      .catch((error) => {
        next(error);
      });
  },
};
