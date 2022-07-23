const Ticket = require('../models/ticket/ticketSchema.js')
const User = require('../models/user/userSchema.js')
const { getTokenData } = require("../config/jwt.config.js");

module.exports = {
  getTickets: async (req, res, next) => {
    //buscar todos los tikets, meterlos en un array, filtrarlos por usuario, devolverlos poblados
    try {
      //  const autorization = req.get('Authorization')
      //   if (!autorization) {
      //     return res.status(401).json({ message: 'No tienes permisos para hacer esto' })
      //   }
      //   if (autorization.split(' ')[0].toLowerCase() !== 'bearer') {
      //     return res.status(401).json({ message: 'No tienes permisos para hacer esto' })
      //   }
      //   const token = autorization.split(' ')[1]
      //   const data = getTokenData(token)
      //   if (!data) {
      //     return res.status(401).json({ message: 'No tienes permisos para hacer esto' })
      //   }
      const data = req.body
      const user = await User.findById(data.id)
      if (!user) {
        return res.status(404).json({ message: 'No se ha encontrado usuario' })
      }
      //buscar los tickets 
      const tickets = await Ticket.find({}).populate({
        path: "bought",
        select: {
          quantity: 1,
          _id: 0
        },
        populate: {
          path: "items",
          select: {
            model: 1,
            brand: 1,
            price: 1,
            type: 1,
            category: 1,
            image: 1,
            description: 1,
            _id: 0
          }
        }
      })
      //console.log("tickets", tickets)
      const filtered = tickets.filter(t => t.userId.toString() === data.id)
      //console.log("tikets filtrados", filtered)
      return res.json(filtered)
    } catch (error) {
      next(error)
    }
  }
}