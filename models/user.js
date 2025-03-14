
const mongoose = require('mongoose')
//structure of schema

const userSchema = new mongoose.Schema({
  first_name : {
    type: String,
    required : true,

  },
  last_name: {
    type: String,
    
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  gender: {
    type: String,
    required: true
  },
  department: {
    type: String,
    required: true,
  },

 
}, {timestamps: true,})

//define model

const userModel = new mongoose.model("User", userSchema);
module.exports = userModel;