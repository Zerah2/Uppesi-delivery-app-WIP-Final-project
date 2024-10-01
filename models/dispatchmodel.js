const db = require('./config/db');

exports.createDispatch = async (customerId, pickupLocation, dropoffLocation, packageDetails) => {
    const query = 'INSERT INTO dispatches (customerId, pickupLocation, dropoffLocation, packageDetails) VALUES (?, ?, ?, ?)';
    const values = [customerId, pickupLocation, dropoffLocation, packageDetails];
    return db.query(query, values);
};

exports.getAllDispatches = async () => {
    const query = 'SELECT * FROM dispatches';
    return db.query(query);
};

exports.getDispatchById = async (id) => {
    const query = 'SELECT * FROM dispatches WHERE id = ?';
    const values = [id];
    const [rows] = await db.query(query, values);
    return rows[0];
};