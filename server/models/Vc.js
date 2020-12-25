const mongoose = require("mongoose"); 

const VcSchema = mongoose.Schema({
  email: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  hospital: {
    type: String,
    required: true,
  },
  disease: {
    type: String,
    required: true,
  },
  doctor: {
    type: String,
    required: true,
  },
  price: {
    type: String,
    required: true,
  },
  date: {
    type: String, 
  }
});

const Vc = mongoose.model("apply", VcSchema);


module.exports = { Vc };