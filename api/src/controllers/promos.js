const promosProductModel = require('../models/promosProduct/promosProductSchema');
const Product = require('../models/promosProduct/promosProductSchema');

const postPromo = (req, res, next) =>{
 const{items, price, stock, description, image, promo} = req.body;
switch (promo) {
    case 'descuento': 
      Product.stock -= stock     
    case 'combo':
      items.map((item)=>{
      let buscar =  Product.findById(item)
      buscar.stock -= stock
      })
    case '2X1':
       Product.stock -= (2 * stock)

    default:
        break;
    }

    if (items.length === 0) return res.status(404).json({msg:"No se ha añadido productos"});
    if(!price) return res.status(404).json({msg:'No se ha indicado precio'});
    if(!stock) return res.status(404).json({msg:'No se ha indicado stock'});
    if(!description) return res.status(404).json({msg:'No se ha añadido una descripcion'});
    if(!image) return res.status(404).json({msg:'No se ha añadido image'});
    if(!promo) return res.status(404).json({msg:'No se ha añadido promo'});

    const newPromo = new promosProductModel({ 
     items,
     price, 
     stock,
     description,
     image,
     promo
    })
    newPromo.save()
    .then(() => {
        return res.json({msg:"Promocion Creada"});
      })
    .catch((error)=>{
    next(error)
      })
    }

    module.exports= postPromo;