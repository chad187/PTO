const Joi = require('joi');

module.exports = {
  // POST /api/users
  createUser: {
    body: {
      username: Joi.string().regex(/^[a-zA-Z0-9.\-_$@*!]{3,30}$/).required(),
      password: Joi.string().regex(/^(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))(?=.{6,})/).required(),
      mobileNumber: Joi.string().regex(/^[0-9][0-9]{9}$/).required(),
      district: Joi.string().required(),
      school: Joi.string().required()
    }
  },

  // UPDATE /api/users/:userId
  updateUser: {
    body: {
      username: Joi.string().regex(/^[a-zA-Z0-9.\-_$@*!]{3,30}$/),
      password: Joi.string().regex(/^(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))(?=.{6,})/),
      mobileNumber: Joi.string().regex(/^[0-9][0-9]{9}$/), // might need to change first one back to [1-9]
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
