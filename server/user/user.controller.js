const User = require('./user.model');

/**
 * Load user and append to req.
 */
function load(req, res, next, id) {
  User.get(id)
    .then((user) => {
      req.user = user; // eslint-disable-line no-param-reassign
      return next();
    })
    .catch(e => next(e));
}

/**
 * Get user
 * @returns {User}
 */
function get(req, res) {
  const {username, mobileNumber, district, school, _id} = req.user;
  return res.json({username, mobileNumber, district, school, _id});
}

/**
 * Create new user
 * @property {string} req.body.username - The username of user.
 * @property {string} req.body.mobileNumber - The mobileNumber of user.
 * @returns {User}
 */
function create(req, res, next) {
  const user = new User({
    username: req.body.username,
    password: req.body.password,
    mobileNumber: req.body.mobileNumber,
    district: req.body.district,
    school: req.body.school
  });

  user.save()
    .then(savedUser => {
      const {username, mobileNumber, district, school, _id} = savedUser;
      res.json({username, mobileNumber, district, school, _id});
    })
    .catch(e => next(e));
}

/**
 * Update existing user
 * @property {string} req.body.username - The username of user.
 * @property {string} req.body.mobileNumber - The mobileNumber of user.
 * @returns {User}
 */
function update(req, res, next) {
  const user = req.user;
  user.username = req.body.username ? req.body.username : req.user.username;
  user.password = req.body.password ? req.body.password : req.user.password;
  user.mobileNumber = req.body.mobileNumber ? req.body.mobileNumber : req.user.mobileNumber;
  user.district = req.body.district ? req.body.district : req.user.district;
  user.school = req.body.school ? req.body.school : req.user.school;

  user.save()
    .then(savedUser => {
      const {username, mobileNumber, district, school, _id} = savedUser;
      // console.log({username, mobileNumber, district, school, _id});
      res.json({username, mobileNumber, district, school, _id});
    })
    .catch(e => next(e));
}

/**
 * Get user list.
 * @property {number} req.query.skip - Number of users to be skipped.
 * @property {number} req.query.limit - Limit number of users to be returned.
 * @returns {User[]}
 */
function list(req, res, next) {
  const { limit = 50, skip = 0 } = req.query;
  User.list({ limit, skip })
    .then(users => res.json(users))
    .catch(e => next(e));
}

/**
 * Delete user.
 * @returns {User}
 */
function remove(req, res, next) {
  const user = req.user;
  user.remove()
    .then(deletedUser => res.json(deletedUser))
    .catch(e => next(e));
}

module.exports = { load, get, create, update, list, remove };
