const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema({
   id: {
      type: String,
      require: true
   },
   firstname: {
      type: String,
      require: true
   },
   lastname: {
      type: String,
      require: true
   },
   gender: {
      type: String,
      enum: ['male', 'female'],
      require: true
   },
   phone: {
      type: String,
      require: true
   },
   email: {
      type: String,
      unique: true,
      require: true
   }
})

module.exports = mongoose.model('user', userSchema);