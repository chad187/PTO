const express = require('express');
const validate = require('express-validation');
const paramValidation = require('../../config/param-validation');
const districtCtrl = require('./district.controller');

const router = express.Router(); // eslint-disable-line new-cap

router.route('/')
  /** GET /api/districts - Get list of districts */
  .get(districtCtrl.list)

  /** POST /api/districts - Create new district */
  .post(validate(paramValidation.createDistrict), districtCtrl.create);

router.route('/:districtId')
  /** GET /api/districts/:districId - Get district */
  .get(districtCtrl.get)

  /** PUT /api/districts/:districtId - Update district */
  .put(validate(paramValidation.updateDistrict), districtCtrl.update)

  /** DELETE /api/districts/:districtId - Delete district */
  .delete(districtCtrl.remove);

/** Load district when API with districtId route parameter is hit */
router.param('districtId', districtCtrl.load);

module.exports = router;
