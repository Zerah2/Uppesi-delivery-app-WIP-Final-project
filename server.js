const express = require('express');
const app = express();
const authRoutes = require('./Routes/auth');
const userRoutes = require('./Routes/user');
const adminRoutes = require('./Routes/admin');
const dispatchRoutes = require('./Routes/dispatch');
const path = require('path');
require('dotenv').config();

app.use(express.json());

app.use(express.static(path.join(__dirname, 'public')));


app.use('/auth', authRoutes);
app.use('/user', userRoutes);
app.use('/admin', adminRoutes);
app.use('/dispatch', dispatchRoutes);

const PORT = process.env.PORT || 7500;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
