const Joi = require('joi');

module.exports = {
  // POST /api/users
  createUser: {
    body: {
      username: Joi.string().required(),//regex this
      password: Joi.string().regex(/^[0-9][0-9]{9}$/).required(), //change this regex
      mobileNumber: Joi.string().regex(/^[0-9][0-9]{9}$/).required(),
      district: Joi.string().required(),
      school: Joi.string().required()
    }
  },

  // UPDATE /api/users/:userId
  updateUser: {
    body: {
      username: Joi.string(),
      password: Joi.string().regex(/^[0-9][0-9]{9}$/),
      mobileNumber: Joi.string().regex(/^[0-9][0-9]{9}$/),//might need to change first one back to [1-9]
      district: Joi.string(),
      school: Joi.string()
    },
    params: {
      userId: Joi.string().hex().required()
    }
  },

  // POST /api/auth/login
  login: {
    body: {
      username: Joi.string().required(),
      password: Joi.string().required()
    }
  }
};
