// const Joi = require('@hapi/joi')

// const validate = Joi.object({
//   username: Joi.string().min(3).max(30).required(),
//   email: Joi.string().email().lowercase().required(),
//   password: Joi.string().min(6).max(30).required(),
// })

// module.exports = {validate};
const Joi = require('@hapi/joi');

// Register User and Login User
module.exports.validateUser = Joi.object({
  username: Joi.string().min(3).max(30).required(),
  email: Joi.string().email().lowercase().required(),
  password: Joi.string().min(6).max(30).required(),
});


// Get User, Get Users, Delete User, and Update User
// Assuming 'id' is used to identify the user
// const validateUserId = Joi.object({
//   id: Joi.string().required(),
// });


// module.exports = { validateUser };
