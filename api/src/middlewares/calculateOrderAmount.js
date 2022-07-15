module.exports = {
   calculateOrderAmount: (items) => {
    let finalPrice= 0;
    items.forEach((item)=>{
    return finalPrice += item.price * item.count * 100
    })
return finalPrice;
  }
};
