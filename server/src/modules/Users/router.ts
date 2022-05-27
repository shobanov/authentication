const express = require('express');

const validation = require('./validation');
const controller = require('./controller');

const router = express.Router();

router.post('/registration', validation, controller.registration);
router.post('/login', controller.login);

module.exports = router;
