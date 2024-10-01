const express = require('express');
const router = express.Router();
const userController = require('./controllers/userController');
const authenticate = require('./middleware/authmiddleware');

router.post('/signup', userController.registerUser);

router.post('/login', userController.loginUser);

router.get('/profile', authenticate, userController.getUserProfile);

module.exports = router;
