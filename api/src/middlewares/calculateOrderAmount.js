const Product = require('../models/product/productSchema.js')

module.exports = {
    calculateOrderAmount: (items) =>{
        // //desde items, debe ser un array con los id de los items que se van a comprar. 
        // const finalPrice = items.map(async (ident)=>{
        //     //encontrar el item en nuestra base de datos y sacar el precio
        //     const encontrau = await Product.find({_id: ident})
        //     return encontrau.price
        // })
        // return finalPrice.reduce((prev,curr)=>prev+curr)
        return 14000 //test
    } 
}