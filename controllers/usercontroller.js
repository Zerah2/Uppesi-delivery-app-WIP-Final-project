const db = require('./config/db');

exports.getProfile = async (req, res) => {
    try {
        const user = await db.query('SELECT * FROM users WHERE id = ?', [req.userId]);
        res.json(user[0]);
    } catch (error) {
        res.status(500).json({ error: 'Error fetching profile' });
    }
};