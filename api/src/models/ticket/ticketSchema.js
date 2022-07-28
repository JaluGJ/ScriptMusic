const { Schema, model } = require('mongoose')

/*modelsProduct 
{
  "userId": "string de Id"
  "bougth":[ esquema de Sold
    {
      items: { model: 1,
                brand: 1,
                price: 1,
                type: 1,
                category: 1,
                image: 1, 
              },
    quantity: number
  }
  ]
  "date": fecha 
}


*/


const ticketSchema = new Schema({
  userId: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  },
  bought: [
    {
      type: Schema.Types.ObjectId,
      ref: "Sold"
    }
  ],
  date: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: false
  }
})

// en la db aun existe el _id y el __v, la cosa es que al hacer el send al front lo enviemos como id y lo demas se borra
// para hacer cualquier peticion en base al id en el back van a tener que usar _id, si no no va a encontrar nada.
ticketSchema.set('toJSON', {
  transform: (doc, ret) => {
    ret.id = ret._id
    delete ret._id
    delete ret.__v
  }
})

const ticketModel = model('Ticket', ticketSchema)

module.exports = ticketModel