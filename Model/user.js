const { type } = require('@testing-library/user-event/dist/type');
const mongoose = require('mongoose')
//structure of schema

const userSchema = new mongoose.Schema({
  first_name : {
    type: String,
    require : true,

  },
  last_name: {
    type: String,
    
  },
  email: {
    type: String,
    require: true,
    unique: true,
  },
  gender: {
    type: String,
    require: true
  },
  department: {
    type: String,
    require: true,
  },

  timestamps: true,
})

//define model

const userModel = new mongoose.model("User", userSchema);
module.exports = userModel;