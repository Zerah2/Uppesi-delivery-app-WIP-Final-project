const db = require('./config/db');

exports.getRoutes = async (req, res) => {
    try {
        const routes = await db.query('SELECT * FROM routes');
        res.json(routes);
    } catch (error) {
        res.status(500).json({ error: 'Error fetching routes' });
    }
};

exports.createDispatch = async (req, res) => {
    const { customerId, pickupLocation, dropoffLocation, packageDetails } = req.body;

    try {
        await db.query(
            'INSERT INTO dispatches (customerId, pickupLocation, dropoffLocation, packageDetails) VALUES (?, ?, ?, ?)',
            [customerId, pickupLocation, dropoffLocation, packageDetails]
        );
        res.status(201).json({ message: 'Dispatch created successfully' });
    } catch (error) {
        res.status(500).json({ error: 'Error creating dispatch' });
    }
};

exports.trackDispatch = async (req, res) => {
    const { id } = req.params;

    try {
        const dispatch = await db.query('SELECT * FROM dispatches WHERE id = ?', [id]);
        if (dispatch.length === 0) {
            return res.status(404).json({ message: 'Dispatch not found' });
        }

        res.json(dispatch[0]);
    } catch (error) {
        res.status(500).json({ error: 'Error tracking dispatch' });
    }
};