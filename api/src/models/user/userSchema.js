const { Schema, model } = require("mongoose");

const userSchema = new Schema({
  firsName: {
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
});

userSchema.set("toJSON", {
  transform: (doc, ret) => {
    delete ret.password;
    return ret;
  },
});

const userModel = model("user", userSchema);

module.exports = userModel;
