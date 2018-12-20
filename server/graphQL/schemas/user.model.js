const { buildSchema } = require('graphql');
const User = require('../../user/user.model');


const schema = buildSchema(`
  type Query {
    user(_id: String!): User
    users(school: String): [User]
  },
  type Mutation {
  	creatUser(username: String!, firstName: String!, lastName: String!, mobileNumber: String!, school: String!, email: String!, isDeleted: Boolean): User
  	removeUser(id: String!): User
    updateUser(id: String!, username: String, firstName: String, lastName: String, mobileNumber: String, school: String, email: String): User
  }
  type User {
    _id: String
    username: String
    firstName: String
    lastName: String
    mobileNumber: String
    isDeleted: Boolean
    email: String
  }
`);

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
function create(args) {
  const {
    username,
    password,
    mobileNumber,
    school,
    firstName,
    lastName,
    email
  } = args;
  School.get(school)
    .then(() => {
      User.findOne({ email }, (err, dbUser) => {
        if (err) return err;
        if (dbUser && dbUser.isDeleted) {
          const user = dbUser;
          user.isDeleted = false;
          user.save((error, savedUser) => {
            if (error) return error;
            return {
              success: true,
              revived: true,
              savedUser
            };
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
          if (error) return error;
          return savedUser;
        });
      });
    })
    .catch(err => {return err});
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
function update(args) {
  const user = User.get(args._id);
  user.username = args.username ? args.username : user.username;
  user.password = args.password ? args.password : user.password;
  user.mobileNumber = args.mobileNumber ? args.mobileNumber : user.mobileNumber;
  user.school = args.school ? args.school : user.school;
  user.firstName = args.firstName ? args.firstName : user.firstName;
  user.lastName = args.lastName ? args.lastName : user.lastName;
  user.email = args.email ? args.email : user.email;
  if (args.school) {
    School.get(args.school)
      .then(() => {
        user.save()
          .then((savedUser) => {
            return savedUser;
          })
          .catch(e => {return e});
      })
      .catch(err => {return err});
  }
}

/**
 * Delete user.
 * @returns {User}
 */
function remove(args) {
  const user = User.get(args._id);
  user.isDeleted = true;
  user.save()
    .then((savedUser) => {
      return savedUser;
    })
    .catch(e => {return e});
}

const get = (_id) => {
	return User.get(_id)
    .then((user) => {
      return user;
    })
    .catch(e => {return e});
}

function list() {
	return User.list()
		.then(users => {return users})
    	.catch(e => {return e});
}

const root = {
    user: get,
    users: list,
    updateUser: update,
    removeUser: remove,
    creatUser: create
};

module.exports = {root, schema};