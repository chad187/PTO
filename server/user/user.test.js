const mongoose = require('mongoose');
const request = require('supertest-as-promised');
const httpStatus = require('http-status');
const chai = require('chai'); // eslint-disable-line import/newline-after-import
const { expect } = chai;
const faker = require('faker');
const app = require('../../index');
let School = require('../school/school.model');

chai.config.includeStack = true;

/**
 * root level hooks
 */
after((done) => {
  // required because https://github.com/Automattic/mongoose/issues/1251#issuecomment-65793092
  mongoose.models = {};
  mongoose.modelSchemas = {};
  mongoose.connection.close();
  done();
});

describe('## User APIs', () => {
  let postSchool = new Promise((resolve, reject) => {
  let school = new School({ name: faker.name.lastName(), phone: faker.phone.phoneNumberFormat().replace(/-/g, ''), district: district , address: faker.address.streetAddress() });
  user.save((err, user) => {
    if (err) reject(err);
    resolve(user);
  });
});
  let user = {
    username: faker.internet.userName(),
    password: faker.internet.password(),
    mobileNumber: faker.phone.phoneNumberFormat().replace(/-/g, ''),
    school: faker.company.companyName(),
    firstName: faker.name.firstName(),
    lastName: faker.name.lastName()
  };

  describe('# POST /api/users', () => {
    it('should create a new user', (done) => {
      request(app)
        .post('/api/users')
        .send(user)
        .expect(httpStatus.OK)
        .then((res) => {
          expect(res.body.username).to.equal(user.username);
          expect(res.body.mobileNumber).to.equal(user.mobileNumber);
          expect(res.body.firstName).to.equal(user.firstName);
          expect(res.body.school).to.equal(user.school);
          expect(res.body.lastName).to.equal(user.lastName);
          user = res.body;
          done();
        })
        .catch(done);
    });
  });

  describe('# GET /api/users/:userId', () => {
    it('should get user details', (done) => {
      request(app)
        .get(`/api/users/${user._id}`)
        .expect(httpStatus.OK)
        .then((res) => {
          expect(res.body.username).to.equal(user.username);
          expect(res.body.mobileNumber).to.equal(user.mobileNumber);
          expect(res.body.school).to.equal(user.school);
          expect(res.body.firstName).to.equal(user.firstName);
          expect(res.body.lastName).to.equal(user.lastName);
          done();
        })
        .catch(done);
    });

    it('should report error with message - Not found, when user does not exists', (done) => {
      request(app)
        .get('/api/users/56c787ccc67fc16ccc1a5e92')
        .expect(httpStatus.NOT_FOUND)
        .then((res) => {
          expect(res.body.message).to.equal('Not Found');
          done();
        })
        .catch(done);
    });
  });

  describe('# PUT /api/users/:userId', () => {
    it('should update user details', (done) => {
      user.username = faker.internet.userName();
      user.mobileNumber = faker.phone.phoneNumberFormat().replace(/-/g, '');
      user.school = faker.company.companyName();
      request(app)
        .put(`/api/users/${user._id}`)
        .send(user)
        .expect(httpStatus.OK)
        .then((res) => {
          expect(res.body.username).to.equal(user.username);
          expect(res.body.mobileNumber).to.equal(user.mobileNumber);
          expect(res.body.district).to.equal(user.district);
          expect(res.body.school).to.equal(user.school);
          expect(res.body.firstName).to.equal(user.firstName);
          expect(res.body.lastName).to.equal(user.lastName);
          done();
        })
        .catch(done);
    });
  });

  describe('# GET /api/users/', () => {
    it('should get all users', (done) => {
      request(app)
        .get('/api/users')
        .expect(httpStatus.OK)
        .then((res) => {
          expect(res.body).to.be.an('array');
          done();
        })
        .catch(done);
    });

    it('should get all users (with limit and skip)', (done) => {
      request(app)
        .get('/api/users')
        .query({ limit: 10, skip: 1 })
        .expect(httpStatus.OK)
        .then((res) => {
          expect(res.body).to.be.an('array');
          done();
        })
        .catch(done);
    });
  });

  describe('# DELETE /api/users/', () => {
    it('should delete user', (done) => {
      request(app)
        .delete(`/api/users/${user._id}`)
        .expect(httpStatus.OK)
        .then((res) => {
          expect(res.body.username).to.equal(user.username);
          expect(res.body.mobileNumber).to.equal(user.mobileNumber);
          expect(res.body.school).to.equal(user.school);
          expect(res.body.firstName).to.equal(user.firstName);
          expect(res.body.lastName).to.equal(user.lastName);
          done();
        })
        .catch(done);
    });
  });
});
