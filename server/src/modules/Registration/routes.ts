const express = require('express');

const validations = require('./validations');
const controllers = require('./controllers');

const router = express.Router();

router.post(
	'/registration',
	validations.registration,
	controllers.registration
);
router.get('/activate/:link', controllers.activate);

module.exports = router;
