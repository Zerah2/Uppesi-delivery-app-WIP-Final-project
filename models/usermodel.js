const db = require('./config/db');

exports.createUser = async (username, email, password, role) => {
    const query = 'INSERT INTO users (username, email, password, role) VALUES (?, ?, ?, ?)';
    const values = [username, email, password, role];
    return db.query(query, values);
};

exports.findByEmail = async (email) => {
    const query = 'SELECT * FROM users WHERE email = ?';
    const values = [email];
    const [rows] = await db.query(query, values);
    return rows[0]; 
};

exports.getAllUsers = async () => {
    const query = 'SELECT * FROM users';
    return db.query(query);
};

exports.deleteUser = async (id) => {
    const query = 'DELETE FROM users WHERE id = ?';
    const values = [id];
    return db.query(query, values);
};