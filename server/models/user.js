const mongoose = require('mongoose');
const Joi = require('joi')

const Schema = mongoose.Schema;

const userSchema = new Schema({
  userName: {
    type: String,
    unique: true,
    required: true,
    trim: true,
    minlength: 7
  },
  password: {
    type: String,
    unique: true,
    required: true,
    minlength: 7
  }
})

const User = mongoose.model('User', userSchema)

const validateUser = (user) => {
  const schema = Joi.object({
    userName: Joi.string().min(7).max(50).required(),
    password: Joi.string().min(7).max(50).required(),
  });

  return schema.validate(user)
}

exports.User = User;
exports.ValidateUser = validateUser;