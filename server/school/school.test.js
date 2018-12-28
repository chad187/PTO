const mongoose = require('mongoose');
const request = require('supertest-as-promised');
const httpStatus = require('http-status');
const chai = require('chai'); // eslint-disable-line import/newline-after-import
const { expect } = chai;
const faker = require('faker');
const app = require('../../index');
const { postDistrict } = require('../helpers/TestMethods');

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

describe('## School APIs', () => {
  let school = {
    name: faker.name.lastName(),
    phone: faker.phone.phoneNumberFormat().replace(/-/g, ''),
    address: faker.address.streetAddress(),
    district: null
  };
  before((done) => {
    postDistrict
      .then((result) => {
        school.district = result._id;
        done();
      });
  });

  describe('# POST /api/schools', () => {
    it('should create a new school', (done) => {
      request(app)
        .post('/api/schools')
        .send(school)
        .expect(httpStatus.OK)
        .then((res) => {
          expect(res.body.name).to.equal(school.name);
          expect(res.body.phone).to.equal(school.phone);
          expect(res.body.district).to.equal(String(school.district));
          expect(res.body.address).to.equal(school.address);
          school = res.body;
          done();
        })
        .catch(done);
    });
  });

  describe('# GET /api/schools/:schoolId', () => {
    it('should get school details', (done) => {
      request(app)
        .get(`/api/schools/${school._id}`)
        .expect(httpStatus.OK)
        .then((res) => {
          expect(res.body.name).to.equal(school.name);
          expect(res.body.phone).to.equal(school.phone);
          expect(res.body.district).to.equal(school.district);
          expect(res.body.address).to.equal(school.address);
          done();
        })
        .catch(done);
    });

    it('should report error with message - Not found, when school does not exists', (done) => {
      request(app)
        .get('/api/schools/56c787ccc67fc16ccc1a5e92')
        .expect(httpStatus.NOT_FOUND)
        .then((res) => {
          expect(res.body.message).to.equal('Not Found');
          done();
        })
        .catch(done);
    });
  });

  describe('# PUT /api/schools/:scholId', () => {
    it('should fail to update school details', (done) => {
      const tempDistrict = school.district;
      school.district = '56c787ccc67fc16ccc1a5e92';
      request(app)
        .put(`/api/schools/${school._id}`)
        .send(school)
        .expect(httpStatus.NOT_FOUND)
        .then((res) => {
          expect(res.body.message).to.equal('Not Found');
          school.district = tempDistrict;
          done();
        })
        .catch(done);
    });
  });

  describe('# PUT /api/schools/:schoolId', () => {
    it('should update school details', (done) => {
      school.name = faker.name.lastName();
      school.phone = faker.phone.phoneNumberFormat().replace(/-/g, '');
      school.address = faker.address.streetAddress();
      request(app)
        .put(`/api/schools/${school._id}`)
        .send(school)
        .expect(httpStatus.OK)
        .then((res) => {
          expect(res.body.name).to.equal(school.name);
          expect(res.body.phone).to.equal(school.phone);
          expect(res.body.district).to.equal(school.district);
          expect(res.body.address).to.equal(school.address);
          school = res.body;
          done();
        })
        .catch(done);
    });
  });

  describe('# GET /api/schools/', () => {
    it('should get all schools', (done) => {
      request(app)
        .get('/api/schools')
        .expect(httpStatus.OK)
        .then((res) => {
          expect(res.body).to.be.an('array');
          done();
        })
        .catch(done);
    });

    it('should get all schools (with limit and skip)', (done) => {
      request(app)
        .get('/api/schools')
        .query({ limit: 10, skip: 1 })
        .expect(httpStatus.OK)
        .then((res) => {
          expect(res.body).to.be.an('array');
          done();
        })
        .catch(done);
    });
  });

  describe('# DELETE /api/schools/', () => {
    it('should delete school', (done) => {
      request(app)
        .delete(`/api/schools/${school._id}`)
        .expect(httpStatus.OK)
        .then((res) => {
          expect(res.body.deletedSchool.name).to.equal(school.name);
          expect(res.body.deletedSchool.phone).to.equal(school.phone);
          expect(res.body.deletedSchool.district).to.equal(school.district);
          expect(res.body.deletedSchool.address).to.equal(school.address);
          done();
        })
        .catch(done);
    });
  });
});
