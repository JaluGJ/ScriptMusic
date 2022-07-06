const {Schema, model} = require('mongoose')

// modelsProduct 
// "model": 
// "brand": 
// "price": 
// "type": 
// "category":
// "stock":
// "image":
// "description": 

const productSchema = new Schema({
    model: {
        type: String,
        required: true
    },
    brand: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    type: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    stock: {
        type: Number,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    user: [
        {
            type: Schema.Types.ObjectId,
            ref: "User"
        }
    ]
})

// en la db aun existe el _id y el __v, la cosa es que al hacer el send al front lo enviemos como id y lo demas se borra
// para hacer cualquier peticion en base al id en el back van a tener que usar _id, si no no va a encontrar nada.
productSchema.set('toJSON', {
    transform: (doc, ret) => {
        ret.id = ret._id
        delete ret._id
        delete ret.__v
    }
})

const productModel = model('Product', productSchema)

module.exports = productModel