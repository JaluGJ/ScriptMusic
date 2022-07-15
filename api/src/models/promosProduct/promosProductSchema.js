const {Schema, model}= require('mongoose');

const promosProductSchema = new Schema({
price: {
    type: Number
},
stock: {
    type: Number
},
description: {
    type: String
},
image: {
 type: String
},
promo: {
    type: String
},
items: {
    type: Array,
}
  
})

promosProductSchema.set('toJSON', {
    transform: (doc, ret) =>{
        ret.id = ret._id
        delete ret._id
        delete ret.__v
    }
})

const promosProductModel = model('promos', promosProductSchema);

module.exports = promosProductModel;