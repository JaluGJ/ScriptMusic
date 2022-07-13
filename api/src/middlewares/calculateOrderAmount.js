const Product = require("../models/product/productSchema.js");

// items= [ {
// count: 1,
// id: h12334rgkgdhjtr,
// price: 49,99
//},
//{
// count: 2,
// id: 767884rgkgdhjtr,
// price: 69,99
//}]
module.exports = {
   calculateOrderAmount: (items) => {
    let finalPrice= 0;
    items.forEach((item)=>{
    return finalPrice += item.price * item.count
    })
return finalPrice;
  }
};
