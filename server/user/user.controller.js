const User = require('./user.model');
const School = require('../school/school.model');

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
  return res.json(req.user);
}

/**
 * Create new user
 * @property {string} req.body.username - The username of user.
 * @property {string} req.body.mobileNumber - The mobileNumber of user.
 * @property {string} req.body.password - The password of user.
 * @property {string} req.body.school - The school of user.
 * @property {string} req.body.firstName - The first name of user.
 * @property {string} req.body.lastName - The last name of user.
 * @property {string} req.body.email - The email of user.
 * @returns {User}
 */
function create(req, res, next) {
  const {
    username,
    password,
    mobileNumber,
    school,
    firstName,
    lastName,
    email
  } = req.body;
  School.get(school)
    .then(() => {
      User.findOne({ email }, (err, dbUser) => {
        if (err) next(err);
        if (dbUser && dbUser.isDeleted) {
          const user = dbUser;
          user.isDeleted = false;
          user.save((error, savedUser) => {
            if (error) next(error);
            res.json({
              success: true,
              revived: true,
              savedUser
            });
          });
        }
        const user = new User({
          username,
          password,
          mobileNumber,
          school,
          firstName,
          lastName,
          email
        });
        user.save((error, savedUser) => {
          if (error) next(error);
          res.json(savedUser);
        });
      });
    })
    .catch(err => next(err));
}

/**
 * Update existing user
 * @property {string} req.body.username - The username of user.
 * @property {string} req.body.mobileNumber - The mobileNumber of user.
 * @property {string} req.body.password - The password of user.
 * @property {string} req.body.school - The school of user.
 * @property {string} req.body.firstName - The first name of user.
 * @property {string} req.body.lastName - The last name of user.
 * @returns {User}
 */
function update(req, res, next) {
  const { user } = req;
  user.username = req.body.username ? req.body.username : user.username;
  user.password = req.body.password ? req.body.password : user.password;
  user.mobileNumber = req.body.mobileNumber ? req.body.mobileNumber : user.mobileNumber;
  user.school = req.body.school ? req.body.school : user.school;
  user.firstName = req.body.firstName ? req.body.firstName : user.firstName;
  user.lastName = req.body.lastName ? req.body.lastName : user.lastName;
  user.email = req.body.email ? req.body.email : user.email;
  if (req.body.school) {
    School.get(req.body.school)
      .then(() => {
        user.save()
          .then((savedUser) => {
            res.json(savedUser);
          })
          .catch(e => next(e));
      })
      .catch(err => next(err));
  } else {
    user.save()
      .then((savedUser) => {
        res.json(savedUser);
      })
      .catch(e => next(e));
  }
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
  const { user } = req;
  user.isDeleted = true;
  user.save()
    .then((savedUser) => {
      res.json(savedUser);
    })
    .catch(e => next(e));
}

module.exports = {
  load, get, create, update, list, remove
};
