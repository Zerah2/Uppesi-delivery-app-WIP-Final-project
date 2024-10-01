const express = require('express');
const router = express.Router();
const adminController = require('controllers/adminController');
const { verifyToken } = require('./middlewares/auth');

router.get('/users', verifyToken, adminController.getAllUsers);
router.delete('/users/:id', verifyToken, adminController.deleteUser);
router.put('/users/:id', verifyToken, adminController.updateUser);

module.exports = router;