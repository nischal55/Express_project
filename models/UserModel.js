const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const UserSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  address: {
    street: String,
    ward: Number,
  },
  email: {
    // unique:true,
    type: String,
    required: true,
    /* custom mongoose validation  -- check email here.. */
    validate: {
      validator: async (value) => {
        let matched = await mongoose.models.User.findOne({ email: value });
        if (matched) {
          return false;
        }
      },
      message: "email already used",
    },
  },
  phone: { type: Number, required: true },
  password: {
    type: String,
    required: true,
    select: false,
  },
  role: {
    type: String,
    required: true,
    set: (value) => {
      return value.toLowerCase();
    },
  },
});
const User = mongoose.model("User", UserSchema);

/* default export */
module.exports = User;
