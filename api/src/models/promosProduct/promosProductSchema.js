const { Schema, model } = require('mongoose');

const promoProductSchema = new Schema({
    promoName: {
        type: String,
        required: true
    },
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
    items: [{
        type: Schema.Types.ObjectId,
        ref: "Product"
    }]

})

promoProductSchema.set('toJSON', {
    transform: (doc, ret) => {
        ret.id = ret._id
        delete ret._id
        delete ret.__v
    }
})

const promoProductModel = model('Promo', promoProductSchema);

module.exports = promoProductModel;