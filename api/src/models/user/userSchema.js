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
    required: true,
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
  bought: [
    {
      type: Schema.Types.ObjectId,
      ref: "Product",
    }
  ]
});

userSchema.pre('save', async function (next) {
  const hash = await bcrypt.hash(this.password, 10)
  this.password = hash
  next()
})

userSchema.set('toJSON', {
  transform: (doc, ret) => {
      ret.id = ret._id
      delete ret._id
      delete ret.__v
      delete ret.password
  }
})

userSchema.methods.isValidPassword = async function (password) {
  const isMatch = await bcrypt.compare(password, this.password)
  return isMatch
}

const userModel = model("User", userSchema)

module.exports = userModel
