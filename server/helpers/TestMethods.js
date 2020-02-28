const faker = require('faker');
const School = require('../school/school.model');
const District = require('../district/district.model');
const User = require('../user/user.model');

const postDistrict = new Promise((resolve, reject) => {
  const district = new District(
    {
      name: faker.name.findName(),
      city: faker.address.city(),
      phone: faker.phone.phoneNumberFormat().replace(/-/g, ''),
      address: faker.address.streetAddress(),
      state: faker.address.state()
    }
  );
  district.save((err, savedDistrict) => {
    if (err) reject(err);
    resolve(savedDistrict);
  });
});

const postSchool = (district) => new Promise((resolve, reject) => {
  const school = new School(
    {
      name: faker.name.lastName(),
      phone: faker.phone.phoneNumberFormat().replace(/-/g, ''),
      district: district._id,
      address: faker.address.streetAddress()
    }
  );
  school.save((err, savedSchool) => {
    if (err) reject(err);
    resolve({ school: savedSchool, district });
  });
});

const postUser = (result) => new Promise((resolve, reject) => {
  const user = new User({
    username: faker.internet.userName(),
    password: faker.internet.password(),
    mobileNumber: faker.phone.phoneNumberFormat().replace(/-/g, ''),
    school: result.school._id,
    firstName: faker.name.firstName(),
    lastName: faker.name.lastName(),
    email: faker.internet.email()
  });
  user.save((err, savedUser) => {
    if (err) reject(err);
    resolve({ school: result.school, district: result.district, user: savedUser });
  });
});

module.exports = { postDistrict, postSchool, postUser };
