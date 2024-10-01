const db = require('./config/db');

exports.getAllUsers = async (req, res) => {
    if (req.userRole !== 'admin') {
        return res.status(403).json({ message: 'Unauthorized' });
    }

    try {
        const users = await db.query('SELECT * FROM users');
        res.json(users);
    } catch (error) {
        res.status(500).json({ error: 'Error fetching users' });
    }
};

exports.updateUser = async (req, res) => {
    if (req.userRole !== 'admin') {
        return res.status(403).json({ message: 'Unauthorized' });
    }

    const { id } = req.params;
    const { username, email, role } = req.body;

    try {
        await db.query('UPDATE users SET username = ?, email = ?, role = ? WHERE id = ?', [username, email, role, id]);
        res.json({ message: 'User updated successfully' });
    } catch (error) {
        res.status(500).json({ error: 'Error updating user' });
    }
};

exports.deleteUser = async (req, res) => {
    if (req.userRole !== 'admin') {
        return res.status(403).json({ message: 'Unauthorized' });
    }

    const { id } = req.params;

    try {
        await db.query('DELETE FROM users WHERE id = ?', [id]);
        res.json({ message: 'User deleted successfully' });
    } catch (error) {
        res.status(500).json({ error: 'Error deleting user' });
    }
};