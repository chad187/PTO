const Promise = require('bluebird');
const mongoose = require('mongoose');
const httpStatus = require('http-status');
const APIError = require('../helpers/APIError');

/**
 * User Schema
 */
const SchoolSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    match: [/^[a-zA-Z0-9.\-_$@*!]{3,30}$/, 'Name must have at least 3 characters']
  },
  phone: {
    type: String,
    required: true,
    match: [/^[0-9][0-9]{9}$/, 'The value of path {PATH} ({VALUE}) is not a valid phone number.']
  },
  district: {
    type: Schema.Types.ObjectID,
    ref: 'District',
    required: true
  },
  address: {
    type: String,
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

/**
 * Add your
 * - pre-save hooks
 * - validations
 * - virtuals
 */

/**
 * Methods
 */
SchoolSchema.method({
});

/**
 * Statics
 */
SchoolSchema.statics = {
  /**
   * Get school
   * @param {ObjectId} id - The objectId of school.
   * @returns {Promise<User, APIError>}
   */
  get(id) {
    return this.findById(id)
      .exec()
      .then((school) => {
        if (school) {
          return school;
        }
        const err = new APIError('No such school exists!', httpStatus.NOT_FOUND);
        return Promise.reject(err);
      });
  },

  /**
   * List schools in descending order of 'createdAt' timestamp.
   * @param {number} skip - Number of schools to be skipped.
   * @param {number} limit - Limit number of schools to be returned.
   * @returns {Promise<User[]>}
   */
  list({ skip = 0, limit = 50 } = {}) {
    return this.find()
      .sort({ createdAt: -1 })
      .skip(+skip)
      .limit(+limit)
      .exec();
  }
};

/**
 * @typedef User
 */
module.exports = mongoose.model('School', SchoolSchema);
