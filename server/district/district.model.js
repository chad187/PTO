const Promise = require('bluebird');
const mongoose = require('mongoose');
const httpStatus = require('http-status');
const APIError = require('../helpers/APIError');

/**
 * District Schema
 */
const DistrictSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  city: {
    type: String,
    required: true
  },
  phone: {
    type: String,
    unique: true,
    required: true
  },
  address: {
    type: String,
    required: true
  },
  state: {
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
DistrictSchema.method({
});

/**
 * Statics
 */
DistrictSchema.statics = {
  /**
   * Get district
   * @param {ObjectId} id - The objectId of district.
   * @returns {Promise<District, APIError>}
   */
  get(id) {
    return this.findById(id)
      .exec()
      .then((district) => {
        if (district) {
          return district;
        }
        const err = new APIError('No such district exists!', httpStatus.NOT_FOUND);
        return Promise.reject(err);
      });
  },

  /**
   * List districts in descending order of 'createdAt' timestamp.
   * @param {number} skip - Number of districts to be skipped.
   * @param {number} limit - Limit number of districts to be returned.
   * @returns {Promise<District[]>}
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
 * @typedef District
 */
module.exports = mongoose.model('District', DistrictSchema);
