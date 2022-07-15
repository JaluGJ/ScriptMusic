const { Schema, model } = require('mongoose')

// modelsProduct 
// "items":
// "quantity":
// "date": 


const soldSchema = new Schema({
    items:  {
            type: Schema.Types.ObjectId,
            ref: "Product"
        },
    user: {
        type: Schema.Types.ObjectId,
        ref:'User'
    },
    quantity: {
        type: Number,
        required: true
    },
    date: {
        type: String,
        required: true
    }
})

// en la db aun existe el _id y el __v, la cosa es que al hacer el send al front lo enviemos como id y lo demas se borra
// para hacer cualquier peticion en base al id en el back van a tener que usar _id, si no no va a encontrar nada.
soldSchema.set('toJSON', {
    transform: (doc, ret) => {
        ret.id = ret._id
        delete ret._id
        delete ret.__v
    }
})

const soldModel = model('Sold', soldSchema)

module.exports = soldModel