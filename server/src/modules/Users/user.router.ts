import express from 'express';

const router = express.Router();
const userController = require('./user.controller');

router.post('/register', userController.registration);
router.get('/login', userController.login);

module.exports = router;
