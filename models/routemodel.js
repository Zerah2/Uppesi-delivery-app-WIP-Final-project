const db = require('./config/db');

exports.getAllRoutes = async () => {
    const query = 'SELECT * FROM routes';
    return db.query(query);
};

exports.createRoute = async (name, distance) => {
    const query = 'INSERT INTO routes (name, distance) VALUES (?, ?)';
    const values = [name, distance];
    return db.query(query, values);
};