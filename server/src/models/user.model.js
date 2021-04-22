const { model, Schema } = require("mongoose");
const bcrypt = require("bcryptjs");

const userSchema = new Schema({
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
  },
  username: {
    type: String,
    required: true,
    minLength: 4,
    maxLength: 14,
  },
  hashed_password: {
    type: String,
    required: true,
  },
});

userSchema.virtual("password").set(function (pass) {
  const h_pass = bcrypt.hashSync(pass);

  this.hashed_password = h_pass;
});

module.exports = model("User", userSchema);
