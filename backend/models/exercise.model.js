const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const exerciseSchema = new Schema({
  username: {
    type: String, //Validations
    required: true
  },
  description: { 
    type: String,
    required: true
  }, 
  duration: {
    type: Number,
    required: true
  },
  date: {
    type: Date,
    required: true
  }
}, {
  timestamps: true
});

const Exercise = mongoose.model("Exercise", exerciseSchema); //Define collection name and pass the schema to it.

module.exports = Exercise; //Export the module for use elsewhere.