module.exports = {
   calculateOrderAmount: (items) => {
    let finalPrice= 0;
    items.forEach((item)=>{
    return finalPrice += item.priceOne * item.count
    })
return finalPrice.toFixed(2)*100;
  }
};
