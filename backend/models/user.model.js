const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const userSchema = new Schema({
  username: {
    type: String, //Validations
    required: true,
    unique: true,
    trim: true,
    minLength: 3
  }
}, {
  timestamps: true
});

const User = mongoose.model("User", userSchema); //Define collection name and pass the schema to it.

module.exports = User; //Export the module for use elsewhere.