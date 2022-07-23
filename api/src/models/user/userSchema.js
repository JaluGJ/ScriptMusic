const { Schema, model } = require('mongoose')
const bcrypt = require('bcrypt')

const userSchema = new Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: false
  },
  isAdmin: {
    type: Boolean,
    default: false,
  },
  isConfirmed: {
    type: Boolean,
    required: true,
    default: false
  },
  pushToken: {
    type: String,
    required: false
  },
  favourites: [
    {
      type: Schema.Types.ObjectId,
      ref: "Product"
    }
  ],
  image: {
    type: String,
    default: 'https://res.cloudinary.com/dzonjuriq/image/upload/v1658196918/script_music_img/Usuario-Vacio1_lzvvtl.png'
  },
  bought: [
    {
      type: Schema.Types.ObjectId,
      ref: "Sold",
    }
  ]
});

// userSchema.pre('save', async function (next) {
//   const hash = await bcrypt.hash(this.password, 10)
//   this.password = hash
//   next()
// })

userSchema.set('toJSON', {
  transform: (doc, ret) => {
    ret.id = ret._id
    delete ret._id
    delete ret.__v
    delete ret.password
  }
})

// userSchema.methods.hashPassword = async function (password) {
//   const hash = await bcrypt.hash(password, 10)
//   this.password = hash
// }

userSchema.methods.isValidPassword = function (password) {
  const isMatch = bcrypt.compare(password, this.password)
  return isMatch
}

const userModel = model("User", userSchema)

module.exports = userModel
