const School = require('./school.model');

/**
 * Load school and append to req.
 */
function load(req, res, next, id) {
  School.get(id)
    .then((school) => {
      req.school = school; // eslint-disable-line no-param-reassign
      return next();
    })
    .catch(e => next(e));
}

/**
 * Get school
 * @returns {School}
 */
function get(req, res) {
  return res.json(req.school);
}

/**
 * Create new school
 * @property {string} req.body.name - The name of school.
 * @property {string} req.body.phone - The phone of school.
 * @property {string} req.body.address - The address of school.
 * @property {string} req.body.district - The district of school.
 * @returns {School}
 */
function create(req, res, next) {
  const school = new School({
    name: req.body.name,
    address: req.body.address,
    phone: req.body.phone,
    district: req.body.district
  });

  school.save()
    .then((savedSchool) => {
      res.json(savedSchool);
    })
    .catch(e => next(e));
}

/**
 * Update existing school
 * @property {string} req.body.name - The name of school.
 * @property {string} req.body.phone - The phone of school.
 * @property {string} req.body.address - The address of school.
 * @property {string} req.body.district - The district of school.
 * @returns {School}
 */
function update(req, res, next) {
  const { school } = req;
  school.name = req.body.name ? req.body.name : req.school.name;
  school.address = req.body.address ? req.body.address : req.school.address;
  school.phone = req.body.phone ? req.body.phone : req.school.phone;

  school.save()
    .then((savedSchool) => {
      res.json(savedSchool);
    })
    .catch(e => next(e));
}

/**
 * Get school list.
 * @property {number} req.query.skip - Number of users to be skipped.
 * @property {number} req.query.limit - Limit number of users to be returned.
 * @returns {School[]}
 */
function list(req, res, next) {
  const { limit = 50, skip = 0 } = req.query;
  School.list({ limit, skip })
    .then(schools => res.json(schools))
    .catch(e => next(e));
}

/**
 * Delete school.
 * @returns {School}
 */
function remove(req, res, next) {
  const { school } = req;
  school.remove()
    .then(deletedSchool => res.json(deletedSchool))
    .catch(e => next(e));
}

module.exports = {
  load, get, create, update, list, remove
};
