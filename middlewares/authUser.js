const jwt = require('jsonwebtoken');
require('dotenv').config();
const router = express.Router();
const { verifyToken } = require('./middlewares/auth');
const userController = require('controllers/userController');

exports.verifyToken = (req, res, next) => {
    const token = req.headers['authorization'];
    if (!token) return res.status(403).json({ message: 'No token provided' });

    jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
        if (err) return res.status(500).json({ message: 'Failed to authenticate token' });

        req.userId = decoded.id;
        req.userRole = decoded.role;
        next();
    });
    router.get('/profile', verifyToken, userController.getProfile);

};