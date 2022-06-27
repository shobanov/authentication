import express = require('express');

const controllers = require('./controllers');
const AuthMiddleware = require('../middlewares/auth-middleware');

const router = express.Router();

router.get('/users', AuthMiddleware, controllers.fetchUsers);

module.exports = router;
