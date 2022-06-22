import express = require('express');

const controllers = require('./controllers');

const router = express.Router();

router.post('/login', controllers.login);
router.post('/logout', controllers.logout);
router.post('/refreshToken', controllers.refresh);

module.exports = router;
