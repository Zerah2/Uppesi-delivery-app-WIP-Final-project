const express = require('express');
const router = express.Router();
const dispatchController = require('controllers/dispatchController');
const { verifyToken } = require('./middlewares/auth');

router.get('/routes', verifyToken, dispatchController.getRoutes);
router.post('/dispatch', verifyToken, dispatchController.createDispatch);
router.get('/dispatch/:id', verifyToken, dispatchController.trackDispatch);

module.exports = router;