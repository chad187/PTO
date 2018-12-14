const Joi = require('joi');

module.exports = {
  // POST /api/users
  createUser: {
    body: {
      username: Joi.string().regex(/^[a-zA-Z0-9.\-_$@*!]{3,30}$/).required(),
      password: Joi.string().regex(/^(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))(?=.{6,})/).required(),
      mobileNumber: Joi.string().regex(/^[0-9][0-9]{9}$/).required(),
      school: Joi.string().required(),
      firstName: Joi.string().required(),
      lastName: Joi.string().required(),
      email: Joi.string().regex(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/).required()
    }
  },

  // UPDATE /api/users/:userId
  updateUser: {
    body: {
      username: Joi.string().regex(/^[a-zA-Z0-9.\-_$@*!]{3,30}$/),
      password: Joi.string().regex(/^(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))(?=.{6,})/),
      mobileNumber: Joi.string().regex(/^[0-9][0-9]{9}$/), // might need to change first one back to [1-9]
      school: Joi.string(),
      firstName: Joi.string(),
      lastName: Joi.string(),
      email: Joi.string().regex(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)
    },
    params: {
      userId: Joi.string().hex().required()
    }
  },

  // POST /api/districts
  createDistrict: {
    body: {
      name: Joi.string().required(),
      phone: Joi.string().regex(/^[0-9][0-9]{9}$/).required(),
      city: Joi.string().required(),
      address: Joi.string().required(),
      state: Joi.string().required()
    }
  },

  // UPDATE /api/districts/:districtId
  updateDistrict: {
    body: {
      name: Joi.string(),
      phone: Joi.string().regex(/^[0-9][0-9]{9}$/), // might need to change first one back to [1-9]
      city: Joi.string(),
      address: Joi.string(),
      state: Joi.string()
    },
    params: {
      districtId: Joi.string().hex().required()
    }
  },

  // POST /api/schools
  createSchool: {
    body: {
      name: Joi.string(),
      phone: Joi.string().regex(/^[0-9][0-9]{9}$/).required(),
      address: Joi.string().required(),
      district: Joi.string().required()
    }
  },

  // UPDATE /api/schools/:schoolId
  updateSchool: {
    body: {
      name: Joi.string(),
      phone: Joi.string().regex(/^[0-9][0-9]{9}$/), // might need to change first one back to [1-9]
      address: Joi.string(),
      district: Joi.string()
    },
    params: {
      schoolId: Joi.string().hex().required()
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
