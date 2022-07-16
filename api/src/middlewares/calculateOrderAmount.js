module.exports = {
   calculateOrderAmount: (items) => {
    let finalPrice= 0;
    items.forEach((item)=>{
    return finalPrice += item.price * item.count
    })
    console.log(finalPrice.toFixed(2)*100)
return finalPrice.toFixed(2)*100;
  }
};
