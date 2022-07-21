const { Schema, model } = require('mongoose')

// modelsRating
// "productId": id
// "userId": id
// "rating": number required
// "comment": string, not required
// "date": string, required


const ratingSchema = new Schema({
    productId:  {
            type: Schema.Types.ObjectId,
            ref: "Product"
        },
    userId: {
        type: Schema.Types.ObjectId,
        ref:'User'
    },
    rating: {
        type: Number,
        required: true
    },
    comment:{
      type: String,
    },
    date: {
        type: String,
        required: true
    }
})

// en la db aun existe el _id y el __v, la cosa es que al hacer el send al front lo enviemos como id y lo demas se borra
// para hacer cualquier peticion en base al id en el back van a tener que usar _id, si no no va a encontrar nada.
ratingSchema.set('toJSON', {
    transform: (doc, ret) => {
        ret.id = ret._id
        delete ret._id
        delete ret.__v
    }
})
const ratingModel = model('Rating', ratingSchema)

module.exports = ratingModel