const { Schema, model } = require('mongoose')

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
  bought: [
    {
      type: Schema.Types.ObjectId,
      ref: "Product",
    }
  ]
});

userSchema.set('toJSON', {
  transform: (doc, ret) => {
      ret.id = ret._id
      delete ret._id
      delete ret.__v
      delete ret.password
  }
})

const userModel = model("User", userSchema)

module.exports = userModel
