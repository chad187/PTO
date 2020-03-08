const mongoose = require('mongoose');
const request = require('supertest-as-promised');
const httpStatus = require('http-status');
const chai = require('chai'); // eslint-disable-line import/newline-after-import
const { expect } = chai;
const faker = require('faker');
const app = require('../../index');

chai.config.includeStack = true;

/**
 * root level hooks
 */
after((done) => {
  // required because https://github.com/Automattic/mongoose/issues/1251#issuecomment-65793092
  mongoose.models = {};
  mongoose.modelSchemas = {};
  mongoose.connection.close(done);
});

describe('## District APIs', () => {
  let district;
  before((done) => {
    district = {
      name: faker.name.lastName(),
      phone: faker.phone.phoneNumberFormat().replace(/-/g, ''),
      city: faker.address.city(),
      address: faker.address.streetAddress(),
      state: faker.address.state()
    };
    done();
  });

  describe('# POST /api/districts', () => {
    it('should create a new district', (done) => {
      request(app)
        .post('/api/districts')
        .send(district)
        .expect(httpStatus.OK)
        .then((res) => {
          expect(res.body.name).to.equal(district.name);
          expect(res.body.phone).to.equal(district.phone);
          expect(res.body.city).to.equal(district.city);
          expect(res.body.address).to.equal(district.address);
          expect(res.body.state).to.equal(district.state);
          district = res.body;
          done();
        })
        .catch(done);
    });
  });

  describe('# GET /api/districts/:districtId', () => {
    it('should get district details', (done) => {
      request(app)
        .get(`/api/districts/${district._id}`)
        .expect(httpStatus.OK)
        .then((res) => {
          expect(res.body.name).to.equal(district.name);
          expect(res.body.phone).to.equal(district.phone);
          expect(res.body.city).to.equal(district.city);
          expect(res.body.address).to.equal(district.address);
          expect(res.body.state).to.equal(district.state);
          done();
        })
        .catch(done);
    });

    it('should report error with message - Not found, when district does not exists', (done) => {
      request(app)
        .get('/api/districts/56c787ccc67fc16ccc1a5e92')
        .expect(httpStatus.NOT_FOUND)
        .then((res) => {
          expect(res.body.message).to.equal('Not Found');
          done();
        })
        .catch(done);
    });
  });

  describe('# PUT /api/districts/:districtId', () => {
    it('should update district details', (done) => {
      district.name = faker.name.lastName();
      district.city = faker.address.city();
      district.address = faker.address.streetAddress();
      district.state = faker.address.state();
      request(app)
        .put(`/api/districts/${district._id}`)
        .send(district)
        .expect(httpStatus.OK)
        .then((res) => {
          expect(res.body.name).to.equal(district.name);
          expect(res.body.phone).to.equal(district.phone);
          expect(res.body.city).to.equal(district.city);
          expect(res.body.address).to.equal(district.address);
          expect(res.body.state).to.equal(district.state);
          done();
        })
        .catch(done);
    });
  });

  describe('# GET /api/districts/', () => {
    it('should get all districts', (done) => {
      request(app)
        .get('/api/districts')
        .expect(httpStatus.OK)
        .then((res) => {
          expect(res.body.list).to.be.an('array');
          done();
        })
        .catch(done);
    });

    it('should get all districts (with limit and skip)', (done) => {
      request(app)
        .get('/api/districts')
        .query({ limit: 10, skip: 1 })
        .expect(httpStatus.OK)
        .then((res) => {
          expect(res.body.list).to.be.an('array');
          done();
        })
        .catch(done);
    });
  });

  describe('# DELETE /api/districts/', () => {
    it('should delete district', (done) => {
      request(app)
        .delete(`/api/districts/${district._id}`)
        .expect(httpStatus.OK)
        .then((res) => {
          expect(res.body.deletedDistrict.name).to.equal(district.name);
          expect(res.body.deletedDistrict.phone).to.equal(district.phone);
          expect(res.body.deletedDistrict.city).to.equal(district.city);
          expect(res.body.deletedDistrict.address).to.equal(district.address);
          expect(res.body.deletedDistrict.state).to.equal(district.state);
          done();
        })
        .catch(done);
    });
  });
});
