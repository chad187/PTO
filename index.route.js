const express = require('express');
const userRoutes = require('./server/user/user.route');
const districtRoutes = require('./server/district/district.route');
const schoolRoutes = require('./server/school/school.route');
const authRoutes = require('./server/auth/auth.route');

const router = express.Router(); // eslint-disable-line new-cap

// TODO: use glob to match *.route files

/** GET /health-check - Check service health */
router.get('/health-check', (req, res) => res.send('OK'));

// mount user routes at /users
router.use('/users', userRoutes);

// mount district routes at /districts
router.use('/districts', districtRoutes);

// mount school routes at /schools
router.use('/schools', schoolRoutes);

// mount auth routes at /auth
router.use('/auth', authRoutes);

module.exports = router;
