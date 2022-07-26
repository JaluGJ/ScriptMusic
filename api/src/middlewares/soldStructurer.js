
module.exports={
  estructurador: (sold, category) => {
    let obj = {
      category
    }
    if (sold.length){
      obj.quantity = sold.map(item => item.quantity).reduce((a,b)=>a+b)
      obj.date = sold.map(item=>item.date)
    }
    else{
      obj.quantity = 0
      obj.date = []
    }
    return obj
  }
}