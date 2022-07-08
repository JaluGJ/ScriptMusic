const Product = require("../models/product/productSchema.js");

module.exports = {
  // calculateOrderAmount: (items) => {

  //       const finalPrice = items.map(async (ident) => {
  //           const encontrar = await Product.find({ _id: ident });
  //           return encontrar.price;
  //         }).reduce((prev, curr) => prev + curr);
  //       return finalPrice;

  //return 1400;
  //     },
  //   };

  calcularOrderAmaount: (items) => {
    let amount = 0;
    for (let i = 0; i < items.length; i++) {
      amount += items[i].price;
    }
    return amount;
  },
};
