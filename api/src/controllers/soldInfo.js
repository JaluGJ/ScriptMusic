const Sold = require('../models/sold/soldSchema.js')

module.exports = {
  soldProducts: (req, res, next) => {
    
      return Sold.find({})
      .populate("items",{
          model:1,
          brand:1,
          price:1,
          type:1,
          category:1,
          image:1,
          description:1,
          _id:1  
      })
      .then((sold)=>{
        return res.json(sold)})
      .catch((error)=>{
        next(error)
      })
  }
}