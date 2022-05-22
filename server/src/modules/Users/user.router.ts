import express from 'express';

const userController = require('./user.controller');

const router = express.Router();

router.post('/register', userController.userRegister);
// router.get('/login', userController.userlogin);

module.exports = router;
