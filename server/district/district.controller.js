const District = require('./district.model');

/**
 * Load district and append to req.
 */
function load(req, res, next, id) {
  District.get(id)
    .then((district) => {
      req.district = district; // eslint-disable-line no-param-reassign
      return next();
    })
    .catch(e => next(e));
}

/**
 * Get district
 * @returns {District}
 */
function get(req, res) {
  return res.json(req.district);
}

/**
 * Create new district
 * @property {string} req.body.name - The name of district.
 * @property {string} req.body.phone - The phone of district.
 * @property {string} req.body.city - The city of district.
 * @property {string} req.body.address - The address of district.
 * @property {string} req.body.state - The state of district.
 * @returns {District}
 */
function create(req, res, next) {
  const district = new District({
    name: req.body.name,
    phone: req.body.phone,
    address: req.body.address,
    city: req.body.city,
    state: req.body.state
  });

  district.save((error, savedDistrict) => {
    if (error) next(error);
    res.json(savedDistrict);
  });
}

/**
 * Update existing district
 * @property {string} req.body.name - The name of district.
 * @property {string} req.body.phone - The phone of district.
 * @property {string} req.body.city - The city of district.
 * @property {string} req.body.address - The address of district.
 * @property {string} req.body.state - The state of district.
 * @returns {District}
 */
function update(req, res, next) {
  const { district } = req;
  district.name = req.body.name ? req.body.name : req.district.name;
  district.phone = req.body.phone ? req.body.phone : req.district.phone;
  district.city = req.body.city ? req.body.city : req.district.city;
  district.address = req.body.address ? req.body.address : req.district.address;
  district.state = req.body.state ? req.body.state : req.district.state;

  district.save()
    .then((savedDistrict) => {
      res.json(savedDistrict);
    })
    .catch(e => next(e));
}

/**
 * Get district list.
 * @property {number} req.query.skip - Number of districts to be skipped.
 * @property {number} req.query.limit - Limit number of districts to be returned.
 * @returns {District[]}
 */
function list(req, res, next) {
  const { limit = 50, skip = 0 } = req.query;
  District.list({ limit, skip })
    .then(districts => res.json(districts))
    .catch(e => next(e));
}

/**
 * Delete district.
 * @returns {District}
 */
function remove(req, res, next) {
  const { district } = req;
  district.remove()
    .then(deletedDistrict => res.json(deletedDistrict))
    .catch(e => next(e));
}

module.exports = {
  load, get, create, update, list, remove
};
