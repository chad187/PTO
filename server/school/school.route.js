const express = require('express');
const validate = require('express-validation');
const paramValidation = require('../../config/param-validation');
const schoolCtrl = require('./school.controller');

const router = express.Router(); // eslint-disable-line new-cap

router.route('/')
  /** GET /api/schools - Get list of schools */
  .get(schoolCtrl.list)

  /** POST /api/schools - Create new school */
  .post(validate(paramValidation.createUser), schoolCtrl.create);

router.route('/:schoolId')
  /** GET /api/schools/:schoolId - Get school */
  .get(schoolCtrl.get)

  /** PUT /api/schools/:schoolId - Update school */
  .put(validate(paramValidation.updateSchool), schoolCtrl.update)

  /** DELETE /api/schools/:schoolId - Delete school */
  .delete(schoolCtrl.remove);

/** Load school when API with schoolId route parameter is hit */
router.param('schoolId', schoolCtrl.load);

module.exports = router;
