import express = require('express');

const controllers = require('./controllers');
const AuthMiddleware = require('../middlewares/auth-middleware');

const router = express.Router();

router.get('/users', AuthMiddleware, controllers.fetchUsers);
router.post('/password_recovery', controllers.PasswordRecovery);
router.patch('/password_update', controllers.PasswordUpdate);

module.exports = router;
